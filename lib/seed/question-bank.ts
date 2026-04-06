import { mathMilestonesItems } from "@/lib/seed/math-milestones-items";
import type {
  Competency,
  Difficulty,
  Question,
  Subject,
  SubjectSlug
} from "@/types/domain";

export const subjects: Subject[] = [
  {
    id: "subject-math",
    slug: "math",
    name: "Math",
    description: "Number reasoning, operations, fractions, decimals, and problem solving.",
    accent: "from-[#f4a340] to-[#f9d27d]"
  },
  {
    id: "subject-ela",
    slug: "ela",
    name: "English Language Arts",
    description: "Reading, writing, vocabulary, and evidence-based thinking.",
    accent: "from-[#3d6fb4] to-[#7cb5f2]"
  },
  {
    id: "subject-science",
    slug: "science",
    name: "Science",
    description: "Earth processes, matter, electricity, and life science.",
    accent: "from-[#1b8a6b] to-[#7bc9a5]"
  },
  {
    id: "subject-social-studies",
    slug: "social-studies",
    name: "Social Studies",
    description: "United States history, geography, civics, and economics.",
    accent: "from-[#8d5cce] to-[#c3a8ef]"
  }
];

export const competencies: Competency[] = [
  {
    id: "math-nr1",
    subjectSlug: "math",
    code: "5.NR.1",
    title: "Use place value and patterns in base ten",
    description:
      "Read, compare, round, and reason about whole numbers and decimals using place value."
  },
  {
    id: "math-nr2",
    subjectSlug: "math",
    code: "5.NR.2",
    title: "Multiply and divide whole numbers",
    description:
      "Solve problems with multi-digit multiplication and division using equations and strategies."
  },
  {
    id: "math-nr3",
    subjectSlug: "math",
    code: "5.NR.3",
    title: "Reason with fractions",
    description:
      "Represent, compare, and solve problems involving fractions and mixed numbers."
  },
  {
    id: "math-nr4",
    subjectSlug: "math",
    code: "5.NR.4",
    title: "Reason with decimals",
    description:
      "Add, subtract, multiply, and divide decimals in contextual and computation problems."
  },
  {
    id: "math-nr5",
    subjectSlug: "math",
    code: "5.NR.5",
    title: "Interpret and evaluate numerical expressions",
    description:
      "Write, interpret, and evaluate numerical expressions in mathematical and real-world contexts."
  },
  {
    id: "math-par6",
    subjectSlug: "math",
    code: "5.PAR.6",
    title: "Analyze numerical patterns",
    description:
      "Create and compare numerical patterns, including relationships between corresponding terms."
  },
  {
    id: "math-mdr7",
    subjectSlug: "math",
    code: "5.MDR.7",
    title: "Measurement, time, conversions, and data",
    description:
      "Solve problems involving measurement conversions, elapsed time, and interpretation of data displays."
  },
  {
    id: "math-gsr8",
    subjectSlug: "math",
    code: "5.GSR.8",
    title: "Geometry and volume",
    description:
      "Classify polygons and determine the volume of right rectangular prisms."
  },
  {
    id: "ela-tra2",
    subjectSlug: "ela",
    code: "K-5.T.RA.2",
    title: "Curating sources and evidence",
    description:
      "Use relevant details from a text to support an answer, explanation, or claim."
  },
  {
    id: "ela-tss1",
    subjectSlug: "ela",
    code: "K-5.T.SS.1",
    title: "Organization",
    description:
      "Identify how a text or paragraph is organized and determine central ideas or summaries."
  },
  {
    id: "ela-lv3",
    subjectSlug: "ela",
    code: "K-12.L.V.3",
    title: "Meaning and purpose",
    description:
      "Use context to determine the meaning of words and phrases and explain how they affect meaning."
  },
  {
    id: "ela-tt3",
    subjectSlug: "ela",
    code: "K-5.T.T.3",
    title: "Opinion techniques",
    description:
      "Develop opinion writing with reasons, evidence, and effective organization."
  },
  {
    id: "science-s5e1",
    subjectSlug: "science",
    code: "S5E1",
    title: "Earth surface features and processes",
    description:
      "Explain how constructive and destructive processes shape Earth's surface."
  },
  {
    id: "science-s5p1",
    subjectSlug: "science",
    code: "S5P1",
    title: "Physical and chemical changes",
    description:
      "Use evidence to distinguish between physical changes and chemical changes."
  },
  {
    id: "science-s5p2",
    subjectSlug: "science",
    code: "S5P2",
    title: "Electricity",
    description:
      "Compare static electricity with current electricity and reason about simple circuits."
  },
  {
    id: "science-s5l1",
    subjectSlug: "science",
    code: "S5L1",
    title: "Classify organisms",
    description:
      "Classify living things into groups using observable characteristics."
  },
  {
    id: "ss-ss5h1",
    subjectSlug: "social-studies",
    code: "SS5H1",
    title: "Life changed in America at the turn of the century",
    description:
      "Describe industrialization, migration, technology, and new roles in the United States around 1900."
  },
  {
    id: "ss-ss5h2",
    subjectSlug: "social-studies",
    code: "SS5H2",
    title: "World War I and the 1920s",
    description:
      "Explain events, people, and social changes connected to World War I and the Roaring Twenties."
  },
  {
    id: "ss-ss5h3",
    subjectSlug: "social-studies",
    code: "SS5H3",
    title: "Great Depression and World War II",
    description:
      "Explain the Great Depression, New Deal responses, and U.S. involvement in World War II."
  },
  {
    id: "ss-ss5cg1",
    subjectSlug: "social-studies",
    code: "SS5CG1",
    title: "Rights and responsibilities of citizens",
    description:
      "Explain how the Constitution protects rights and what responsibilities citizens have."
  }
];

