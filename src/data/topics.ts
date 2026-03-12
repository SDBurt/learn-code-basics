import type { ComponentType } from "react";

import { WelcomeSlide } from "@/components/slides/welcome";
import { WhyCodeSlide } from "@/components/slides/why-code";
import { PathwaysSlide } from "@/components/slides/pathways";
import { PythonIntroSlide } from "@/components/slides/python-intro";
import { VariablesSlide } from "@/components/slides/variables";
import { DataTypesSlide } from "@/components/slides/data-types";
import { HowCodeRunsSlide } from "@/components/slides/how-code-runs";
import { ConditionalsSlide } from "@/components/slides/conditionals";
import { LoopsSlide } from "@/components/slides/loops";
import { FunctionsSlide } from "@/components/slides/functions";
import { ListsSlide } from "@/components/slides/lists";
import { DictionariesSlide } from "@/components/slides/dictionaries";
import { TuplesSetsSlide } from "@/components/slides/tuples-sets";
import { InternetHttpSlide } from "@/components/slides/internet-http";
import { FrontendBackendSlide } from "@/components/slides/frontend-backend";
import { ApisSlide } from "@/components/slides/apis";
import { AuthSlide } from "@/components/slides/auth";
import { DatabasesSlide } from "@/components/slides/databases";
import { CloudSlide } from "@/components/slides/cloud";
import { DebuggingSlide } from "@/components/slides/debugging";
import { TerminalSlide } from "@/components/slides/terminal";
import { GitSlide } from "@/components/slides/git";
import { EditorsSlide } from "@/components/slides/editors";
import { TestingSlide } from "@/components/slides/testing";
import { FrameworksSlide } from "@/components/slides/frameworks";
import { LanguagesSlide } from "@/components/slides/languages";
import { SystemsSlide } from "@/components/slides/systems";
import { CachingSlide } from "@/components/slides/caching";
import { LoadBalancersSlide } from "@/components/slides/load-balancers";
import { NetworkingSlide } from "@/components/slides/networking";
import { DevDaySlide } from "@/components/slides/dev-day";
import { HowTeamsWorkSlide } from "@/components/slides/how-teams-work";
import { SecuritySlide } from "@/components/slides/security";
import { JargonSlide } from "@/components/slides/jargon";
import { WhatYouBuildSlide } from "@/components/slides/what-you-build";
import { JourneySlide } from "@/components/slides/journey";
import { ErrorMessagesSlide } from "@/components/slides/error-messages";
import { PackageManagersSlide } from "@/components/slides/package-managers";
import { OpenSourceSlide } from "@/components/slides/open-source";
import { MobileAppsSlide } from "@/components/slides/mobile-apps";
import { NativeVsWebSlide } from "@/components/slides/native-vs-web";
import { AppStoresSlide } from "@/components/slides/app-stores";
import { IotSlide } from "@/components/slides/iot";
import { WhatIsAiSlide } from "@/components/slides/what-is-ai";
import { MachineLearningSlide } from "@/components/slides/machine-learning";
import { LlmsSlide } from "@/components/slides/llms";
import { DataScienceSlide } from "@/components/slides/data-science";
import { AiEthicsSlide } from "@/components/slides/ai-ethics";

export interface SlideDefinition {
  title: string;
  component: ComponentType<{ active: boolean }>;
}

export interface Topic {
  name: string;
  slug: string;
  description: string;
  slides: SlideDefinition[];
}

export const TOPICS: Topic[] = [
  {
    name: "Basics",
    slug: "basics",
    description:
      "What code is, why it matters, and the core building blocks every developer uses.",
    slides: [
      { title: "What is Code?", component: WelcomeSlide },
      { title: "Why Code Matters", component: WhyCodeSlide },
      { title: "Coding Pathways", component: PathwaysSlide },
      { title: "Meet Python", component: PythonIntroSlide },
      { title: "How Code Runs", component: HowCodeRunsSlide },
      { title: "Data Types", component: DataTypesSlide },
      { title: "Variables", component: VariablesSlide },
      { title: "Conditionals", component: ConditionalsSlide },
      { title: "Loops", component: LoopsSlide },
      { title: "Functions", component: FunctionsSlide },
      { title: "Lists", component: ListsSlide },
      { title: "Dictionaries", component: DictionariesSlide },
      { title: "Tuples & Sets", component: TuplesSetsSlide },
      { title: "Error Messages", component: ErrorMessagesSlide },
    ],
  },
  {
    name: "The Web",
    slug: "the-web",
    description:
      "How the internet works, from HTTP requests to system architecture and scaling.",
    slides: [
      { title: "Internet & HTTP", component: InternetHttpSlide },
      { title: "Frontend vs Backend", component: FrontendBackendSlide },
      { title: "APIs", component: ApisSlide },
      { title: "Authentication", component: AuthSlide },
      { title: "Databases", component: DatabasesSlide },
      { title: "How Systems Work", component: SystemsSlide },
      { title: "Caching", component: CachingSlide },
      { title: "Load Balancers", component: LoadBalancersSlide },
      { title: "Networking & DNS", component: NetworkingSlide },
      { title: "Cloud & Hosting", component: CloudSlide },
    ],
  },
  {
    name: "Developer Tools",
    slug: "developer-tools",
    description:
      "The tools and skills developers use every day: debugging, version control, and more.",
    slides: [
      { title: "Bugs & Debugging", component: DebuggingSlide },
      { title: "The Terminal", component: TerminalSlide },
      { title: "Git & Version Control", component: GitSlide },
      { title: "Code Editors & IDEs", component: EditorsSlide },
      { title: "Testing", component: TestingSlide },
      { title: "Frameworks & Libraries", component: FrameworksSlide },
      { title: "Programming Languages", component: LanguagesSlide },
      { title: "Package Managers", component: PackageManagersSlide },
    ],
  },
  {
    name: "The Big Picture",
    slug: "the-big-picture",
    description:
      "What a developer's day looks like, the jargon, and where to go from here.",
    slides: [
      { title: "A Developer's Day", component: DevDaySlide },
      { title: "How Teams Work", component: HowTeamsWorkSlide },
      { title: "Security Basics", component: SecuritySlide },
      { title: "Open Source", component: OpenSourceSlide },
      { title: "Tech Jargon", component: JargonSlide },
      { title: "What Can You Build?", component: WhatYouBuildSlide },
      { title: "Your Journey", component: JourneySlide },
    ],
  },
  {
    name: "AI & Data",
    slug: "ai-and-data",
    description:
      "What AI actually is, how machines learn, large language models, data science, and the ethics behind it all.",
    slides: [
      { title: "What is AI?", component: WhatIsAiSlide },
      { title: "Machine Learning", component: MachineLearningSlide },
      { title: "LLMs & Chatbots", component: LlmsSlide },
      { title: "Data Science", component: DataScienceSlide },
      { title: "Ethics of AI", component: AiEthicsSlide },
    ],
  },
  {
    name: "Mobile & Beyond",
    slug: "mobile-and-beyond",
    description:
      "How mobile apps work, native vs web approaches, app distribution, and the Internet of Things.",
    slides: [
      { title: "Mobile Apps", component: MobileAppsSlide },
      { title: "Native vs Web Apps", component: NativeVsWebSlide },
      { title: "App Stores", component: AppStoresSlide },
      { title: "IoT & Embedded", component: IotSlide },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
