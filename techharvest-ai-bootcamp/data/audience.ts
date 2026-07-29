import {
  GraduationCap,
  Briefcase,
  Laptop,
  Building2,
  Lightbulb,
  Rocket,
} from "lucide-react";

export const audience = {
  title: "Who Should Join This Bootcamp?",

  subtitle:
    "Whether you're a student, professional, entrepreneur or simply curious about Artificial Intelligence, this bootcamp is designed to help you succeed.",

  groups: [
    {
      title: "Students",
      icon: GraduationCap,
      description:
        "Use AI to study smarter, complete assignments faster and prepare for future careers.",
    },
    {
      title: "Professionals",
      icon: Briefcase,
      description:
        "Increase productivity, automate repetitive tasks and become more valuable at work.",
    },
    {
      title: "Freelancers",
      icon: Laptop,
      description:
        "Offer AI-powered services, work faster and increase your income.",
    },
    {
      title: "Business Owners",
      icon: Building2,
      description:
        "Use AI to improve operations, marketing, customer service and decision making.",
    },
    {
      title: "Content Creators",
      icon: Lightbulb,
      description:
        "Generate high-quality content, scripts, captions and creative ideas in minutes.",
    },
    {
      title: "Anyone Ready For The Future",
      icon: Rocket,
      description:
        "No experience required. If you're willing to learn, you're welcome.",
    },
  ],

  cta: {
    title: "If You Fit Into Any Of These Categories...",

    subtitle:
      "This bootcamp was built specifically for you.",

    button: "Join The Next Cohort",

    href: "/courses",
  },
};

export default audience;