import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Student Stress and Well-Being Analysis",
      description: "Predicted depression with 85% accuracy using logistic regression and evaluated models with AIC, BIC.",
      link: "github.com/VajinderKaur/Depression",
      tags: ["Python", "Machine Learning", "Statistics"]
    },
    {
      title: "Strawberries - Neem Oil Study",
      description: "Analyzed USDA-NASS strawberry dataset for chemical usage patterns and regional influences.",
      link: "github.com/DSR615/Strawberry",
      tags: ["R", "Data Analysis", "Visualization"]
    },
    {
      title: "Okinawa: Blue Zone Analysis",
      description: "Developed a Shiny app to explore Okinawa's healthcare and demographic trends.",
      link: "github.com/VajinderKaur/Okinawa",
      tags: ["R Shiny", "Healthcare", "Analytics"]
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Improved accuracy by 20% using AdaBoost and TF-IDF preprocessing.",
      link: "github.com/VajinderKaur/Sentiment",
      tags: ["NLP", "Machine Learning", "Python"]
    }
  ];

  return (
    <div name="projects" className="w-full section-padding dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white" data-aos="fade-up">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300
                transform hover:-translate-y-1 dark:hover:bg-gray-700"
            >
              <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
              <p className="mb-4 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                      text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a 
                href={`https://${project.link}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 
                  dark:hover:text-blue-300 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                View Project 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
