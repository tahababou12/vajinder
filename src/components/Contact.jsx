import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "vajinderkaur.edu@gmail.com",
      link: "mailto:vajinderkaur.edu@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "(857)-540-2668",
      link: "tel:8575402668"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/VajinderKaur",
      link: "https://linkedin.com/in/VajinderKaur"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/VajinderKaur",
      link: "https://github.com/VajinderKaur"
    }
  ];

  return (
    <div name="contact" className="w-full section-padding bg-gray-50">
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.label !== "Phone" && info.label !== "Email" ? "_blank" : ""}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mr-4 text-blue-600">
                {info.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{info.label}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
