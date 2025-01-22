import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Co-founder",
      company: "InspireStemm",
      period: "Oct 2024 – Present",
      description: "Founded a platform to share STEMM stories of rising scholars, highlighting diverse journeys and challenges."
    },
    {
      title: "Student Partner in Data Science",
      company: "Fidelity Investments",
      period: "Sep 2024 – Present",
      description: "Built a Retrieval Augmented Generation chatbot and collaborated with experts on evaluation methods."
    },
    {
      title: "Statistical Consultant",
      company: "MSSP Consulting, Boston University",
      period: "Sep 2024 – Present",
      description: "Assessed correlations between artery mechanics and neurodegenerative disease using Linear Mixed Effect Models."
    }
  ];

  return (
    <div name="experience" className="w-full section-padding math-bg">
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="theorem-card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-accent-blue font-medium">{exp.company}</p>
                  <p className="text-sm mt-1">{exp.period}</p>
                </div>
              </div>
              <p className="mt-4 proof-section">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
