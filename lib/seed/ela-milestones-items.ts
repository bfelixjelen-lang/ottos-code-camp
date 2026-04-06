import type { ChoiceId, ReadingPassage } from "@/types/domain";

export interface RawElaMilestonesItem {
  id: string;
  passage_id: string;
  pair_id?: string;
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

export interface RawElaStandaloneItem {
  id: string;
  standard_code?: string;
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
  },
  {
    id: "G5-ELA-P006A",
    genre: "informational",
    structure: "cause_effect",
    title: "Plastic in the Ocean",
    text: "Plastic waste in the ocean has become a serious problem. When people throw plastic away, it can end up in rivers and eventually reach the ocean. This pollution harms marine animals, which may mistake plastic for food. As a result, many animals become sick or die. Scientists are studying ways to reduce plastic waste and protect ocean life."
  },
  {
    id: "G5-ELA-P006B",
    genre: "informational",
    structure: "problem_solution",
    title: "Cleaning the Ocean",
    text: "Many groups are working to clean plastic from the ocean. Some organizations design machines that collect floating trash. Others focus on reducing plastic use by encouraging recycling and reusable materials. While cleaning the ocean is challenging, these efforts are helping to protect marine life and improve the environment."
  },
  {
    id: "G5-ELA-P007A",
    genre: "informational",
    structure: "sequence",
    title: "How to Start a School Garden",
    text: "Starting a school garden begins with choosing a sunny location. Next, students prepare the soil and plant seeds. After planting, the garden must be watered regularly. Over time, the plants grow and can be harvested. School gardens help students learn about science and responsibility."
  },
  {
    id: "G5-ELA-P007B",
    genre: "literary",
    structure: "narrative",
    title: "Our First Garden",
    text: "When our class planted a garden, we were excited but unsure. At first, we forgot to water the plants, and they began to wilt. Our teacher reminded us to take turns caring for them. Soon, green sprouts appeared. By the end of the season, we proudly harvested vegetables we had grown ourselves."
  },
  {
    id: "G5-ELA-P008",
    genre: "informational",
    structure: "problem_solution",
    title: "Water at School",
    text: "Many schools noticed students were not drinking enough water during the day. As a result, some students felt tired and had trouble concentrating. To solve this problem, schools installed water stations and encouraged students to bring reusable bottles. After these changes, students began drinking more water and reported feeling more focused."
  },
  {
    id: "G5-ELA-P009",
    genre: "literary",
    structure: "sequence",
    title: "Jordan Keeps Practicing",
    text: "Jordan practiced shooting basketballs every afternoon. At first, he missed more shots than he made. Instead of giving up, he kept practicing. Over time, his aim improved, and he became one of the best players on his team."
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
  },
  {
    id: "G5-ELA-026",
    passage_id: "G5-ELA-P006A",
    pair_id: "P006",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea of Passage A?",
    choices: [
      { key: "A", text: "Plastic is colorful" },
      { key: "B", text: "Plastic pollution harms ocean life" },
      { key: "C", text: "Rivers are clean" },
      { key: "D", text: "Scientists study animals" }
    ],
    answer_key: "B",
    explanation: "Passage A focuses on the harm caused by plastic pollution in the ocean."
  },
  {
    id: "G5-ELA-027",
    passage_id: "G5-ELA-P006B",
    pair_id: "P006",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea of Passage B?",
    choices: [
      { key: "A", text: "Plastic cannot be removed" },
      { key: "B", text: "Efforts are being made to clean ocean plastic" },
      { key: "C", text: "Ocean animals are large" },
      { key: "D", text: "Recycling is impossible" }
    ],
    answer_key: "B",
    explanation: "Passage B focuses on efforts and solutions that help clean the ocean."
  },
  {
    id: "G5-ELA-028",
    passage_id: "G5-ELA-P006A",
    pair_id: "P006",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "How are the structures of the two passages different?",
    choices: [
      { key: "A", text: "A shows sequence, B shows compare" },
      { key: "B", text: "A shows cause/effect, B shows problem/solution" },
      { key: "C", text: "Both show sequence" },
      { key: "D", text: "Both show compare/contrast" }
    ],
    answer_key: "B",
    explanation: "Passage A explains effects caused by ocean plastic, while Passage B focuses on solutions to the problem."
  },
  {
    id: "G5-ELA-029",
    passage_id: "G5-ELA-P006B",
    pair_id: "P006",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What can be inferred about ocean cleanup efforts?",
    choices: [
      { key: "A", text: "They are easy to complete" },
      { key: "B", text: "They require time and effort" },
      { key: "C", text: "They are unnecessary" },
      { key: "D", text: "They only involve animals" }
    ],
    answer_key: "B",
    explanation: "Passage B says cleaning the ocean is challenging, so readers can infer that it takes time and effort."
  },
  {
    id: "G5-ELA-030",
    passage_id: "G5-ELA-P006A",
    pair_id: "P006",
    standard_code: "5.T.RA.2",
    skill: "compare_texts",
    stem: "How do both passages relate?",
    choices: [
      { key: "A", text: "Both describe ocean animals" },
      { key: "B", text: "One explains the problem, the other explains solutions" },
      { key: "C", text: "Both explain recycling only" },
      { key: "D", text: "They are unrelated" }
    ],
    answer_key: "B",
    explanation: "Taken together, the passages show a problem in the ocean and the ways people are trying to solve it."
  },
  {
    id: "G5-ELA-031",
    passage_id: "G5-ELA-P006A",
    pair_id: "P006",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"pollution\" most nearly mean?",
    choices: [
      { key: "A", text: "Clean water" },
      { key: "B", text: "Harmful waste" },
      { key: "C", text: "Animal food" },
      { key: "D", text: "Ocean waves" }
    ],
    answer_key: "B",
    explanation: "In the passage, pollution refers to harmful waste that damages the environment."
  },
  {
    id: "G5-ELA-032",
    passage_id: "G5-ELA-P006A",
    pair_id: "P006",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which detail supports the idea that plastic harms animals?",
    choices: [
      { key: "A", text: "Plastic is colorful" },
      { key: "B", text: "Animals mistake plastic for food" },
      { key: "C", text: "Scientists study oceans" },
      { key: "D", text: "Machines collect trash" }
    ],
    answer_key: "B",
    explanation: "This detail from Passage A directly supports the idea that plastic harms marine animals."
  },
  {
    id: "G5-ELA-033",
    passage_id: "G5-ELA-P007A",
    pair_id: "P007",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea of Passage A?",
    choices: [
      { key: "A", text: "Gardens grow quickly" },
      { key: "B", text: "Steps to start and maintain a garden" },
      { key: "C", text: "Students dislike gardening" },
      { key: "D", text: "Plants need sunlight" }
    ],
    answer_key: "B",
    explanation: "The passage explains the steps needed to start and care for a school garden."
  },
  {
    id: "G5-ELA-034",
    passage_id: "G5-ELA-P007B",
    pair_id: "P007",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea of Passage B?",
    choices: [
      { key: "A", text: "Gardening is impossible" },
      { key: "B", text: "Students learn from experience growing a garden" },
      { key: "C", text: "Plants grow instantly" },
      { key: "D", text: "Teachers do all the work" }
    ],
    answer_key: "B",
    explanation: "The story shows that the class learned and grew more responsible through the gardening experience."
  },
  {
    id: "G5-ELA-035",
    passage_id: "G5-ELA-P007A",
    pair_id: "P007",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "How are the passages different in structure?",
    choices: [
      { key: "A", text: "A is sequence, B is narrative" },
      { key: "B", text: "Both are sequence" },
      { key: "C", text: "Both are narrative" },
      { key: "D", text: "A is compare, B is cause" }
    ],
    answer_key: "A",
    explanation: "Passage A gives ordered steps, while Passage B tells a story about what happened."
  },
  {
    id: "G5-ELA-036",
    passage_id: "G5-ELA-P007B",
    pair_id: "P007",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What can be inferred about the students in Passage B?",
    choices: [
      { key: "A", text: "They gave up" },
      { key: "B", text: "They learned responsibility" },
      { key: "C", text: "They disliked plants" },
      { key: "D", text: "They worked alone" }
    ],
    answer_key: "B",
    explanation: "The class improved its care for the garden and followed through until harvest, which shows responsibility."
  },
  {
    id: "G5-ELA-037",
    passage_id: "G5-ELA-P007A",
    pair_id: "P007",
    standard_code: "5.T.RA.2",
    skill: "compare_texts",
    stem: "How do the passages connect?",
    choices: [
      { key: "A", text: "Both describe steps only" },
      { key: "B", text: "One explains how, the other shows an example" },
      { key: "C", text: "They are unrelated" },
      { key: "D", text: "Both are fictional" }
    ],
    answer_key: "B",
    explanation: "Passage A explains the process of starting a garden, and Passage B shows that process through a class experience."
  },
  {
    id: "G5-ELA-038",
    passage_id: "G5-ELA-P007B",
    pair_id: "P007",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which detail shows students improved?",
    choices: [
      { key: "A", text: "They forgot watering" },
      { key: "B", text: "Plants wilted" },
      { key: "C", text: "They harvested vegetables" },
      { key: "D", text: "They were unsure" }
    ],
    answer_key: "C",
    explanation: "Harvesting vegetables shows that the students kept caring for the garden and improved over time."
  },
  {
    id: "G5-ELA-039",
    passage_id: "G5-ELA-P008",
    standard_code: "5.T.C.1",
    skill: "main_idea",
    stem: "What is the main idea?",
    choices: [
      { key: "A", text: "Students like water" },
      { key: "B", text: "Schools improved student focus by solving a hydration problem" },
      { key: "C", text: "Water bottles are expensive" },
      { key: "D", text: "Students dislike school" }
    ],
    answer_key: "B",
    explanation: "The passage focuses on a problem with student hydration and the solution that helped students feel more focused."
  },
  {
    id: "G5-ELA-040",
    passage_id: "G5-ELA-P008",
    standard_code: "5.T.SS.1",
    skill: "text_structure",
    stem: "What structure is used?",
    choices: [
      { key: "A", text: "Sequence" },
      { key: "B", text: "Problem and solution" },
      { key: "C", text: "Compare" },
      { key: "D", text: "Cause only" }
    ],
    answer_key: "B",
    explanation: "The passage presents a problem and then explains the solution schools used."
  },
  {
    id: "G5-ELA-041",
    passage_id: "G5-ELA-P008",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "Why did students struggle before the change?",
    choices: [
      { key: "A", text: "Too much exercise" },
      { key: "B", text: "Not enough water" },
      { key: "C", text: "Too many classes" },
      { key: "D", text: "No teachers" }
    ],
    answer_key: "B",
    explanation: "The text links students feeling tired and having trouble concentrating to not drinking enough water."
  },
  {
    id: "G5-ELA-042",
    passage_id: "G5-ELA-P008",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"concentrating\" mean?",
    choices: [
      { key: "A", text: "Running fast" },
      { key: "B", text: "Focusing attention" },
      { key: "C", text: "Talking loudly" },
      { key: "D", text: "Leaving class" }
    ],
    answer_key: "B",
    explanation: "In the passage, concentrating means focusing attention."
  },
  {
    id: "G5-ELA-043",
    passage_id: "G5-ELA-P008",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which detail supports improvement?",
    choices: [
      { key: "A", text: "Students felt tired" },
      { key: "B", text: "Schools added water stations" },
      { key: "C", text: "Students reported feeling more focused" },
      { key: "D", text: "Students brought bags" }
    ],
    answer_key: "C",
    explanation: "This detail directly shows the positive result after the changes were made."
  },
  {
    id: "G5-ELA-044",
    passage_id: "G5-ELA-P008",
    standard_code: "5.T.SS.1",
    skill: "cause_effect",
    stem: "What caused improved focus?",
    choices: [
      { key: "A", text: "More homework" },
      { key: "B", text: "Better teaching" },
      { key: "C", text: "Increased water intake" },
      { key: "D", text: "Shorter school days" }
    ],
    answer_key: "C",
    explanation: "The passage shows a cause-and-effect relationship: students drank more water and then felt more focused."
  },
  {
    id: "G5-ELA-045",
    passage_id: "G5-ELA-P009",
    standard_code: "5.T.T.2",
    skill: "theme",
    stem: "What is the theme?",
    choices: [
      { key: "A", text: "Practice leads to improvement" },
      { key: "B", text: "Sports are easy" },
      { key: "C", text: "Winning is luck" },
      { key: "D", text: "Teams are unimportant" }
    ],
    answer_key: "A",
    explanation: "Jordan keeps working at basketball, and his repeated effort leads to improvement."
  },
  {
    id: "G5-ELA-046",
    passage_id: "G5-ELA-P009",
    standard_code: "5.T.C.2",
    skill: "character",
    stem: "Which trait describes Jordan?",
    choices: [
      { key: "A", text: "Lazy" },
      { key: "B", text: "Determined" },
      { key: "C", text: "Confused" },
      { key: "D", text: "Careless" }
    ],
    answer_key: "B",
    explanation: "Jordan keeps practicing instead of giving up, which shows determination."
  },
  {
    id: "G5-ELA-047",
    passage_id: "G5-ELA-P009",
    standard_code: "5.T.T.3",
    skill: "inference",
    stem: "What can be inferred?",
    choices: [
      { key: "A", text: "Jordan quit early" },
      { key: "B", text: "Practice helped his skills" },
      { key: "C", text: "He disliked basketball" },
      { key: "D", text: "He never improved" }
    ],
    answer_key: "B",
    explanation: "Readers can infer that Jordan's steady practice is what helped his basketball skills improve."
  },
  {
    id: "G5-ELA-048",
    passage_id: "G5-ELA-P009",
    standard_code: "5.L.V.1",
    skill: "vocabulary",
    stem: "What does \"aim\" mean?",
    choices: [
      { key: "A", text: "Direction of a shot" },
      { key: "B", text: "Running speed" },
      { key: "C", text: "Height" },
      { key: "D", text: "Team score" }
    ],
    answer_key: "A",
    explanation: "In this passage, aim means the direction and accuracy of Jordan's shot."
  },
  {
    id: "G5-ELA-049",
    passage_id: "G5-ELA-P009",
    standard_code: "5.T.RA.1",
    skill: "evidence",
    stem: "Which supports improvement?",
    choices: [
      { key: "A", text: "He practiced daily" },
      { key: "B", text: "He missed shots" },
      { key: "C", text: "He joined a team" },
      { key: "D", text: "He played outside" }
    ],
    answer_key: "A",
    explanation: "Practicing every afternoon is the strongest evidence that Jordan improved through steady effort."
  },
  {
    id: "G5-ELA-050",
    passage_id: "G5-ELA-P009",
    standard_code: "5.T.SS.1",
    skill: "sequence",
    stem: "Which happened first?",
    choices: [
      { key: "A", text: "He became the best" },
      { key: "B", text: "He missed shots" },
      { key: "C", text: "He improved" },
      { key: "D", text: "He practiced daily" }
    ],
    answer_key: "B",
    explanation: "The passage first explains that Jordan missed more shots than he made before his skills improved."
  }
];

