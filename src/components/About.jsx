import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full section-padding bg-white">
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <p className="text-xl mt-5">
          I am a Master's student in Statistical Practice at Boston University, with a strong foundation in Mathematics. 
          My expertise spans data science, statistical modeling, and machine learning, with practical experience in 
          Python, R, and various ML frameworks.
        </p>
        <p className="text-xl mt-5">
          Currently, I'm working as a Student Partner in Data Science at Fidelity Investments and serving as a 
          Statistical Consultant at Boston University. I'm passionate about using data-driven approaches to solve 
          complex problems and make meaningful impacts.
        </p>
      </div>
    </div>
  );
};

export default About;
