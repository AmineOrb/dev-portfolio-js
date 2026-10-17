
import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />

      {experience.map((item) => (
        <ExperienceItem
          key={`${item.title}-${item.position}`}
          {...item}
        />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Labelle",
    position: "International Business & Foreign Trade Intern",
    time: "05/2026 - 09/2026",
    location: "Algeria / China",
    description:
      "Gained practical experience in international business and foreign trade, including supplier communication, commercial negotiations, and visits to suppliers and manufacturing facilities in China. Developed cross-cultural communication, commercial awareness, and an understanding of international business operations.",
    tech: [
      "International Business",
      "Supplier Relations",
      "Negotiation",
      "Cross-Cultural Communication",
      "Business Operations",
    ],
  },

  {
    title: "Freelance Software Developer",
    position: "Self-Employed",
    time: "12/2022 - Present",
    location: "Manchester, United Kingdom",
    description:
      "Develop software solutions independently, working across requirements gathering, application development, testing, and delivery. Communicate with clients to understand their needs, solve technical problems, and build practical solutions using web development and programming technologies.",
    tech: [
      "Software Development",
      "JavaScript",
      "Python",
      "PHP",
      "SQL",
      "Git",
      "Client Communication",
    ],
  },

  {
    title: "GRD Labelle",
    position: "Software Engineering Intern",
    time: "06/2024 - 09/2024",
    location: "Ouled Moussa, Algeria",
    description:
      "Independently developed the Education City website during my software engineering internship, taking responsibility for building and delivering a publicly accessible web project. Also gained practical experience in software development, debugging, testing, and professional development workflows.",
    tech: [
      "Web Development",
      "Website Delivery",
      "Debugging",
      "Testing",
      "Problem Solving",
      "Independent Development",
    ],
  },


  {
    title: "E-commerce",
    position: "Self-Employed",
    time: "02/2019 - 05/2021",
    location: "Blida, Algeria",
    description:
      "Managed an e-commerce business through Facebook and social media advertising during the COVID-19 pandemic. Oversaw sales, marketing, and client relations independently.",
    tech: ["E-commerce", "Social Media Marketing", "Business Management", "Customer Engagement", "Entrepreneurship"],
  },
];
