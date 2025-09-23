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
            <span className="font-bold ml-2">Technical Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Java</Chip>
            <Chip>Python</Chip>
            <Chip>JavaScript</Chip>
            <Chip>Kotlin</Chip>
            <Chip>Swift</Chip>
            <Chip>SQL</Chip>
            <Chip>HTML/CSS</Chip>
            <Chip>PHP</Chip>
            <Chip>JavaFX</Chip>
            <Chip>Android Studio</Chip>
            <Chip>XCode</Chip>
            <Chip>Git</Chip>
            <Chip>Linux (Ubuntu)</Chip>
            <Chip>Agile</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Soft Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Teamwork</Chip>
            <Chip>Leadership</Chip>
            <Chip>Analytical Thinking</Chip>
            <Chip>Problem Solving</Chip>
            <Chip>Time Management</Chip>
            <Chip>Customer Relations</Chip>
            <Chip>Communication</Chip>
            <Chip>Adaptability</Chip>
            <Chip>Detail-Oriented</Chip>
            <Chip>Task Delegation</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