const placeholderNote =
  "Original MVP practice item written from public Georgia standards descriptions and support documents. Not an official Georgia Milestones question.";

const mathCompetencyByStandard: Record<string, string> = {
  "5.NR.1": "math-nr1",
  "5.NR.2": "math-nr2",
  "5.NR.3": "math-nr3",
  "5.NR.4": "math-nr4",
  "5.NR.5": "math-nr5",
  "5.PAR.6": "math-par6",
  "5.MDR.7": "math-mdr7",
  "5.GSR.8": "math-gsr8"
};

function normalizeImportedText(value: string) {
  return value
    .replaceAll("Ã—", "x")
    .replaceAll("×", "x")
    .replaceAll("Ã·", "divided by")
    .replaceAll("÷", "divided by")
    .replaceAll("Â·", "-");
}

function getDifficultyFromDok(dok: 1 | 2 | 3 | 4): Difficulty {
  if (dok === 1) {
    return "foundation";
  }

  if (dok === 2) {
    return "on-track";
  }

  return "challenge";
}

const mathQuestions: Question[] = mathMilestonesItems.map((item) => ({
  id: item.id,
  subjectSlug: "math",
  competencyIds: [mathCompetencyByStandard[item.standard_code] ?? "math-nr1"],
  grade: item.grade,
  assessment: item.assessment,
  itemType: "multiple_choice",
  standardCode: item.standard_code,
  reportingCategory: item.reporting_category,
  learningTarget: item.learning_target,
  dok: item.dok,
  stem: normalizeImportedText(item.stem),
  choices: item.choices.map((choice) => ({
    id: choice.key,
    text: normalizeImportedText(choice.text)
  })),
  correctChoiceId: item.answer_key,
  explanation: normalizeImportedText(item.explanation),
  difficulty: getDifficultyFromDok(item.dok),
  tags: item.tags,
  alignmentNote: item.alignment_note,
  sourceMetadata: {
    source: "GaDOE Grade 5 Mathematics blueprint and Otto's Code Camp original practice bank",
    note: placeholderNote
  }
}));

