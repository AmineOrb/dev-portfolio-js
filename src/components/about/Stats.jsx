
import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">
              AI, Data & Technical Skills
            </span>
          </h4>

          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Python</Chip>
            <Chip>Machine Learning</Chip>
            <Chip>Natural Language Processing</Chip>
            <Chip>Deep Learning</Chip>
            <Chip>Scikit-learn</Chip>
            <Chip>TensorFlow / Keras</Chip>
            <Chip>Pandas</Chip>
            <Chip>NumPy</Chip>
            <Chip>Apache Spark</Chip>
            <Chip>PySpark</Chip>
            <Chip>Spark SQL</Chip>
            <Chip>Databricks</Chip>
            <Chip>SQL</Chip>
            <Chip>JavaScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Flask</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>Java</Chip>
            <Chip>PHP</Chip>
            <Chip>Kotlin</Chip>
            <Chip>Swift</Chip>
            <Chip>Git / GitHub</Chip>
            <Chip>Linux</Chip>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">
              Professional Skills
            </span>
          </h4>

          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Problem Solving</Chip>
            <Chip>Analytical Thinking</Chip>
            <Chip>Teamwork</Chip>
            <Chip>Communication</Chip>
            <Chip>Leadership</Chip>
            <Chip>Adaptability</Chip>
            <Chip>Agile Collaboration</Chip>
            <Chip>Time Management</Chip>
            <Chip>Cross-Cultural Communication</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
