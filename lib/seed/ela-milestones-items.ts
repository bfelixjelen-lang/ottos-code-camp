import type { ChoiceId, ReadingPassage } from "@/types/domain";

export interface RawElaMilestonesItem {
  id: string;
  passage_id: string;
  standard_code: string;
  skill: string;
  stem: string;
  choices: Array<{
    key: ChoiceId;
    text: string;
  }>;
  answer_key: ChoiceId;
  explanation: string;
}

export const elaMilestonesPassages: ReadingPassage[] = [
  {
    id: "G5-ELA-P001",
    genre: "informational",
    title: "How Bees Help Plants",
    text: "Bees play an important role in helping plants grow. As bees move from flower to flower collecting nectar, they carry pollen on their bodies. This pollen is transferred between plants, allowing them to produce fruits and seeds. Without bees, many plants would not be able to reproduce. Farmers depend on bees to pollinate crops like apples, almonds, and blueberries. Because of this, bees are essential to both nature and agriculture."
  },
  {
    id: "G5-ELA-P002",
    genre: "informational",
    title: "Why Earthworms Matter",
    text: "Earthworms are small animals that play a big role in keeping soil healthy. As they move through the ground, they create tunnels that allow air and water to reach plant roots. Earthworms also break down dead plants into nutrients that help new plants grow. Farmers often rely on earthworms to improve the quality of their soil. Without earthworms, soil would be less fertile and plants would struggle to grow."
  }
];

export const elaMilestonesItems: RawElaMilestonesItem[] = [
  {
    id: "G5-ELA-001",
    passage_id: "G5-ELA-P001",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea of the passage?",
    choices: [
      { key: "A", text: "Bees make honey from nectar." },
      { key: "B", text: "Bees help plants reproduce by carrying pollen." },
      { key: "C", text: "Farmers grow many types of crops." },
      { key: "D", text: "Flowers need sunlight to grow." }
    ],
    answer_key: "B",
    explanation: "The passage focuses on how bees help plants reproduce through pollination."
  },
  {
    id: "G5-ELA-002",
    passage_id: "G5-ELA-P001",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "What text structure is used in this passage?",
    choices: [
      { key: "A", text: "Sequence" },
      { key: "B", text: "Cause and effect" },
      { key: "C", text: "Compare and contrast" },
      { key: "D", text: "Problem and solution" }
    ],
    answer_key: "B",
    explanation: "The passage explains how bees cause pollination, leading to plant reproduction."
  },
  {
    id: "G5-ELA-003",
    passage_id: "G5-ELA-P001",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does the word \"essential\" most nearly mean in the passage?",
    choices: [
      { key: "A", text: "Helpful" },
      { key: "B", text: "Necessary" },
      { key: "C", text: "Interesting" },
      { key: "D", text: "Colorful" }
    ],
    answer_key: "B",
    explanation: "Essential means something that is necessary or very important."
  },
  {
    id: "G5-ELA-004",
    passage_id: "G5-ELA-P001",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What can the reader infer about what would happen if bees disappeared?",
    choices: [
      { key: "A", text: "Plants would grow faster." },
      { key: "B", text: "Many crops would decrease." },
      { key: "C", text: "Flowers would become larger." },
      { key: "D", text: "Farmers would stop working." }
    ],
    answer_key: "B",
    explanation: "Since bees help pollinate crops, fewer bees would lead to fewer crops."
  },
  {
    id: "G5-ELA-005",
    passage_id: "G5-ELA-P001",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which sentence from the passage best supports the idea that bees are important to farming?",
    choices: [
      { key: "A", text: "Bees play an important role in helping plants grow." },
      { key: "B", text: "Farmers depend on bees to pollinate crops like apples, almonds, and blueberries." },
      { key: "C", text: "Bees collect nectar from flowers." },
      { key: "D", text: "Pollen sticks to bees' bodies." }
    ],
    answer_key: "B",
    explanation: "This directly connects bees to farming success."
  },
  {
    id: "G5-ELA-006",
    passage_id: "G5-ELA-P002",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea?",
    choices: [
      { key: "A", text: "Earthworms are small animals." },
      { key: "B", text: "Earthworms help improve soil and plant growth." },
      { key: "C", text: "Plants grow in soil." },
      { key: "D", text: "Farmers plant crops." }
    ],
    answer_key: "B",
    explanation: "The passage explains how earthworms help soil and plants."
  },
  {
    id: "G5-ELA-007",
    passage_id: "G5-ELA-P002",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "What structure is used?",
    choices: [
      { key: "A", text: "Cause and effect" },
      { key: "B", text: "Sequence" },
      { key: "C", text: "Compare" },
      { key: "D", text: "Problem/solution" }
    ],
    answer_key: "A",
    explanation: "The passage explains that earthworms cause several improvements in the soil."
  },
  {
    id: "G5-ELA-008",
    passage_id: "G5-ELA-P002",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"fertile\" mean?",
    choices: [
      { key: "A", text: "Dry" },
      { key: "B", text: "Rich for growing" },
      { key: "C", text: "Hard" },
      { key: "D", text: "Cold" }
    ],
    answer_key: "B",
    explanation: "Fertile means good for growing plants."
  },
  {
    id: "G5-ELA-009",
    passage_id: "G5-ELA-P002",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What can be inferred?",
    choices: [
      { key: "A", text: "Plants grow without soil." },
      { key: "B", text: "Earthworms improve farming conditions." },
      { key: "C", text: "Soil is not important." },
      { key: "D", text: "Farmers dislike worms." }
    ],
    answer_key: "B",
    explanation: "If farmers rely on earthworms to improve soil, readers can infer that earthworms improve farming conditions."
  },
  {
    id: "G5-ELA-010",
    passage_id: "G5-ELA-P002",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which sentence supports the main idea?",
    choices: [
      { key: "A", text: "Earthworms are small." },
      { key: "B", text: "They create tunnels for air and water." },
      { key: "C", text: "They live underground." },
      { key: "D", text: "They are animals." }
    ],
    answer_key: "B",
    explanation: "This detail explains one specific way earthworms help the soil."
  }
];
