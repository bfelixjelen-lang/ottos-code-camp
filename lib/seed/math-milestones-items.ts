import type { ChoiceId } from "@/types/domain";

export interface RawMilestonesItem {
  id: string;
  subject: "Mathematics";
  grade: 5;
  assessment: "Georgia Milestones";
  item_type: "multiple_choice";
  standard_code: string;
  reporting_category: string;
  learning_target: string;
  dok: 1 | 2 | 3 | 4;
  stem: string;
  choices: Array<{
    key: ChoiceId;
    text: string;
  }>;
  answer_key: ChoiceId;
  explanation: string;
  tags: string[];
  alignment_note: string;
}

export const mathMilestonesItems: RawMilestonesItem[] = [
  {
    id: "G5-MATH-001",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.1",
    reporting_category: "Numerical Reasoning",
    learning_target: "Use place value understanding to solve real-life or mathematical problems.",
    dok: 1,
    stem: "In the number 62,478, what is the value of the digit 4?",
    choices: [
      { key: "A", text: "4" },
      { key: "B", text: "40" },
      { key: "C", text: "400" },
      { key: "D", text: "4,000" }
    ],
    answer_key: "C",
    explanation: "The 4 is in the hundreds place, so its value is 400.",
    tags: ["grade5", "georgia-milestones", "math", "place-value", "5.NR.1"],
    alignment_note: "Aligned to 5.NR.1: use place value understanding to identify digit value and solve mathematical problems."
  },
  {
    id: "G5-MATH-002",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Multiply multi-digit whole numbers to solve relevant mathematical problems.",
    dok: 2,
    stem: "A school buys 14 boxes of pencils. Each box has 326 pencils. How many pencils does the school buy in all?",
    choices: [
      { key: "A", text: "4,254" },
      { key: "B", text: "4,564" },
      { key: "C", text: "5,460" },
      { key: "D", text: "45,640" }
    ],
    answer_key: "B",
    explanation: "Multiply 326 × 14 = 326 × 10 + 326 × 4 = 3,260 + 1,304 = 4,564.",
    tags: ["grade5", "georgia-milestones", "math", "multiplication", "multi-digit", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2: multiply multi-digit whole numbers to solve relevant mathematical problems."
  },
  {
    id: "G5-MATH-003",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Divide multi-digit whole numbers to solve relevant mathematical problems.",
    dok: 2,
    stem: "A warehouse has 1,932 markers packed equally into 21 cartons. How many markers are in each carton?",
    choices: [
      { key: "A", text: "82" },
      { key: "B", text: "89" },
      { key: "C", text: "92" },
      { key: "D", text: "102" }
    ],
    answer_key: "C",
    explanation: "1,932 ÷ 21 = 92 because 21 × 92 = 1,932.",
    tags: ["grade5", "georgia-milestones", "math", "division", "multi-digit", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2: divide multi-digit whole numbers to solve relevant mathematical problems."
  },
  {
    id: "G5-MATH-004",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Compare and reason about fractions using visual or part-whole strategies.",
    dok: 2,
    stem: "Which fraction is greatest?",
    choices: [
      { key: "A", text: "3/4" },
      { key: "B", text: "5/8" },
      { key: "C", text: "7/10" },
      { key: "D", text: "2/3" }
    ],
    answer_key: "A",
    explanation: "3/4 = 0.75, 5/8 = 0.625, 7/10 = 0.70, and 2/3 is about 0.67. So 3/4 is the greatest.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "compare-fractions", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: compare and order fractions using part-whole strategies and reasoning."
  },
  {
    id: "G5-MATH-005",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add fractions and mixed numbers with unlike denominators.",
    dok: 2,
    stem: "What is 2 1/3 + 1 3/4?",
    choices: [
      { key: "A", text: "3 4/7" },
      { key: "B", text: "3 7/12" },
      { key: "C", text: "4 1/12" },
      { key: "D", text: "4 7/12" }
    ],
    answer_key: "C",
    explanation: "Convert to twelfths: 1/3 = 4/12 and 3/4 = 9/12. Then 4/12 + 9/12 = 13/12 = 1 1/12. Add the whole numbers: 2 + 1 + 1 1/12 = 4 1/12.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "mixed-numbers", "addition", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: solve problems involving addition of fractions and mixed numbers with unlike denominators."
  },
  {
    id: "G5-MATH-006",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Solve problems involving multiplication of a fraction and a whole number.",
    dok: 2,
    stem: "A class finished 3/5 of a 20-page booklet. How many pages did the class finish?",
    choices: [
      { key: "A", text: "8" },
      { key: "B", text: "10" },
      { key: "C", text: "12" },
      { key: "D", text: "15" }
    ],
    answer_key: "C",
    explanation: "Find 3/5 of 20: 20 ÷ 5 = 4, and 4 × 3 = 12.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "fraction-times-whole-number", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: solve problems involving multiplication of a fraction and a whole number."
  },
  {
    id: "G5-MATH-007",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Round decimal numbers to the hundredths place.",
    dok: 1,
    stem: "Round 18.376 to the nearest hundredth.",
    choices: [
      { key: "A", text: "18.37" },
      { key: "B", text: "18.38" },
      { key: "C", text: "18.40" },
      { key: "D", text: "18.30" }
    ],
    answer_key: "B",
    explanation: "The hundredths digit is 7. The thousandths digit is 6, so round the hundredths digit up to 8. The rounded number is 18.38.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "rounding", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: round decimal numbers to the hundredths place."
  },
  {
    id: "G5-MATH-008",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add and subtract decimal numbers to the hundredths place to solve problems.",
    dok: 2,
    stem: "Maya ran 12.45 miles in one week and 3.78 miles the next week. How many miles did she run in all?",
    choices: [
      { key: "A", text: "15.13" },
      { key: "B", text: "16.13" },
      { key: "C", text: "16.23" },
      { key: "D", text: "17.23" }
    ],
    answer_key: "C",
    explanation: "12.45 + 3.78 = 16.23.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "addition", "word-problem", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: add decimal numbers to the hundredths place to solve relevant mathematical problems."
  },
  {
    id: "G5-MATH-009",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.5",
    reporting_category: "Numerical Reasoning",
    learning_target: "Write, interpret, and evaluate numerical expressions within authentic problems.",
    dok: 2,
    stem: "Which expression matches the phrase '3 more than the product of 6 and 4'?",
    choices: [
      { key: "A", text: "3 × 6 × 4" },
      { key: "B", text: "(6 × 4) + 3" },
      { key: "C", text: "6 × (4 + 3)" },
      { key: "D", text: "(6 + 4) × 3" }
    ],
    answer_key: "B",
    explanation: "The product of 6 and 4 is 6 × 4. '3 more than' means add 3, so the expression is (6 × 4) + 3.",
    tags: ["grade5", "georgia-milestones", "math", "expressions", "order-of-operations", "5.NR.5"],
    alignment_note: "Aligned to 5.NR.5: write and interpret numerical expressions representing real situations."
  },
  {
    id: "G5-MATH-010",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.PAR.6",
    reporting_category: "Patterning & Algebraic Reasoning",
    learning_target: "Create and analyze numerical patterns using given rules and relate corresponding terms.",
    dok: 2,
    stem: "Pattern A is 3, 6, 9, 12, ... Pattern B is 5, 8, 11, 14, ... Which ordered pair shows the third term in Pattern A and the third term in Pattern B?",
    choices: [
      { key: "A", text: "(6, 8)" },
      { key: "B", text: "(9, 11)" },
      { key: "C", text: "(12, 14)" },
      { key: "D", text: "(3, 5)" }
    ],
    answer_key: "B",
    explanation: "The third term of Pattern A is 9. The third term of Pattern B is 11. So the ordered pair is (9, 11).",
    tags: ["grade5", "georgia-milestones", "math", "patterns", "ordered-pairs", "coordinate-thinking", "5.PAR.6"],
    alignment_note: "Aligned to 5.PAR.6: analyze numerical patterns and represent related terms as ordered pairs."
  },
  {
    id: "G5-MATH-011",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Convert customary measurements to solve relevant problems.",
    dok: 2,
    stem: "A ribbon is 6 feet long. How many inches long is the ribbon?",
    choices: [
      { key: "A", text: "24 inches" },
      { key: "B", text: "36 inches" },
      { key: "C", text: "48 inches" },
      { key: "D", text: "72 inches" }
    ],
    answer_key: "D",
    explanation: "There are 12 inches in 1 foot. So 6 × 12 = 72 inches.",
    tags: ["grade5", "georgia-milestones", "math", "measurement", "customary-units", "conversion", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7: solve problems involving customary measurement conversions."
  },
  {
    id: "G5-MATH-012",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Determine the volume of a right rectangular prism.",
    dok: 2,
    stem: "A right rectangular prism has a length of 6 units, a width of 3 units, and a height of 4 units. What is its volume?",
    choices: [
      { key: "A", text: "13 cubic units" },
      { key: "B", text: "18 cubic units" },
      { key: "C", text: "24 cubic units" },
      { key: "D", text: "72 cubic units" }
    ],
    answer_key: "D",
    explanation: "Volume of a right rectangular prism = length × width × height = 6 × 3 × 4 = 72 cubic units.",
    tags: ["grade5", "georgia-milestones", "math", "geometry", "volume", "rectangular-prism", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8: determine volume of right rectangular prisms using the area of the base and height or unit-cube reasoning."
  },
  {
    id: "G5-MATH-013A",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.1",
    reporting_category: "Numerical Reasoning",
    learning_target: "Use place value understanding to solve real-life or mathematical problems.",
    dok: 1,
    stem: "Which number has a 7 in the thousandths place?",
    choices: [
      { key: "A", text: "3.407" },
      { key: "B", text: "3.470" },
      { key: "C", text: "3.074" },
      { key: "D", text: "3.740" }
    ],
    answer_key: "A",
    explanation: "The thousandths place is the third digit to the right of the decimal. In 3.407, the 7 is in the thousandths place.",
    tags: ["grade5", "georgia-milestones", "math", "place-value", "decimals", "5.NR.1"],
    alignment_note: "Aligned to 5.NR.1: use place value understanding with whole numbers and decimals."
  },
  {
    id: "G5-MATH-014",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.1",
    reporting_category: "Numerical Reasoning",
    learning_target: "Compare numbers using place value understanding.",
    dok: 1,
    stem: "Which comparison is true?",
    choices: [
      { key: "A", text: "45.208 > 45.28" },
      { key: "B", text: "45.208 < 45.280" },
      { key: "C", text: "45.208 = 45.28" },
      { key: "D", text: "45.208 > 45.218" }
    ],
    answer_key: "B",
    explanation: "45.280 is the same as 45.28. Since 0.208 is less than 0.280, 45.208 < 45.280.",
    tags: ["grade5", "georgia-milestones", "math", "compare-decimals", "place-value", "5.NR.1"],
    alignment_note: "Aligned to 5.NR.1: compare decimal numbers using place value."
  },
  {
    id: "G5-MATH-015",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Multiply multi-digit whole numbers to solve problems.",
    dok: 2,
    stem: "A theater has 128 seats in each row. There are 24 rows. How many seats are in the theater?",
    choices: [
      { key: "A", text: "2,072" },
      { key: "B", text: "2,872" },
      { key: "C", text: "3,072" },
      { key: "D", text: "30,72" }
    ],
    answer_key: "C",
    explanation: "128 × 24 = (128 × 20) + (128 × 4) = 2,560 + 512 = 3,072.",
    tags: ["grade5", "georgia-milestones", "math", "multiplication", "multi-digit", "word-problem", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2: multiply multi-digit whole numbers to solve relevant problems."
  },
  {
    id: "G5-MATH-016",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Divide multi-digit whole numbers to solve problems.",
    dok: 2,
    stem: "A farmer packs 2,184 apples equally into 28 crates. How many apples go in each crate?",
    choices: [
      { key: "A", text: "68" },
      { key: "B", text: "74" },
      { key: "C", text: "78" },
      { key: "D", text: "88" }
    ],
    answer_key: "C",
    explanation: "2,184 ÷ 28 = 78 because 28 × 78 = 2,184.",
    tags: ["grade5", "georgia-milestones", "math", "division", "multi-digit", "word-problem", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2: divide multi-digit whole numbers to solve relevant problems."
  },
  {
    id: "G5-MATH-017",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Use multiplication strategies with multi-digit factors.",
    dok: 2,
    stem: "What is 307 × 16?",
    choices: [
      { key: "A", text: "4,812" },
      { key: "B", text: "4,912" },
      { key: "C", text: "5,012" },
      { key: "D", text: "5,112" }
    ],
    answer_key: "B",
    explanation: "307 × 16 = (307 × 10) + (307 × 6) = 3,070 + 1,842 = 4,912.",
    tags: ["grade5", "georgia-milestones", "math", "multiplication", "computation", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2: multiply multi-digit whole numbers."
  },
  {
    id: "G5-MATH-018",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Compare and reason about fractions.",
    dok: 2,
    stem: "Which fraction is closest to 1?",
    choices: [
      { key: "A", text: "7/8" },
      { key: "B", text: "5/6" },
      { key: "C", text: "3/4" },
      { key: "D", text: "9/12" }
    ],
    answer_key: "A",
    explanation: "Compare how far each fraction is from 1. 7/8 is 1/8 away, 5/6 is 1/6 away, 3/4 is 1/4 away, and 9/12 = 3/4 is 1/4 away. The smallest gap is 1/8, so 7/8 is closest to 1.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "compare-fractions", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: describe and compare fractions using reasoning."
  },
  {
    id: "G5-MATH-019",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add fractions with unlike denominators.",
    dok: 2,
    stem: "What is 1/2 + 3/10?",
    choices: [
      { key: "A", text: "4/12" },
      { key: "B", text: "4/10" },
      { key: "C", text: "8/10" },
      { key: "D", text: "1" }
    ],
    answer_key: "C",
    explanation: "Convert 1/2 to 5/10. Then 5/10 + 3/10 = 8/10, which is also 4/5.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "addition", "unlike-denominators", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: perform operations with fractions."
  },
  {
    id: "G5-MATH-020",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Subtract fractions and mixed numbers.",
    dok: 2,
    stem: "What is 4 1/5 - 2 3/5?",
    choices: [
      { key: "A", text: "1 2/5" },
      { key: "B", text: "1 3/5" },
      { key: "C", text: "2 2/5" },
      { key: "D", text: "2 4/10" }
    ],
    answer_key: "B",
    explanation: "Subtract whole numbers and fractions: 4 1/5 - 2 3/5 = 3 6/5 - 2 3/5 = 1 3/5.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "mixed-numbers", "subtraction", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: perform fraction and mixed-number operations."
  },
  {
    id: "G5-MATH-021",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Multiply a fraction by a whole number.",
    dok: 2,
    stem: "What is 4 × 2/3?",
    choices: [
      { key: "A", text: "6/3" },
      { key: "B", text: "8/3" },
      { key: "C", text: "8/6" },
      { key: "D", text: "6/12" }
    ],
    answer_key: "B",
    explanation: "Multiply the whole number by the numerator: 4 × 2/3 = 8/3, which is also 2 2/3.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "fraction-times-whole-number", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: solve problems involving multiplication of a fraction and a whole number."
  },
  {
    id: "G5-MATH-022",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Interpret fractions in real-world contexts.",
    dok: 2,
    stem: "A recipe uses 3/4 cup of milk for one batch of muffins. How much milk is needed for 3 batches?",
    choices: [
      { key: "A", text: "1 1/4 cups" },
      { key: "B", text: "2 cups" },
      { key: "C", text: "2 1/4 cups" },
      { key: "D", text: "3 3/4 cups" }
    ],
    answer_key: "C",
    explanation: "Multiply 3 × 3/4 = 9/4 = 2 1/4.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "real-world", "multiplication", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3: perform fraction operations in relevant problems."
  },
  {
    id: "G5-MATH-023",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Round decimal numbers to the hundredths place.",
    dok: 1,
    stem: "Round 9.146 to the nearest hundredth.",
    choices: [
      { key: "A", text: "9.14" },
      { key: "B", text: "9.15" },
      { key: "C", text: "9.20" },
      { key: "D", text: "9.10" }
    ],
    answer_key: "B",
    explanation: "The hundredths digit is 4 and the thousandths digit is 6, so round the 4 up to 5. The answer is 9.15.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "rounding", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: round decimal numbers to the hundredths place."
  },
  {
    id: "G5-MATH-024",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add decimal numbers to the hundredths place.",
    dok: 2,
    stem: "What is 6.75 + 2.8?",
    choices: [
      { key: "A", text: "9.45" },
      { key: "B", text: "9.55" },
      { key: "C", text: "8.155" },
      { key: "D", text: "9.35" }
    ],
    answer_key: "B",
    explanation: "Write 2.8 as 2.80, then add: 6.75 + 2.80 = 9.55.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "addition", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: perform operations with decimal numbers to the hundredths place."
  },
  {
    id: "G5-MATH-025",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Subtract decimal numbers to the hundredths place.",
    dok: 2,
    stem: "A bottle contains 15.6 liters of juice. After a party, 7.85 liters remain. How much juice was used?",
    choices: [
      { key: "A", text: "7.75 liters" },
      { key: "B", text: "7.85 liters" },
      { key: "C", text: "8.25 liters" },
      { key: "D", text: "8.35 liters" }
    ],
    answer_key: "A",
    explanation: "Write 15.6 as 15.60. Then subtract: 15.60 - 7.85 = 7.75.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "subtraction", "word-problem", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: solve problems using decimal subtraction to the hundredths place."
  },
  {
    id: "G5-MATH-026",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Compare decimal numbers to the thousandths place.",
    dok: 2,
    stem: "Which list shows the numbers in order from least to greatest?",
    choices: [
      { key: "A", text: "0.509, 0.590, 0.905" },
      { key: "B", text: "0.590, 0.509, 0.905" },
      { key: "C", text: "0.905, 0.590, 0.509" },
      { key: "D", text: "0.509, 0.905, 0.590" }
    ],
    answer_key: "A",
    explanation: "Compare digits from left to right: 0.509 is smallest, then 0.590, then 0.905.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "ordering", "place-value", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4: read, write, and compare decimal numbers to the thousandths place."
  },
  {
    id: "G5-MATH-027",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.5",
    reporting_category: "Numerical Reasoning",
    learning_target: "Interpret numerical expressions.",
    dok: 2,
    stem: "Which phrase matches the expression 7 + (3 × 9)?",
    choices: [
      { key: "A", text: "7 more than the product of 3 and 9" },
      { key: "B", text: "The product of 7 and 3, then add 9" },
      { key: "C", text: "3 more than the product of 7 and 9" },
      { key: "D", text: "The sum of 7 and 3, multiplied by 9" }
    ],
    answer_key: "A",
    explanation: "3 × 9 is the product of 3 and 9. Adding 7 means 7 more than that product.",
    tags: ["grade5", "georgia-milestones", "math", "expressions", "interpretation", "5.NR.5"],
    alignment_note: "Aligned to 5.NR.5: write and interpret numerical expressions."
  },
  {
    id: "G5-MATH-028",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.5",
    reporting_category: "Numerical Reasoning",
    learning_target: "Evaluate numerical expressions.",
    dok: 2,
    stem: "What is the value of (18 ÷ 3) + 6 × 2?",
    choices: [
      { key: "A", text: "18" },
      { key: "B", text: "24" },
      { key: "C", text: "30" },
      { key: "D", text: "16" }
    ],
    answer_key: "A",
    explanation: "First solve inside parentheses: 18 ÷ 3 = 6. Then multiply: 6 × 2 = 12. Finally add: 6 + 12 = 18.",
    tags: ["grade5", "georgia-milestones", "math", "expressions", "evaluate", "order-of-operations", "5.NR.5"],
    alignment_note: "Aligned to 5.NR.5: evaluate numerical expressions."
  },
  {
    id: "G5-MATH-029",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.PAR.6",
    reporting_category: "Patterning & Algebraic Reasoning",
    learning_target: "Analyze numerical patterns using a rule.",
    dok: 2,
    stem: "A pattern starts at 4 and adds 6 each time. What is the fifth number in the pattern?",
    choices: [
      { key: "A", text: "22" },
      { key: "B", text: "24" },
      { key: "C", text: "28" },
      { key: "D", text: "30" }
    ],
    answer_key: "C",
    explanation: "The pattern is 4, 10, 16, 22, 28. The fifth number is 28.",
    tags: ["grade5", "georgia-milestones", "math", "patterns", "rules", "5.PAR.6"],
    alignment_note: "Aligned to 5.PAR.6: create and analyze numerical patterns using a given rule."
  },
  {
    id: "G5-MATH-030",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.PAR.6",
    reporting_category: "Patterning & Algebraic Reasoning",
    learning_target: "Relate two numerical patterns.",
    dok: 3,
    stem: "Pattern A starts at 2 and adds 4 each time. Pattern B starts at 1 and adds 2 each time. Which statement is true about the matching terms?",
    choices: [
      { key: "A", text: "Each term in Pattern A is 1 more than the matching term in Pattern B." },
      { key: "B", text: "Each term in Pattern A is twice the matching term in Pattern B." },
      { key: "C", text: "Each term in Pattern B is 4 more than the matching term in Pattern A." },
      { key: "D", text: "The two patterns are equal at every term." }
    ],
    answer_key: "B",
    explanation: "Pattern A: 2, 6, 10, 14... Pattern B: 1, 3, 5, 7... Each term in A is twice the matching term in B.",
    tags: ["grade5", "georgia-milestones", "math", "patterns", "reasoning", "ordered-pairs", "5.PAR.6"],
    alignment_note: "Aligned to 5.PAR.6: analyze relationships between corresponding terms in numerical patterns."
  },
  {
    id: "G5-MATH-031",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Convert metric measurements.",
    dok: 2,
    stem: "A rope is 4 meters long. How many centimeters long is it?",
    choices: [
      { key: "A", text: "40 cm" },
      { key: "B", text: "400 cm" },
      { key: "C", text: "4,000 cm" },
      { key: "D", text: "0.4 cm" }
    ],
    answer_key: "B",
    explanation: "1 meter = 100 centimeters. So 4 meters = 4 × 100 = 400 centimeters.",
    tags: ["grade5", "georgia-milestones", "math", "measurement", "metric", "conversion", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7: solve problems involving metric measurements."
  },
  {
    id: "G5-MATH-032",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Solve elapsed time problems.",
    dok: 2,
    stem: "A movie starts at 2:35 p.m. and ends at 4:10 p.m. How long is the movie?",
    choices: [
      { key: "A", text: "1 hour 25 minutes" },
      { key: "B", text: "1 hour 35 minutes" },
      { key: "C", text: "2 hours 25 minutes" },
      { key: "D", text: "2 hours 35 minutes" }
    ],
    answer_key: "B",
    explanation: "From 2:35 to 3:35 is 1 hour. From 3:35 to 4:10 is 35 minutes. Total time is 1 hour 35 minutes.",
    tags: ["grade5", "georgia-milestones", "math", "measurement", "time", "elapsed-time", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7: solve problems involving time."
  },
  {
    id: "G5-MATH-033",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Analyze data displays.",
    dok: 2,
    stem: "A bar graph shows books read by four students: Ava 6, Ben 8, Cara 5, and Diego 9. How many books did the students read altogether?",
    choices: [
      { key: "A", text: "26" },
      { key: "B", text: "27" },
      { key: "C", text: "28" },
      { key: "D", text: "29" }
    ],
    answer_key: "C",
    explanation: "Add the values from the graph: 6 + 8 + 5 + 9 = 28.",
    tags: ["grade5", "georgia-milestones", "math", "data", "bar-graph", "measurement-and-data", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7: analyze graphical displays of data to answer questions."
  },
  {
    id: "G5-MATH-034",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Classify polygons by properties.",
    dok: 2,
    stem: "Which figure always has exactly one pair of parallel sides?",
    choices: [
      { key: "A", text: "Rectangle" },
      { key: "B", text: "Square" },
      { key: "C", text: "Trapezoid" },
      { key: "D", text: "Parallelogram" }
    ],
    answer_key: "C",
    explanation: "A trapezoid has exactly one pair of parallel sides. Rectangles, squares, and parallelograms have two pairs.",
    tags: ["grade5", "georgia-milestones", "math", "geometry", "polygons", "classification", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8: examine and classify polygons by their properties."
  },
  {
    id: "G5-MATH-035",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Determine volume of right rectangular prisms.",
    dok: 2,
    stem: "A rectangular prism has dimensions 5 units by 2 units by 7 units. What is its volume?",
    choices: [
      { key: "A", text: "14 cubic units" },
      { key: "B", text: "35 cubic units" },
      { key: "C", text: "70 cubic units" },
      { key: "D", text: "140 cubic units" }
    ],
    answer_key: "C",
    explanation: "Volume = length × width × height = 5 × 2 × 7 = 70 cubic units.",
    tags: ["grade5", "georgia-milestones", "math", "geometry", "volume", "rectangular-prism", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8: discover and determine the volume of right rectangular prisms."
  },
  {
    id: "G5-MATH-036",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Reason about structure of rectangular prisms.",
    dok: 3,
    stem: "A right rectangular prism has a base area of 12 square units and a height of 4 units. What is its volume?",
    choices: [
      { key: "A", text: "16 cubic units" },
      { key: "B", text: "36 cubic units" },
      { key: "C", text: "48 cubic units" },
      { key: "D", text: "60 cubic units" }
    ],
    answer_key: "C",
    explanation: "Volume = base area × height = 12 × 4 = 48 cubic units.",
    tags: ["grade5", "georgia-milestones", "math", "geometry", "volume", "base-area", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8: determine volume using area of base and height."
  },
  {
    id: "G5-MATH-037",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.1",
    reporting_category: "Numerical Reasoning",
    learning_target: "Identify place value in decimals.",
    dok: 1,
    stem: "In 8.532, what is the value of the digit 3?",
    choices: [
      { key: "A", text: "3" },
      { key: "B", text: "0.3" },
      { key: "C", text: "0.03" },
      { key: "D", text: "0.003" }
    ],
    answer_key: "C",
    explanation: "The 3 is in the hundredths place, so its value is 0.03.",
    tags: ["grade5", "georgia-milestones", "math", "place-value", "decimals", "5.NR.1"],
    alignment_note: "Aligned to 5.NR.1 through place value reasoning with decimals."
  },
  {
    id: "G5-MATH-038",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.1",
    reporting_category: "Numerical Reasoning",
    learning_target: "Compare decimals.",
    dok: 1,
    stem: "Which number is greatest?",
    choices: [
      { key: "A", text: "6.305" },
      { key: "B", text: "6.350" },
      { key: "C", text: "6.035" },
      { key: "D", text: "6.503" }
    ],
    answer_key: "D",
    explanation: "Compare the digits from left to right. All have 6 ones, but 6.503 has the greatest tenths value.",
    tags: ["grade5", "georgia-milestones", "math", "compare-decimals", "5.NR.1"],
    alignment_note: "Aligned to 5.NR.1 through comparing decimal numbers."
  },
  {
    id: "G5-MATH-039",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Multiply multi-digit numbers.",
    dok: 2,
    stem: "What is 214 x 23?",
    choices: [
      { key: "A", text: "4,822" },
      { key: "B", text: "4,922" },
      { key: "C", text: "5,022" },
      { key: "D", text: "4,912" }
    ],
    answer_key: "B",
    explanation: "214 x 23 = 214 x 20 + 214 x 3 = 4,280 + 642 = 4,922.",
    tags: ["grade5", "georgia-milestones", "math", "multiplication", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2 through multi-digit multiplication."
  },
  {
    id: "G5-MATH-040",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.2",
    reporting_category: "Numerical Reasoning",
    learning_target: "Divide multi-digit numbers.",
    dok: 2,
    stem: "1,764 divided by 21 = ?",
    choices: [
      { key: "A", text: "74" },
      { key: "B", text: "82" },
      { key: "C", text: "84" },
      { key: "D", text: "92" }
    ],
    answer_key: "C",
    explanation: "21 x 84 = 1,764.",
    tags: ["grade5", "georgia-milestones", "math", "division", "5.NR.2"],
    alignment_note: "Aligned to 5.NR.2 through multi-digit division."
  },
  {
    id: "G5-MATH-041",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Recognize equivalent fractions.",
    dok: 1,
    stem: "Which fraction is equivalent to 6/8?",
    choices: [
      { key: "A", text: "3/4" },
      { key: "B", text: "2/3" },
      { key: "C", text: "4/5" },
      { key: "D", text: "5/6" }
    ],
    answer_key: "A",
    explanation: "6/8 simplifies to 3/4.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "equivalent", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3 through reasoning about equivalent fractions."
  },
  {
    id: "G5-MATH-042",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add fractions with unlike denominators.",
    dok: 2,
    stem: "What is 3/4 + 2/5?",
    choices: [
      { key: "A", text: "5/9" },
      { key: "B", text: "23/20" },
      { key: "C", text: "1 3/20" },
      { key: "D", text: "1 1/5" }
    ],
    answer_key: "C",
    explanation: "15/20 + 8/20 = 23/20 = 1 3/20.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "addition", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3 through addition of fractions with unlike denominators."
  },
  {
    id: "G5-MATH-043",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.3",
    reporting_category: "Numerical Reasoning",
    learning_target: "Subtract fractions with unlike denominators.",
    dok: 2,
    stem: "What is 5/6 - 1/3?",
    choices: [
      { key: "A", text: "4/6" },
      { key: "B", text: "1/2" },
      { key: "C", text: "2/3" },
      { key: "D", text: "3/6" }
    ],
    answer_key: "B",
    explanation: "1/3 = 2/6, so 5/6 - 2/6 = 3/6 = 1/2.",
    tags: ["grade5", "georgia-milestones", "math", "fractions", "subtraction", "5.NR.3"],
    alignment_note: "Aligned to 5.NR.3 through subtraction of fractions."
  },
  {
    id: "G5-MATH-044",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Round decimals to the nearest hundredth.",
    dok: 1,
    stem: "Round 7.589 to the nearest hundredth.",
    choices: [
      { key: "A", text: "7.58" },
      { key: "B", text: "7.59" },
      { key: "C", text: "7.60" },
      { key: "D", text: "7.50" }
    ],
    answer_key: "B",
    explanation: "The thousandths digit is 9, so the hundredths digit rounds up from 8 to 9.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "rounding", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4 through rounding decimals."
  },
  {
    id: "G5-MATH-045",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Add decimals to the hundredths place.",
    dok: 2,
    stem: "What is 9.2 + 4.37?",
    choices: [
      { key: "A", text: "13.57" },
      { key: "B", text: "13.47" },
      { key: "C", text: "14.57" },
      { key: "D", text: "12.57" }
    ],
    answer_key: "A",
    explanation: "Write 9.2 as 9.20, then add: 9.20 + 4.37 = 13.57.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "addition", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4 through decimal addition."
  },
  {
    id: "G5-MATH-046",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.4",
    reporting_category: "Numerical Reasoning",
    learning_target: "Subtract decimals to the hundredths place.",
    dok: 2,
    stem: "What is 12.00 - 3.85?",
    choices: [
      { key: "A", text: "8.15" },
      { key: "B", text: "8.25" },
      { key: "C", text: "9.15" },
      { key: "D", text: "7.95" }
    ],
    answer_key: "A",
    explanation: "12.00 - 3.85 = 8.15.",
    tags: ["grade5", "georgia-milestones", "math", "decimals", "subtraction", "5.NR.4"],
    alignment_note: "Aligned to 5.NR.4 through decimal subtraction."
  },
  {
    id: "G5-MATH-047",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.5",
    reporting_category: "Numerical Reasoning",
    learning_target: "Evaluate numerical expressions.",
    dok: 2,
    stem: "Evaluate: 5 + 6 x 4",
    choices: [
      { key: "A", text: "44" },
      { key: "B", text: "29" },
      { key: "C", text: "34" },
      { key: "D", text: "24" }
    ],
    answer_key: "B",
    explanation: "Multiply first: 6 x 4 = 24, then add 5 to get 29.",
    tags: ["grade5", "georgia-milestones", "math", "order-of-operations", "5.NR.5"],
    alignment_note: "Aligned to 5.NR.5 through evaluating expressions."
  },
  {
    id: "G5-MATH-048",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.NR.5",
    reporting_category: "Numerical Reasoning",
    learning_target: "Interpret numerical expressions.",
    dok: 1,
    stem: "Which expression equals 24?",
    choices: [
      { key: "A", text: "(4+2) x 3" },
      { key: "B", text: "6 x 4" },
      { key: "C", text: "8 x 2" },
      { key: "D", text: "12+2" }
    ],
    answer_key: "B",
    explanation: "6 x 4 = 24.",
    tags: ["grade5", "georgia-milestones", "math", "expressions", "5.NR.5"],
    alignment_note: "Aligned to 5.NR.5 through interpreting and checking expressions."
  },
  {
    id: "G5-MATH-049",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.PAR.6",
    reporting_category: "Patterning & Algebraic Reasoning",
    learning_target: "Analyze numerical patterns.",
    dok: 1,
    stem: "Pattern: 2, 5, 8, 11... What is the next number?",
    choices: [
      { key: "A", text: "13" },
      { key: "B", text: "14" },
      { key: "C", text: "15" },
      { key: "D", text: "16" }
    ],
    answer_key: "B",
    explanation: "Add 3 each time, so the next number is 14.",
    tags: ["grade5", "georgia-milestones", "math", "patterns", "5.PAR.6"],
    alignment_note: "Aligned to 5.PAR.6 through analyzing patterns."
  },
  {
    id: "G5-MATH-050",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Convert hours to minutes.",
    dok: 1,
    stem: "How many minutes are in 3 hours?",
    choices: [
      { key: "A", text: "120" },
      { key: "B", text: "150" },
      { key: "C", text: "180" },
      { key: "D", text: "210" }
    ],
    answer_key: "C",
    explanation: "3 x 60 = 180 minutes.",
    tags: ["grade5", "georgia-milestones", "math", "measurement", "time", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7 through time conversion."
  },
  {
    id: "G5-MATH-051",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.MDR.7",
    reporting_category: "Measurement & Data Reasoning",
    learning_target: "Convert liters to milliliters.",
    dok: 1,
    stem: "How many milliliters are in 2 liters?",
    choices: [
      { key: "A", text: "200" },
      { key: "B", text: "2,000" },
      { key: "C", text: "20" },
      { key: "D", text: "2000" }
    ],
    answer_key: "B",
    explanation: "1 liter = 1,000 milliliters, so 2 liters = 2,000 milliliters.",
    tags: ["grade5", "georgia-milestones", "math", "measurement", "metric", "5.MDR.7"],
    alignment_note: "Aligned to 5.MDR.7 through metric conversion."
  },
  {
    id: "G5-MATH-052",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Determine volume using side lengths.",
    dok: 1,
    stem: "A box is 3 x 4 x 5 units. What is the volume?",
    choices: [
      { key: "A", text: "60" },
      { key: "B", text: "12" },
      { key: "C", text: "20" },
      { key: "D", text: "120" }
    ],
    answer_key: "A",
    explanation: "3 x 4 x 5 = 60.",
    tags: ["grade5", "georgia-milestones", "math", "volume", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8 through finding volume."
  },
  {
    id: "G5-MATH-053",
    subject: "Mathematics",
    grade: 5,
    assessment: "Georgia Milestones",
    item_type: "multiple_choice",
    standard_code: "5.GSR.8",
    reporting_category: "Geometric & Spatial Reasoning",
    learning_target: "Classify quadrilaterals by properties.",
    dok: 1,
    stem: "Which shape has 4 equal sides and 4 right angles?",
    choices: [
      { key: "A", text: "Rectangle" },
      { key: "B", text: "Square" },
      { key: "C", text: "Rhombus" },
      { key: "D", text: "Trapezoid" }
    ],
    answer_key: "B",
    explanation: "A square has 4 equal sides and 4 right angles.",
    tags: ["grade5", "georgia-milestones", "math", "geometry", "classification", "5.GSR.8"],
    alignment_note: "Aligned to 5.GSR.8 through classifying polygons."
  }
];