export const elaMilestonesStandaloneItems: RawElaStandaloneItem[] = [
  {
    id: "G5-ELA-051",
    skill: "figurative_language",
    standard_code: "5.T.T.4",
    stem: "In poetry, what does a metaphor do?",
    choices: [
      { key: "A", text: "Compares without like or as" },
      { key: "B", text: "Lists events" },
      { key: "C", text: "Defines words" },
      { key: "D", text: "Explains steps" }
    ],
    answer_key: "A",
    explanation: "A metaphor makes a direct comparison without using like or as."
  },
  {
    id: "G5-ELA-052",
    skill: "tone",
    standard_code: "5.T.T.3",
    stem: "Which word describes tone?",
    choices: [
      { key: "A", text: "Feeling" },
      { key: "B", text: "Length" },
      { key: "C", text: "Plot" },
      { key: "D", text: "Character" }
    ],
    answer_key: "A",
    explanation: "Tone is the feeling or attitude created by a text."
  },
  {
    id: "G5-ELA-053",
    skill: "theme",
    standard_code: "5.T.T.2",
    stem: "Theme refers to:",
    choices: [
      { key: "A", text: "Main message" },
      { key: "B", text: "Characters" },
      { key: "C", text: "Setting" },
      { key: "D", text: "Dialogue" }
    ],
    answer_key: "A",
    explanation: "Theme is the central message or lesson in a text."
  },
  {
    id: "G5-ELA-054",
    skill: "vocabulary",
    standard_code: "5.L.V.1",
    stem: "What does \"imagery\" mean?",
    choices: [
      { key: "A", text: "Pictures in the mind" },
      { key: "B", text: "Numbers" },
      { key: "C", text: "Facts" },
      { key: "D", text: "Rules" }
    ],
    answer_key: "A",
    explanation: "Imagery uses words that create pictures in the reader's mind."
  },
  {
    id: "G5-ELA-055",
    skill: "structure",
    standard_code: "5.T.SS.1",
    stem: "Poems are often structured using:",
    choices: [
      { key: "A", text: "Lines and stanzas" },
      { key: "B", text: "Paragraphs" },
      { key: "C", text: "Charts" },
      { key: "D", text: "Tables" }
    ],
    answer_key: "A",
    explanation: "Poems are commonly organized into lines and stanzas."
  },
  {
    id: "G5-ELA-056",
    skill: "inference",
    standard_code: "5.T.T.3",
    stem: "Readers infer by:",
    choices: [
      { key: "A", text: "Guessing randomly" },
      { key: "B", text: "Using clues + thinking" },
      { key: "C", text: "Skipping text" },
      { key: "D", text: "Memorizing words" }
    ],
    answer_key: "B",
    explanation: "Inference means using clues from the text together with your own thinking."
  },
  {
    id: "G5-ELA-057",
    skill: "main_idea",
    stem: "Main idea means:",
    choices: [
      { key: "A", text: "Most important point" },
      { key: "B", text: "Small detail" },
      { key: "C", text: "Opinion" },
      { key: "D", text: "Example" }
    ],
    answer_key: "A",
    explanation: "The main idea is the most important point the text is mostly about."
  },
  {
    id: "G5-ELA-058",
    skill: "context",
    stem: "Context clues help:",
    choices: [
      { key: "A", text: "Write stories" },
      { key: "B", text: "Draw pictures" },
      { key: "C", text: "Understand words" },
      { key: "D", text: "Count numbers" }
    ],
    answer_key: "C",
    explanation: "Context clues help readers understand the meaning of unfamiliar words."
  },
  {
    id: "G5-ELA-059",
    skill: "structure",
    stem: "Sequence shows:",
    choices: [
      { key: "A", text: "Differences" },
      { key: "B", text: "Order of events" },
      { key: "C", text: "Problems" },
      { key: "D", text: "Opinions" }
    ],
    answer_key: "B",
    explanation: "Sequence shows the order in which events or steps happen."
  },
  {
    id: "G5-ELA-060",
    skill: "author_purpose",
    stem: "Author's purpose includes:",
    choices: [
      { key: "A", text: "Entertain" },
      { key: "B", text: "Inform" },
      { key: "C", text: "Persuade" },
      { key: "D", text: "All of these" }
    ],
    answer_key: "D",
    explanation: "Authors may write to entertain, inform, or persuade."
  },
  {
    id: "G5-ELA-061",
    skill: "inference",
    stem: "If clouds darken, you infer:",
    choices: [
      { key: "A", text: "Rain may come" },
      { key: "B", text: "Snow melts" },
      { key: "C", text: "Sun rises" },
      { key: "D", text: "Wind stops" }
    ],
    answer_key: "A",
    explanation: "Readers can infer that rain may come by combining the clue with background knowledge."
  },
  {
    id: "G5-ELA-062",
    skill: "compare",
    stem: "Compare means:",
    choices: [
      { key: "A", text: "Differences only" },
      { key: "B", text: "Similarities" },
      { key: "C", text: "Problems" },
      { key: "D", text: "Steps" }
    ],
    answer_key: "B",
    explanation: "To compare means to look for similarities between things."
  },
  {
    id: "G5-ELA-063",
    skill: "evidence",
    stem: "Evidence should be:",
    choices: [
      { key: "A", text: "Random" },
      { key: "B", text: "Opinion" },
      { key: "C", text: "From the text" },
      { key: "D", text: "Imaginary" }
    ],
    answer_key: "C",
    explanation: "Strong textual evidence comes directly from the text."
  },
  {
    id: "G5-ELA-064",
    skill: "tone",
    stem: "Tone reflects:",
    choices: [
      { key: "A", text: "Setting" },
      { key: "B", text: "Feeling" },
      { key: "C", text: "Plot" },
      { key: "D", text: "Length" }
    ],
    answer_key: "B",
    explanation: "Tone reflects the feeling or attitude created by the text."
  },
  {
    id: "G5-ELA-065",
    skill: "theme",
    stem: "Theme is:",
    choices: [
      { key: "A", text: "Life lesson" },
      { key: "B", text: "Character name" },
      { key: "C", text: "Setting" },
      { key: "D", text: "Dialogue" }
    ],
    answer_key: "A",
    explanation: "Theme is the lesson or message a reader can take from a text."
  },
  {
    id: "G5-ELA-066",
    skill: "vocabulary",
    stem: "Synonym means:",
    choices: [
      { key: "A", text: "Opposite" },
      { key: "B", text: "Example" },
      { key: "C", text: "Same meaning" },
      { key: "D", text: "Number" }
    ],
    answer_key: "C",
    explanation: "A synonym is a word with the same or nearly the same meaning."
  },
  {
    id: "G5-ELA-067",
    skill: "structure",
    stem: "Cause/effect shows:",
    choices: [
      { key: "A", text: "Why something happens" },
      { key: "B", text: "Order" },
      { key: "C", text: "Comparison" },
      { key: "D", text: "Opinion" }
    ],
    answer_key: "A",
    explanation: "Cause and effect explains why something happens and what result follows."
  },
  {
    id: "G5-ELA-068",
    skill: "character",
    stem: "Character traits describe:",
    choices: [
      { key: "A", text: "Setting" },
      { key: "B", text: "Plot" },
      { key: "C", text: "Theme" },
      { key: "D", text: "Personality" }
    ],
    answer_key: "D",
    explanation: "Character traits describe a person's personality and behavior."
  },
  {
    id: "G5-ELA-069",
    skill: "main_idea",
    stem: "Best title supports:",
    choices: [
      { key: "A", text: "Detail" },
      { key: "B", text: "Opinion" },
      { key: "C", text: "Main idea" },
      { key: "D", text: "Dialogue" }
    ],
    answer_key: "C",
    explanation: "A strong title usually reflects the main idea of the text."
  },
  {
    id: "G5-ELA-070",
    skill: "compare_texts",
    stem: "Paired passages require:",
    choices: [
      { key: "A", text: "Guessing" },
      { key: "B", text: "Comparing ideas" },
      { key: "C", text: "Drawing" },
      { key: "D", text: "Counting" }
    ],
    answer_key: "B",
    explanation: "Paired passages ask readers to compare ideas and connections across texts."
  },
  {
    id: "G5-ELA-071",
    skill: "context",
    stem: "Unknown word? Use:",
    choices: [
      { key: "A", text: "Context clues" },
      { key: "B", text: "Ignore it" },
      { key: "C", text: "Skip reading" },
      { key: "D", text: "Guess randomly" }
    ],
    answer_key: "A",
    explanation: "Context clues help readers figure out unknown words while they read."
  },
  {
    id: "G5-ELA-072",
    skill: "inference",
    stem: "Inference uses:",
    choices: [
      { key: "A", text: "Only text" },
      { key: "B", text: "Only thinking" },
      { key: "C", text: "Pictures" },
      { key: "D", text: "Text + thinking" }
    ],
    answer_key: "D",
    explanation: "Inference combines clues from the text with the reader's own thinking."
  },
  {
    id: "G5-ELA-073",
    skill: "structure",
    stem: "Problem/solution includes:",
    choices: [
      { key: "A", text: "Only problem" },
      { key: "B", text: "Only solution" },
      { key: "C", text: "Both" },
      { key: "D", text: "Neither" }
    ],
    answer_key: "C",
    explanation: "Problem-and-solution structure includes both the problem and the solution."
  },
  {
    id: "G5-ELA-074",
    skill: "theme",
    stem: "Stories often teach:",
    choices: [
      { key: "A", text: "Math facts" },
      { key: "B", text: "Lessons" },
      { key: "C", text: "Science rules" },
      { key: "D", text: "Maps" }
    ],
    answer_key: "B",
    explanation: "Stories often teach lessons, which connect to theme."
  },
  {
    id: "G5-ELA-075",
    skill: "tone",
    stem: "Happy tone feels:",
    choices: [
      { key: "A", text: "Joyful" },
      { key: "B", text: "Angry" },
      { key: "C", text: "Sad" },
      { key: "D", text: "Serious" }
    ],
    answer_key: "A",
    explanation: "A happy tone feels joyful and upbeat."
  }
];
