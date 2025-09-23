import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
const projects = [
   {
    title: "Student Performance Prediction System",
    imgSrc: "project-imgs/Machine-Learning.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: ["Python", "Machine Learning", "Flask/Django", "React.js", "SQL"],
    description:
      "Developed a web application that predicts student performance based on historical academic data and provides personalized learning recommendations to improve areas of weakness.",
    modalContent: (
      <>
        <p>
          This project aims to build a web application that predicts student performance based on historical academic data (such as grades, attendance, and study habits) and provides personalized learning recommendations. These recommendations help students improve in areas where they are struggling by offering targeted exercises, resources, and study tips.
        </p>
        <p>
          The system uses machine learning models (including Logistic Regression, Random Forest, and Neural Networks) to analyze student data and identify at-risk students early, allowing for timely intervention. The application features a user-friendly interface for both students and teachers to interact with the prediction and recommendation features.
        </p>
        <p>
          Key components of the project include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Predictive modeling using machine learning techniques</li>
          <li>Adaptive learning recommendation system</li>
          <li>User profile management for students and teachers</li>
          <li>Secure database system for storing student data</li>
          <li>Search functionality for quick access to recommended materials</li>
        </ul>
        <p>
          The project was developed using an Agile methodology, with the frontend built using HTML, CSS, and JavaScript (with React.js), and the backend implemented in Python with Flask/Django. The database uses SQLite/PostgreSQL, and machine learning models were developed with scikit-learn and TensorFlow.
        </p>
      </>
    ),
  },
  {
    title: "Mobile Development",
    imgSrc: "project-imgs/Mobile_Dev.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: ["Android Studio", "Kotlin", "XCode", "Swift", "Mobile UI/UX"],
    description:
      "Created mobile applications using Android Studio with Kotlin and XCode with Swift. Focused on developing intuitive user interfaces and efficient functionality.",
    modalContent: (
      <>
        <p>
          This project involved developing mobile applications for both Android and iOS platforms using industry-standard tools and languages.
        </p>
        <p>
          For Android development, I used Android Studio and Kotlin to create responsive and feature-rich applications with modern UI components and efficient backend functionality.
        </p>
        <p>
          For iOS development, I worked with XCode and Swift to build native applications that followed Apple's design guidelines while providing seamless user experiences.
        </p>
        <p>
          Throughout the project, I focused on implementing best practices for mobile development, including responsive design, efficient resource management, and cross-platform compatibility considerations.
        </p>
      </>
    ),
  },
  {
    title: "Software Quality Management",
    imgSrc: "project-imgs/Software-Quality.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: ["Testing Frameworks", "Quality Assurance", "CI/CD", "Documentation"],
    description:
      "Implemented comprehensive software quality management processes, including testing methodologies, documentation standards, and continuous integration practices.",
    modalContent: (
      <>
        <p>
          This project focused on implementing robust software quality management processes to ensure the reliability, maintainability, and performance of software applications.
        </p>
        <p>
          I developed and implemented testing methodologies, including unit testing, integration testing, and system testing, to identify and address potential issues early in the development lifecycle.
        </p>
        <p>
          The project also involved establishing documentation standards and practices to improve code maintainability and knowledge transfer within development teams.
        </p>
        <p>
          Additionally, I implemented continuous integration and continuous deployment (CI/CD) pipelines to automate testing and deployment processes, enhancing overall software quality and reliability.
        </p>
      </>
    ),
  },
  {
    title: "Web Development Project",
    imgSrc: "project-imgs/Parcelbuddy.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: ["HTML/CSS", "JavaScript", "PHP", "SQL", "Responsive Design"],
    description:
      "Developed dynamic web applications using HTML/CSS, JavaScript, PHP, and SQL. Focused on creating responsive, user-friendly interfaces with robust backend functionality.",
    modalContent: (
      <>
        <p>
          This web development project involved creating dynamic and responsive web applications using a combination of frontend and backend technologies.
        </p>
        <p>
          On the frontend, I used HTML, CSS, and JavaScript to create intuitive and visually appealing user interfaces that adapt seamlessly to different screen sizes and devices.
        </p>
        <p>
          For the backend, I implemented server-side logic using PHP and database management with SQL, ensuring secure and efficient data handling and processing.
        </p>
        <p>
          The project emphasized best practices in web development, including responsive design principles, accessibility considerations, and performance optimization techniques.
        </p>
      </>
    ),
  },
];
