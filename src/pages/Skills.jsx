import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiGraphql, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-8 h-8 text-blue-500" />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-green-500" />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-600" />, level: 80 },
    { name: 'Express', icon: <SiExpress className="w-8 h-8 text-gray-800 dark:text-gray-200" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, level: 90 },
    { name: 'Redux', icon: <SiRedux className="w-8 h-8 text-purple-500" />, level: 75 },
    { name: 'GraphQL', icon: <SiGraphql className="w-8 h-8 text-pink-600" />, level: 70 },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" />, level: 80 }
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm mt-2 text-gray-400">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;