import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};
const experience = [
  {
    title: "GRD Labelle",
    position: "Software Engineering Intern",
    time: "06/2024 - 09/2024",
    location: "Ouled Moussa, Algeria",
    description:
      "Assisted in software design, debugging, and code reviews, gaining hands-on experience in Agile development methodologies. Collaborated with senior developers to implement and test new features, enhancing my practical skills in software engineering.",
    tech: [
      "Java",
      "Python",
      "JavaScript",
      "Agile",
      "Git",
      "Debugging",
      "Code Review"
    ],
  },
  {
    title: "Freelance Software Developer",
    position: "Self-Employed",
    time: "12/2022 - Current",
    location: "Manchester, United Kingdom",
    description:
      "Developed custom software solutions for various clients, managing all aspects of the development lifecycle from requirements gathering to deployment. Maintained effective client communications and consistently delivered projects on time, building a reputation for reliability and quality work.",
    tech: ["Java", "Python", "JavaScript", "HTML/CSS", "SQL", "Git", "Client Management"],
  },
  {
    title: "BSG Berkley Scott",
    position: "Hospitality Worker",
    time: "04/2023 - Current",
    location: "Manchester, United Kingdom",
    description:
      "Effectively managed workload across shifts, enhancing teamwork and adaptability skills in a fast-paced environment. Developed strong time management and customer service abilities while balancing professional responsibilities with academic commitments.",
    tech: [
      "Teamwork",
      "Time Management",
      "Customer Service",
      "Adaptability",
      "Communication"
    ],
  },
  {
    title: "Fez-tajine",
    position: "Waiter",
    time: "12/2023 - 09/2024",
    location: "Manchester, United Kingdom",
    description:
      "Delivered excellent customer service in a busy restaurant environment, developing strong interpersonal and communication skills. Efficiently managed multiple tasks simultaneously while maintaining high standards of service quality and customer satisfaction.",
    tech: [
      "Customer Relations",
      "Communication",
      "Multi-tasking",
      "Problem Solving",
      "Team Coordination"
    ],
  },
  {
    title: "Muller Milk",
    position: "Warehouse Worker",
    time: "11/2022 - 02/2023",
    location: "Manchester, United Kingdom",
    description:
      "Organized inventory and ensured efficient warehouse operations with high attention to detail. Collaborated with team members to maintain accurate stock records and optimize warehouse logistics, developing valuable organizational and analytical skills.",
    tech: [
      "Inventory Management",
      "Logistics",
      "Attention to Detail",
      "Physical Stamina",
      "Team Collaboration"
    ],
  },
  {
    title: "Barber Artist",
    position: "Hairdresser",
    time: "07/2022 - 09/2022",
    location: "Blida, Algeria",
    description:
      "Provided barber services, focusing on client satisfaction and service quality. Developed interpersonal and customer service skills while maintaining attention to detail.",
    tech: ["Customer Service", "Creativity", "Attention to Detail", "Communication", "Client Satisfaction"],
  },
  {
    title: "Food Wholesale",
    position: "Sales Consultant",
    time: "05/2021 - 06/2022",
    location: "Blida, Algeria",
    description:
      "Delivered exceptional customer service, ensuring a positive shopping experience for clients. Gained skills in communication, negotiation, and relationship building.",
    tech: ["Sales", "Negotiation", "Customer Service", "Problem Solving", "Client Management"],
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
