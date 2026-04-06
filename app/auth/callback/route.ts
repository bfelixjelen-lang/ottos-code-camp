import { NextResponse } from "next/server";
import { createSupabaseServerClient, hasSupabaseEnv } from "@/lib/supabase/server";

type VerifyType =
  | "signup"
  | "magiclink"
  | "recovery"
  | "invite"
  | "email_change"
  | "email";

function buildRedirectUrl(requestUrl: string, path: string) {
  return new URL(path, requestUrl);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as VerifyType | null;
  const next = url.searchParams.get("next") || "/dashboard";

  if (!hasSupabaseEnv()) {
    return NextResponse.redirect(buildRedirectUrl(request.url, "/login"));
  }

  const supabase = await createSupabaseServerClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(buildRedirectUrl(request.url, next));
    }
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type
    });

    if (!error) {
      const {
        data: { session }
      } = await supabase.auth.getSession();

      return NextResponse.redirect(
        buildRedirectUrl(request.url, session ? next : "/login?confirmed=1")
      );
    }
  }

  return NextResponse.redirect(buildRedirectUrl(request.url, "/login"));
}
