import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaBoxes, FaExchangeAlt, FaChartLine, FaListAlt } from 'react-icons/fa';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: 'Inventory Management System',
      description: 'Add products, manage stock, and download barcode, label, and stock files for efficient and accurate inventory update on OMS.',
      technologies: ['React', 'API', 'Tailwind CSS'],
      githubLink: 'https://github.com/Sachinrawat6/inventoryWithReact',
      liveLink: 'https://qurviiinventory.netlify.app/',
      icon: <FaBoxes className="w-16 h-16" />
    },
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
      liveLink: 'https://qurviidash.netlify.app',
      icon: <FaChartLine className="w-16 h-16" />
    },
    {
      id: 4,
      title: 'Product Catalogue',
      description: 'The Product Cataloging System allows you to select a sales channel and generate its specific listing file, making product uploads fast and accurate.',
      technologies: ['React', 'NocoDB', 'Tailwind Css'],
      githubLink: 'https://github.com/Sachinrawat6/catalogue',
      liveLink: 'https://qurviicatalogue.netlify.app/',
      icon: <FaListAlt className="w-16 h-16" />
    },
     {
      id: 5,
      title: 'Shopify Order Management System',
      description: 'The Product Cataloging System allows you to select a sales channel and generate its specific listing file, making product uploads fast and accurate.',
      technologies: ['React', 'MongoDB', 'Chart.js', 'Tailwind Css'],
      githubLink: 'https://github.com/Sachinrawat6/shopifyOrderManagementSystem',
      liveLink: 'https://shopifyoms.netlify.app/',
      icon: <FaListAlt className="w-16 h-16" />
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8  bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-400  mb-4 ">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects with their technologies and links.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-r   from-blue-700 to-blue-800 flex items-center justify-center">
                <div className="text-white opacity-20 hover:opacity-30 transition-opacity">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2  text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm  text-gray-200"
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
                    className="flex items-center text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;