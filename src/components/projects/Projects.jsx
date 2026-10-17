
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "AI Student Performance Prediction",
    imgSrc: "project-imgs/Machine-Learning.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Flask",
      "React",
      "PostgreSQL",
    ],
    description:
      "Built an AI-powered web application that predicts student performance and generates personalised learning recommendations.",
    modalContent: (
      <>
        <p>
          Developed as my BSc Software Engineering final-year project,
          this application combines machine learning with full-stack
          development to help identify students who may need additional
          academic support.
        </p>

        <p>
          The system uses a Random Forest model to predict student
          performance based on academic information. It also provides
          adaptive learning recommendations to help students focus on
          areas where they need improvement.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Machine learning with Python and scikit-learn</li>
          <li>Random Forest performance prediction</li>
          <li>Personalised recommendations using the OpenAI API</li>
          <li>React frontend and Flask backend</li>
          <li>PostgreSQL database integration</li>
        </ul>
      </>
    ),
  },





  {
    title: "Education City — Professional Website",
    imgSrc: "project-imgs/EducationCity.png",
    code: "",
    projectLink: "https://www.educationcity-dz.com/",
    tech: ["Web Development", "Responsive Design", "UI/UX"],
    description:
      "Independently developed the Education City website during my software engineering internship at Labelle, delivering a real-world web project from development to deployment.",
    modalContent: (
      <>
        <p>
          During my software engineering internship at Labelle,
          I independently developed the Education City website,
          gaining practical experience delivering a professional
          web project.
        </p>

        <p>
          I was responsible for building the website and bringing
          the project to a working, publicly accessible result.
          This experience strengthened my independent problem-solving,
          web development, and project delivery skills.
        </p>

        <p>
          You can explore the live website at
          {" "}
          <a
            href="https://www.educationcity-dz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline"
          >
            educationcity-dz.com
          </a>.
        </p>
      </>
    ),
  },









  {
    title: "Amazon Review Sentiment Analysis",
    imgSrc: "project-imgs/amazon-sentiment-analysis.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "Python",
      "NLP",
      "TensorFlow",
      "Keras",
      "Word2Vec",
      "GloVe",
    ],
    description:
      "Analysed 20,000 Amazon product reviews using NLP and deep learning to classify customer sentiment.",
    modalContent: (
      <>
        <p>
          Built a natural language processing pipeline to analyse
          approximately 20,000 Amazon product reviews and classify
          sentiment from customer feedback.
        </p>

        <p>
          Explored word representation techniques including Word2Vec
          and GloVe, and developed neural network models using
          TensorFlow and Keras.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Text cleaning and preprocessing</li>
          <li>Word embeddings using Word2Vec and GloVe</li>
          <li>Deep learning model development</li>
          <li>Sentiment classification and evaluation</li>
          <li>Achieved approximately 91% classification accuracy</li>
        </ul>
      </>
    ),
  },

  {
    title: "AI News Topic Modelling",
    imgSrc: "project-imgs/ai-news-topic-modelling.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "Python",
      "NLP",
      "TF-IDF",
      "NMF",
      "LDA",
      "Scikit-learn",
    ],
    description:
      "Explored emerging AI-related themes in over 3,000 Guardian news articles using unsupervised NLP techniques.",
    modalContent: (
      <>
        <p>
          Collected more than 3,000 articles about artificial
          intelligence through The Guardian API and analysed the
          underlying themes using topic modelling.
        </p>

        <p>
          Applied TF-IDF text representations and compared
          Non-negative Matrix Factorisation (NMF) with Latent
          Dirichlet Allocation (LDA) to explore patterns across
          the article collection.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Data collection using The Guardian API</li>
          <li>Text preprocessing and feature extraction</li>
          <li>TF-IDF vectorisation</li>
          <li>NMF and LDA topic modelling</li>
          <li>Interpretation and comparison of discovered topics</li>
        </ul>
      </>
    ),
  },

  {
    title: "Big Data Game Recommendation System",
    imgSrc: "project-imgs/big-data-game-recommendation.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "Apache Spark",
      "PySpark",
      "Spark MLlib",
      "Databricks",
      "Collaborative Filtering",
    ],
    description:
      "Developed a game recommendation workflow using Apache Spark MLlib and collaborative filtering techniques.",
    modalContent: (
      <>
        <p>
          Explored large-scale recommendation techniques using
          Apache Spark and Databricks, focusing on collaborative
          filtering for game recommendations.
        </p>

        <p>
          Used Spark MLlib to develop and evaluate a recommendation
          approach based on patterns in user-item interactions.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Distributed data processing with Apache Spark</li>
          <li>Collaborative filtering</li>
          <li>Recommendation modelling using Spark MLlib</li>
          <li>Data analysis in Databricks</li>
        </ul>
      </>
    ),
  },

  {
    title: "ParcelBuddy Web Application",
    imgSrc: "project-imgs/Parcelbuddy.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "PHP",
      "MVC",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
    ],
    description:
      "Built a parcel management web application using a custom PHP MVC architecture and database-backed functionality.",
    modalContent: (
      <>
        <p>
          Developed a parcel management web application using PHP,
          SQL, JavaScript, HTML and CSS.
        </p>

        <p>
          Structured the backend around a custom Model-View-Controller
          architecture to separate application logic, data access
          and presentation.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Custom PHP MVC architecture</li>
          <li>Database-backed parcel management</li>
          <li>Server-side application logic</li>
          <li>Responsive web interface</li>
        </ul>
      </>
    ),
  },

  {
    title: "Native Mobile App Development",
    imgSrc: "project-imgs/Mobile_Dev.png",
    code: "https://github.com/AmineOrb",
    projectLink: "https://github.com/AmineOrb",
    tech: [
      "Kotlin",
      "Swift",
      "Android Studio",
      "Xcode",
      "Mobile Development",
    ],
    description:
      "Developed native Android and iOS applications using Kotlin, Swift and platform-specific development tools.",
    modalContent: (
      <>
        <p>
          Gained hands-on experience developing native mobile
          applications for Android and iOS.
        </p>

        <p>
          Used Kotlin with Android Studio and Swift with Xcode
          to build mobile interfaces and implement application
          functionality.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Native Android development with Kotlin</li>
          <li>Native iOS development with Swift</li>
          <li>Mobile interface design</li>
          <li>Platform-specific application development</li>
        </ul>
      </>
    ),
  },
];