function enrichLegacyQuestion(
  question: (typeof legacyQuestions)[number]
): Question {
  const primaryCompetencyId = question.competencyIds[0] ?? "";
  const competency = getCompetencyById(primaryCompetencyId);
  const isScience = question.subjectSlug === "science";
  const isEla = question.subjectSlug === "ela";
  const isSocialStudies = question.subjectSlug === "social-studies";

  let reportingCategory = "Subject Practice";
  let assessment = "Georgia Milestones";
  const standardCode = competency?.code ?? "5.PRACTICE";
  const learningTarget =
    competency?.description ?? "Practice and review grade-level skills.";
  const tags = [
    "grade5",
    isSocialStudies ? "georgia-standards" : "georgia-milestones",
    question.subjectSlug
  ];

  if (isScience) {
    reportingCategory = "Science Practice";
  } else if (isEla) {
    reportingCategory = "ELA Practice";
  } else if (isSocialStudies) {
    reportingCategory = "Social Studies Practice";
    assessment = "Georgia Standards Practice";
  } else {
    reportingCategory = "Math Practice";
  }

  return {
    ...question,
    subjectSlug: question.subjectSlug as SubjectSlug,
    choices: question.choices.map((choice) => ({
      id: choice.id as ChoiceId,
      text: choice.text
    })),
    correctChoiceId: question.correctChoiceId as ChoiceId,
    difficulty: question.difficulty as Difficulty,
    grade: 5,
    assessment,
    itemType: "multiple_choice",
    standardCode,
    reportingCategory,
    learningTarget,
    dok: question.difficulty === "challenge" ? 3 : question.difficulty === "on-track" ? 2 : 1,
    tags,
    alignmentNote: competency
      ? `Aligned to ${competency.code} through targeted practice.`
      : "Aligned to grade-level targeted practice."
  };
}

