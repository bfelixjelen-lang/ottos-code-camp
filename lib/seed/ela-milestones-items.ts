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
  },
  {
    id: "G5-ELA-P003",
    genre: "literary",
    title: "The Lost Kitten",
    text: "Maya heard a faint meow coming from behind the bushes. She carefully pushed aside the branches and found a small, trembling kitten. At first, Maya hesitated. She knew her family had never owned a pet before. Still, she gently picked up the kitten and carried it home. Over the next few days, Maya fed and cared for the kitten. Eventually, her parents agreed she could keep it. Maya smiled, knowing she had made the right choice."
  },
  {
    id: "G5-ELA-P004",
    genre: "informational",
    title: "City Life vs. Country Life",
    text: "Living in a city and living in the country offer different experiences. In cities, people often live close together and have access to many stores, schools, and transportation options. In contrast, people in the country usually have more space and quieter surroundings. However, they may need to travel farther to reach stores or services. Both lifestyles have advantages depending on what a person values most."
  },
  {
    id: "G5-ELA-P005",
    genre: "poetry",
    title: "Morning Light",
    text: "The sun stretches golden fingers across the sky,\nWaking the world with a gentle sigh.\nBirds sing softly as day begins,\nA quiet promise carried on the wind."
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
  },
  {
    id: "G5-ELA-011",
    passage_id: "G5-ELA-P003",
    standard_code: "5.T.T.2",
    skill: "theme",
    stem: "What is the theme of the story?",
    choices: [
      { key: "A", text: "Pets are expensive to care for." },
      { key: "B", text: "Helping others can lead to positive outcomes." },
      { key: "C", text: "Children should always obey rules." },
      { key: "D", text: "Animals belong in the wild." }
    ],
    answer_key: "B",
    explanation: "Maya helps the kitten and that caring choice leads to a positive outcome."
  },
  {
    id: "G5-ELA-012",
    passage_id: "G5-ELA-P003",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "Why did Maya hesitate at first?",
    choices: [
      { key: "A", text: "She was afraid of animals." },
      { key: "B", text: "She was unsure how her family would react." },
      { key: "C", text: "She did not like kittens." },
      { key: "D", text: "She was in a hurry." }
    ],
    answer_key: "B",
    explanation: "The passage says Maya knew her family had never owned a pet before, so she was unsure how they would react."
  },
  {
    id: "G5-ELA-013",
    passage_id: "G5-ELA-P003",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"hesitated\" most nearly mean?",
    choices: [
      { key: "A", text: "Rushed" },
      { key: "B", text: "Paused or unsure" },
      { key: "C", text: "Celebrated" },
      { key: "D", text: "Ignored" }
    ],
    answer_key: "B",
    explanation: "Hesitated means Maya paused because she was unsure what to do next."
  },
  {
    id: "G5-ELA-014",
    passage_id: "G5-ELA-P003",
    standard_code: "5.T.C.2",
    skill: "character",
    stem: "Which word best describes Maya?",
    choices: [
      { key: "A", text: "Careless" },
      { key: "B", text: "Kind" },
      { key: "C", text: "Angry" },
      { key: "D", text: "Lazy" }
    ],
    answer_key: "B",
    explanation: "She gently helps the kitten and cares for it, which shows kindness."
  },
  {
    id: "G5-ELA-015",
    passage_id: "G5-ELA-P003",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which detail best supports that Maya is responsible?",
    choices: [
      { key: "A", text: "She heard a sound." },
      { key: "B", text: "She fed and cared for the kitten." },
      { key: "C", text: "She smiled." },
      { key: "D", text: "She went outside." }
    ],
    answer_key: "B",
    explanation: "Feeding and caring for the kitten shows that Maya acts responsibly."
  },
  {
    id: "G5-ELA-016",
    passage_id: "G5-ELA-P004",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "What text structure is used?",
    choices: [
      { key: "A", text: "Sequence" },
      { key: "B", text: "Compare and contrast" },
      { key: "C", text: "Cause and effect" },
      { key: "D", text: "Problem and solution" }
    ],
    answer_key: "B",
    explanation: "The passage compares city life and country life by showing how they are alike and different."
  },
  {
    id: "G5-ELA-017",
    passage_id: "G5-ELA-P004",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea?",
    choices: [
      { key: "A", text: "Cities are better than the country." },
      { key: "B", text: "Country life is quieter." },
      { key: "C", text: "City and country life have different advantages." },
      { key: "D", text: "People should move often." }
    ],
    answer_key: "C",
    explanation: "The passage explains both lifestyles and shows that each has its own advantages."
  },
  {
    id: "G5-ELA-018",
    passage_id: "G5-ELA-P004",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"contrast\" most nearly mean?",
    choices: [
      { key: "A", text: "To compare similarities" },
      { key: "B", text: "To show differences" },
      { key: "C", text: "To explain clearly" },
      { key: "D", text: "To summarize" }
    ],
    answer_key: "B",
    explanation: "Contrast means to point out differences between two things."
  },
  {
    id: "G5-ELA-019",
    passage_id: "G5-ELA-P004",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "Which person would most likely prefer country life?",
    choices: [
      { key: "A", text: "Someone who enjoys quiet space" },
      { key: "B", text: "Someone who likes crowded places" },
      { key: "C", text: "Someone who uses public transportation daily" },
      { key: "D", text: "Someone who works in a large office" }
    ],
    answer_key: "A",
    explanation: "The passage says country life offers more space and quieter surroundings."
  },
  {
    id: "G5-ELA-020",
    passage_id: "G5-ELA-P004",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which detail supports country living?",
    choices: [
      { key: "A", text: "Access to transportation" },
      { key: "B", text: "Many stores nearby" },
      { key: "C", text: "More space and quiet surroundings" },
      { key: "D", text: "Close living conditions" }
    ],
    answer_key: "C",
    explanation: "That detail directly names the benefits of living in the country."
  },
  {
    id: "G5-ELA-021",
    passage_id: "G5-ELA-P005",
    standard_code: "5.T.T.4",
    skill: "figurative_language",
    stem: "What does \"golden fingers\" describe?",
    choices: [
      { key: "A", text: "Sunlight spreading across the sky" },
      { key: "B", text: "Hands reaching upward" },
      { key: "C", text: "Bird wings" },
      { key: "D", text: "Cloud shapes" }
    ],
    answer_key: "A",
    explanation: "The phrase is a metaphor for sunlight stretching across the sky."
  },
  {
    id: "G5-ELA-022",
    passage_id: "G5-ELA-P005",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What time of day is described?",
    choices: [
      { key: "A", text: "Morning" },
      { key: "B", text: "Afternoon" },
      { key: "C", text: "Evening" },
      { key: "D", text: "Midnight" }
    ],
    answer_key: "A",
    explanation: "The poem describes sunrise and the beginning of the day."
  },
  {
    id: "G5-ELA-023",
    passage_id: "G5-ELA-P005",
    standard_code: "5.T.T.2",
    skill: "theme",
    stem: "What is the theme?",
    choices: [
      { key: "A", text: "Nature brings calm and new beginnings" },
      { key: "B", text: "Birds are noisy" },
      { key: "C", text: "The sun is too bright" },
      { key: "D", text: "Night is better than day" }
    ],
    answer_key: "A",
    explanation: "The poem reflects the peaceful feeling of morning and the idea of a fresh start."
  },
  {
    id: "G5-ELA-024",
    passage_id: "G5-ELA-P005",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"gentle\" most nearly mean?",
    choices: [
      { key: "A", text: "Soft" },
      { key: "B", text: "Loud" },
      { key: "C", text: "Fast" },
      { key: "D", text: "Sharp" }
    ],
    answer_key: "A",
    explanation: "Gentle means soft or calm."
  },
  {
    id: "G5-ELA-025",
    passage_id: "G5-ELA-P005",
    standard_code: "5.T.T.3",
    skill: "tone",
    stem: "What is the tone of the poem?",
    choices: [
      { key: "A", text: "Excited" },
      { key: "B", text: "Calm" },
      { key: "C", text: "Angry" },
      { key: "D", text: "Confused" }
    ],
    answer_key: "B",
    explanation: "The soft imagery and quiet details create a calm tone."
  }
];
