import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaCode, FaServer, FaMobileAlt, FaChartLine, FaExchangeAlt } from 'react-icons/fa';
import heroImage from '../assets/react.svg';
import dev from '../assets/dev.webp';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
  const featuredProjects = [
    {
         id: 2,
         title: 'Return Inventory Management System',
         description: 'The Return Inventory Management System lets you add returned products and track their location, helping manage and monitor returns efficiently.',
         technologies: ['React', 'Express', 'MongoDB', 'Tailwind Css'],
         githubLink: 'https://github.com/Sachinrawat6/Return-Inventory',
         liveLink: 'https://scanreturn.netlify.app/',
         icon: <FaExchangeAlt className="w-16 h-16" />
       },
       {
         id: 3,
         title: 'Employee Dashboard',
         description: 'Analytics dashboard for workers with data visualization.',
         technologies: ['React', 'Chart.js', 'Tailwind Css', "NocoDB"],
         githubLink: 'https://github.com/Sachinrawat6/dashboard',
         liveLink: 'https://tailordashboard.netlify.app',
         icon: <FaChartLine className="w-16 h-16" />
       },
  ];

  const skills = [
    { name: 'Frontend', items: ['React',  'Tailwind CSS', 'Html', 'Css','JavaScript'] },
    { name: 'Backend', items: ['Node.js', 'Express'] },
    { name: 'Database', items: ['MongoDb',"Noco DB","MySQL"] }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Sachin <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Rawat</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-400">
              I build modern, scalable web applications with cutting-edge technologies.
              Passionate about creating seamless user experiences and robust backend systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Contact Me
              </Link>
              <Link 
                to="/projects" 
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-gray-700 shadow-xl">
              <img 
                src={dev}           
                alt="Developer" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm">Based in San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-900/50 mr-4">
                  <FaCode className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Some of my recent work that I'm particularly proud of
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <div 
              key={project.id} 
              className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center relative">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-15  border-t border-gray-700'>

      <Contact/>
        </div>
      </section>
    </div>
  );
};

export default Home;