const legacyQuestions = [
  {
    id: "math-q-1",
    subjectSlug: "math",
    competencyIds: ["math-nr1"],
    stem: "Which number has a 6 in the thousandths place?",
    choices: [
      { id: "A", text: "8.064" },
      { id: "B", text: "8.640" },
      { id: "C", text: "8.406" },
      { id: "D", text: "8.046" }
    ],
    correctChoiceId: "C",
    explanation:
      "The thousandths place is the third digit to the right of the decimal point. In 8.406, the digit in the thousandths place is 6.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-2",
    subjectSlug: "math",
    competencyIds: ["math-nr1"],
    stem: "Which comparison is true?",
    choices: [
      { id: "A", text: "4.508 > 4.58" },
      { id: "B", text: "4.58 > 4.508" },
      { id: "C", text: "4.580 < 4.508" },
      { id: "D", text: "4.58 = 4.508" }
    ],
    correctChoiceId: "B",
    explanation:
      "Rewrite 4.58 as 4.580. Since 580 thousandths is greater than 508 thousandths, 4.58 is greater than 4.508.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-3",
    subjectSlug: "math",
    competencyIds: ["math-nr2"],
    stem: "What is 36 x 24?",
    choices: [
      { id: "A", text: "744" },
      { id: "B", text: "864" },
      { id: "C", text: "934" },
      { id: "D", text: "1,224" }
    ],
    correctChoiceId: "B",
    explanation:
      "Use partial products: 36 x 20 = 720 and 36 x 4 = 144. Then add 720 + 144 = 864.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-4",
    subjectSlug: "math",
    competencyIds: ["math-nr2"],
    stem: "A museum has 468 tickets to divide equally among 9 school groups. How many tickets does each group get?",
    choices: [
      { id: "A", text: "42" },
      { id: "B", text: "48" },
      { id: "C", text: "52" },
      { id: "D", text: "56" }
    ],
    correctChoiceId: "C",
    explanation:
      "Since 9 x 50 = 450 and 18 more are left, add 2 more groups of 9. So 50 + 2 = 52.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-1",
    subjectSlug: "ela",
    competencyIds: ["ela-tra2"],
    stem: "A student claims, 'Beavers help change the land around streams.' Which sentence is the best evidence for that claim?",
    choices: [
      { id: "A", text: "Beavers are mammals with thick fur and large teeth." },
      { id: "B", text: "A beaver dam can slow water and create a pond." },
      { id: "C", text: "Many beavers are active at night." },
      { id: "D", text: "Beavers eat bark, leaves, and twigs." }
    ],
    correctChoiceId: "B",
    explanation:
      "The claim is about changing land around streams, so the strongest evidence is the detail about dams slowing water and creating ponds.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-2",
    subjectSlug: "ela",
    competencyIds: ["ela-tra2"],
    stem: "Which sentence best supports the idea that school gardens can help students learn science?",
    choices: [
      { id: "A", text: "School gardens can be found behind many buildings." },
      { id: "B", text: "Students can observe roots, stems, and insects up close in a garden." },
      { id: "C", text: "Gardens sometimes have painted signs." },
      { id: "D", text: "Some gardens are near the cafeteria." }
    ],
    correctChoiceId: "B",
    explanation:
      "The idea is about learning science, so the best evidence is the detail about observing plant parts and insects.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-3",
    subjectSlug: "ela",
    competencyIds: ["ela-tss1"],
    stem: "Which sentence is the best summary of this paragraph: 'Sea turtles hatch on beaches and crawl toward the ocean. As they grow, they travel long distances. Later, many females return to the same kind of beach to lay eggs.'",
    choices: [
      { id: "A", text: "Sea turtles are small when they hatch." },
      { id: "B", text: "Some animals live near beaches." },
      { id: "C", text: "Sea turtles follow a life cycle that begins on beaches and continues in the ocean." },
      { id: "D", text: "Female turtles lay eggs in the sand." }
    ],
    correctChoiceId: "C",
    explanation:
      "A summary includes the central idea and the most important details, not just one fact from the paragraph.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-4",
    subjectSlug: "ela",
    competencyIds: ["ela-tss1"],
    stem: "A paragraph begins with a topic sentence about thunderstorms. The next three sentences describe how warm air rises, cools, and forms clouds. How is the paragraph organized?",
    choices: [
      { id: "A", text: "Problem and solution" },
      { id: "B", text: "Topic with supporting details" },
      { id: "C", text: "Compare and contrast" },
      { id: "D", text: "Question and answer" }
    ],
    correctChoiceId: "B",
    explanation:
      "The paragraph introduces a main idea and then gives supporting details that explain it.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "science-q-1",
    subjectSlug: "science",
    competencyIds: ["science-s5e1"],
    stem: "Which landform is most likely created by deposition?",
    choices: [
      { id: "A", text: "A canyon carved by fast-moving water" },
      { id: "B", text: "A delta built where a river drops sediment" },
      { id: "C", text: "A cliff worn away by waves" },
      { id: "D", text: "A valley cut by glaciers" }
    ],
    correctChoiceId: "B",
    explanation:
      "Deposition happens when water, wind, or ice drops sediment in a new place. Deltas form that way.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5E1",
      note: placeholderNote
    }
  },
  {
    id: "science-q-2",
    subjectSlug: "science",
    competencyIds: ["science-s5e1"],
    stem: "Which process would most likely wear down a mountain over time?",
    choices: [
      { id: "A", text: "Deposition" },
      { id: "B", text: "Erosion" },
      { id: "C", text: "Condensation" },
      { id: "D", text: "Reflection" }
    ],
    correctChoiceId: "B",
    explanation:
      "Erosion moves weathered rock and soil away, which can slowly wear down mountains.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5E1",
      note: placeholderNote
    }
  },
  {
    id: "science-q-3",
    subjectSlug: "science",
    competencyIds: ["science-s5p1"],
    stem: "Which example describes a physical change?",
    choices: [
      { id: "A", text: "A nail rusting outside" },
      { id: "B", text: "A marshmallow burning over a fire" },
      { id: "C", text: "Ice melting into liquid water" },
      { id: "D", text: "Vinegar reacting with baking soda" }
    ],
    correctChoiceId: "C",
    explanation:
      "Melting changes the state of water but does not create a new substance, so it is a physical change.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5P1",
      note: placeholderNote
    }
  },
  {
    id: "science-q-4",
    subjectSlug: "science",
    competencyIds: ["science-s5p1"],
    stem: "Which observation is the best evidence that a chemical change happened?",
    choices: [
      { id: "A", text: "A solid was cut into smaller pieces." },
      { id: "B", text: "A liquid was poured into a new cup." },
      { id: "C", text: "Bubbles formed and a new odor appeared." },
      { id: "D", text: "Water changed from one container shape to another." }
    ],
    correctChoiceId: "C",
    explanation:
      "Gas production and a new odor are common signs that a new substance formed during a chemical change.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5P1",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-1",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h1"],
    stem: "Why were cattle trails important in the late 1800s?",
    choices: [
      { id: "A", text: "They helped move cattle to railheads and markets." },
      { id: "B", text: "They were used to send telegraph messages." },
      { id: "C", text: "They connected airplanes to factories." },
      { id: "D", text: "They were built mainly for bicycles." }
    ],
    correctChoiceId: "A",
    explanation:
      "Cattle trails helped ranchers move cattle to railheads, where the cattle could then be shipped to larger markets.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-2",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h1"],
    stem: "Which invention is most closely connected to Alexander Graham Bell?",
    choices: [
      { id: "A", text: "The telephone" },
      { id: "B", text: "The light bulb" },
      { id: "C", text: "The airplane" },
      { id: "D", text: "The assembly line" }
    ],
    correctChoiceId: "A",
    explanation:
      "Alexander Graham Bell is best known for developing the telephone, which improved communication in the United States.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-3",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h2"],
    stem: "What event helped bring the United States into World War I?",
    choices: [
      { id: "A", text: "The Louisiana Purchase" },
      { id: "B", text: "The sinking of the Lusitania and continued conflict at sea" },
      { id: "C", text: "The California Gold Rush" },
      { id: "D", text: "The opening of the Erie Canal" }
    ],
    correctChoiceId: "B",
    explanation:
      "Attacks at sea, including the sinking of the Lusitania, increased tension and helped push the United States toward entering World War I.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-4",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h2"],
    stem: "Why is the 1920s sometimes called the Roaring Twenties?",
    choices: [
      { id: "A", text: "Because many people moved to farms" },
      { id: "B", text: "Because it was a time of economic growth and cultural change" },
      { id: "C", text: "Because all wars had ended forever" },
      { id: "D", text: "Because the Constitution was first written then" }
    ],
    correctChoiceId: "B",
    explanation:
      "The 1920s saw major economic growth, new inventions, and big cultural shifts in music, entertainment, and daily life.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "math-q-5",
    subjectSlug: "math",
    competencyIds: ["math-nr3"],
    stem: "Which fraction is equivalent to 3/4?",
    choices: [
      { id: "A", text: "6/12" },
      { id: "B", text: "9/12" },
      { id: "C", text: "8/10" },
      { id: "D", text: "12/20" }
    ],
    correctChoiceId: "B",
    explanation:
      "Multiply both the numerator and denominator of 3/4 by 3. That gives 9/12.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-6",
    subjectSlug: "math",
    competencyIds: ["math-nr3"],
    stem: "What is 2 1/3 + 1 1/3?",
    choices: [
      { id: "A", text: "3 2/3" },
      { id: "B", text: "3 1/3" },
      { id: "C", text: "4 2/6" },
      { id: "D", text: "4" }
    ],
    correctChoiceId: "A",
    explanation:
      "Add the whole numbers and the fractions separately: 2 + 1 = 3 and 1/3 + 1/3 = 2/3. The sum is 3 2/3.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-7",
    subjectSlug: "math",
    competencyIds: ["math-nr4"],
    stem: "What is 4.6 + 0.37?",
    choices: [
      { id: "A", text: "4.63" },
      { id: "B", text: "4.97" },
      { id: "C", text: "5.07" },
      { id: "D", text: "4.73" }
    ],
    correctChoiceId: "B",
    explanation:
      "Write 4.6 as 4.60, then add 4.60 + 0.37 = 4.97.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "math-q-8",
    subjectSlug: "math",
    competencyIds: ["math-nr4"],
    stem: "A notebook costs $2.45. How much do 3 notebooks cost?",
    choices: [
      { id: "A", text: "$5.35" },
      { id: "B", text: "$6.45" },
      { id: "C", text: "$7.35" },
      { id: "D", text: "$8.15" }
    ],
    correctChoiceId: "C",
    explanation:
      "Multiply 2.45 by 3. Two dollars times 3 is 6 dollars, and 45 cents times 3 is 135 cents, or 1 dollar and 35 cents. Together that is 7.35 dollars.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE Grade 5 Mathematics standards and curriculum map",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-5",
    subjectSlug: "ela",
    competencyIds: ["ela-lv3"],
    stem: "Read the sentence: 'The hikers were famished after their long trip and quickly ate their lunch.' What does famished most likely mean?",
    choices: [
      { id: "A", text: "Very hungry" },
      { id: "B", text: "Very sleepy" },
      { id: "C", text: "Very nervous" },
      { id: "D", text: "Very noisy" }
    ],
    correctChoiceId: "A",
    explanation:
      "The clue that the hikers quickly ate their lunch shows that famished means very hungry.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-6",
    subjectSlug: "ela",
    competencyIds: ["ela-lv3"],
    stem: "In the sentence 'The glass vase was fragile, so Maya carried it with both hands,' what does fragile mean?",
    choices: [
      { id: "A", text: "Easy to break" },
      { id: "B", text: "Easy to clean" },
      { id: "C", text: "Hard to see" },
      { id: "D", text: "Made of metal" }
    ],
    correctChoiceId: "A",
    explanation:
      "Carrying the vase carefully with both hands is a clue that it could break easily.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-7",
    subjectSlug: "ela",
    competencyIds: ["ela-tt3"],
    stem: "Which sentence would best support the opinion that students should have more time for reading each day?",
    choices: [
      { id: "A", text: "Reading time usually happens in the classroom." },
      { id: "B", text: "More reading time helps students build stamina and learn new vocabulary." },
      { id: "C", text: "Books come in many sizes." },
      { id: "D", text: "Some students read after school." }
    ],
    correctChoiceId: "B",
    explanation:
      "An opinion needs a clear supporting reason. Building stamina and learning vocabulary directly support the claim.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "ela-q-8",
    subjectSlug: "ela",
    competencyIds: ["ela-tt3"],
    stem: "Which opening sentence states a clear opinion for a school essay?",
    choices: [
      { id: "A", text: "Many schools have art programs." },
      { id: "B", text: "Art class should stay in every elementary school because it builds creativity and confidence." },
      { id: "C", text: "Students paint and draw in art class." },
      { id: "D", text: "Some art projects use clay." }
    ],
    correctChoiceId: "B",
    explanation:
      "A strong opinion statement clearly states a position and hints at reasons that will support it.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE K-12 ELA standards launch materials and implementation guidance",
      note: placeholderNote
    }
  },
  {
    id: "science-q-5",
    subjectSlug: "science",
    competencyIds: ["science-s5p2"],
    stem: "How is static electricity different from current electricity?",
    choices: [
      { id: "A", text: "Static electricity moves through a wire, but current electricity stays in one place." },
      { id: "B", text: "Static electricity builds up in one place, but current electricity travels along a path." },
      { id: "C", text: "Static electricity only happens in storms, but current electricity only happens in batteries." },
      { id: "D", text: "Static electricity is safe, but current electricity is never safe." }
    ],
    correctChoiceId: "B",
    explanation:
      "Static electricity is a buildup of charge in one place, while current electricity flows along a circuit or path.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5P2",
      note: placeholderNote
    }
  },
  {
    id: "science-q-6",
    subjectSlug: "science",
    competencyIds: ["science-s5p2"],
    stem: "Which set of materials could form a simple closed circuit to light a bulb?",
    choices: [
      { id: "A", text: "A battery, wires, and a bulb connected in a complete loop" },
      { id: "B", text: "A battery and a bulb with no wires" },
      { id: "C", text: "A plastic spoon and a bulb" },
      { id: "D", text: "A bulb, paper, and string" }
    ],
    correctChoiceId: "A",
    explanation:
      "A closed circuit needs a power source, conductors, and a complete loop so electricity can flow.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5P2",
      note: placeholderNote
    }
  },
  {
    id: "science-q-7",
    subjectSlug: "science",
    competencyIds: ["science-s5l1"],
    stem: "Which characteristic would best help a scientist classify an organism?",
    choices: [
      { id: "A", text: "Its favorite season" },
      { id: "B", text: "Its body structures and how it gets food" },
      { id: "C", text: "Its owner's opinion" },
      { id: "D", text: "Its name in a storybook" }
    ],
    correctChoiceId: "B",
    explanation:
      "Scientists classify organisms by observable characteristics such as body structures, behaviors, and how they obtain food.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5L1",
      note: placeholderNote
    }
  },
  {
    id: "science-q-8",
    subjectSlug: "science",
    competencyIds: ["science-s5l1"],
    stem: "Why is a whale classified as a mammal instead of a fish?",
    choices: [
      { id: "A", text: "It lives in the ocean." },
      { id: "B", text: "It has fins." },
      { id: "C", text: "It breathes air and nurses its young." },
      { id: "D", text: "It can swim long distances." }
    ],
    correctChoiceId: "C",
    explanation:
      "Mammals breathe air and feed milk to their young, so those characteristics help place whales in the mammal group.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE Grade 5 Science guidance for S5L1",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-5",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h3"],
    stem: "What was one goal of Franklin D. Roosevelt's New Deal?",
    choices: [
      { id: "A", text: "To reduce immigration by closing all ports" },
      { id: "B", text: "To provide relief, recovery, and reform during the Great Depression" },
      { id: "C", text: "To end all use of electricity" },
      { id: "D", text: "To move the capital city to the West Coast" }
    ],
    correctChoiceId: "B",
    explanation:
      "The New Deal created programs meant to help people immediately, rebuild the economy, and prevent future financial crises.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-6",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5h3"],
    stem: "Why is Pearl Harbor important in U.S. history?",
    choices: [
      { id: "A", text: "It was where the Erie Canal was completed." },
      { id: "B", text: "It was the site of the Wright brothers' first flight." },
      { id: "C", text: "It was attacked in 1941, leading the United States to enter World War II." },
      { id: "D", text: "It was the first national park in the United States." }
    ],
    correctChoiceId: "C",
    explanation:
      "The attack on Pearl Harbor in 1941 led the United States to enter World War II.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-7",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5cg1"],
    stem: "Which is a responsibility of a United States citizen?",
    choices: [
      { id: "A", text: "Ignoring laws the citizen does not like" },
      { id: "B", text: "Serving on a jury when called" },
      { id: "C", text: "Changing the Constitution alone" },
      { id: "D", text: "Refusing to pay any taxes" }
    ],
    correctChoiceId: "B",
    explanation:
      "Serving on a jury is one civic responsibility that citizens may be required to carry out.",
    difficulty: "foundation",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  },
  {
    id: "ss-q-8",
    subjectSlug: "social-studies",
    competencyIds: ["ss-ss5cg1"],
    stem: "What does due process of law help protect?",
    choices: [
      { id: "A", text: "A person's right to a fair legal process" },
      { id: "B", text: "A person's right to skip school" },
      { id: "C", text: "A person's right to avoid all taxes" },
      { id: "D", text: "A person's right to vote at any age" }
    ],
    correctChoiceId: "A",
    explanation:
      "Due process means the government must follow fair legal steps when dealing with citizens and their rights.",
    difficulty: "on-track",
    sourceMetadata: {
      source: "GaDOE 5th Grade Social Studies teacher notes",
      note: placeholderNote
    }
  }
];

export const questions: Question[] = [
  ...mathQuestions,
  ...legacyQuestions.map(enrichLegacyQuestion)
];

export function getSubjectBySlug(slug: SubjectSlug) {
  return subjects.find((subject) => subject.slug === slug);
}

export function getCompetenciesBySubject(subjectSlug: SubjectSlug) {
  return competencies.filter((competency) => competency.subjectSlug === subjectSlug);
}

export function getCompetencyById(competencyId: string) {
  return competencies.find((competency) => competency.id === competencyId);
}

export function getQuestionsBySubject(subjectSlug: SubjectSlug) {
  return questions.filter((question) => question.subjectSlug === subjectSlug);
}

export function getQuestionsByCompetency(competencyId: string) {
  return questions.filter((question) => question.competencyIds.includes(competencyId));
}
