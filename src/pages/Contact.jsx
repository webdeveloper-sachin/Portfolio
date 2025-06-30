import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-gray-400 mb-8">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-300">Email</h3>
                <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                  contact@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                <FiMapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-300">Location</h3>
                <p className="text-gray-400 ">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-blue-900/30 rounded-lg mr-4">
                <FiPhone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-300">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                required
                autoComplete='off'
                autoSave='off'
                autoFocus="off"
                id="name"
                className="w-full px-4 py-2 border-gray-600 rounded-lg  outline-0 bg-gray-700 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium  text-gray-300 mb-1">Email</label>
              <input
                type="email"
                autoComplete='off'
                required
                id="email"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg  outline-0 bg-gray-700 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mediumtext-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                autoComplete='off'
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg  outline-0 bg-gray-700 dark:text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 cursor-pointer to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;