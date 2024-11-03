import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'; // Assuming you have your general styles here
import codessCafeLogo from '../assets/img/codesscafe.jpg';
import aiml from '../assets/img/aiml.jpeg';
import gssoc from '../assets/img/gssoc.jpeg';
import gdg from '../assets/img/gdg.png';
import collegelogo from '../assets/img/college.jpeg'
import mun from '../assets/img/mun.jpeg';
import cdt from '../assets/img/cdt.jpeg';
import azure from '../assets/img/azure.png';

const Responsibilities = () => {
    const responsibilities = [
        { title: 'Mentor - Codess Community', logo: codessCafeLogo, description: 'Provide guidance and support to mentees as they navigate their learning paths in coding and technology.' },
        { title: 'Core Member - AI and ML Club at IIITNR', logo: aiml, description: 'Collaborate on innovative AI and ML projects while organizing workshops and events to enhance learning opportunities for members.' },
        { title: 'Anchor - Google Developers Group Raipur', logo: gdg, description: 'Facilitate workshops and meetups to foster a vibrant developer community, encouraging collaboration and knowledge sharing among developers.' },
        { title: 'Contributor at GirlScript Foundation', logo: gssoc, description: 'Organize and participate in tech events aimed at promoting engagement and learning among aspiring developers in the community.' },
        { title: 'DSA Teaching Assistant - IIITNR', logo: collegelogo, description: 'Mentor a group of 15 students, dedicating 2 hours each week to guide them in mastering concepts of data structures and algorithms.' },
        { title: 'Documentation In-charge - MUN (1st/2nd Year)', logo:mun, description: 'Manage and oversee documentation for the Model United Nations, ensuring clear communication and  create study guides for events.' },
        { title: 'Head-Club de Theatre (1st/2nd Year)', logo: cdt, description: 'Participate in and help organize theatrical performances, fostering creativity and teamwork among club members.' },
        { title: 'Microsoft Azure Cohort - 3rd Group', logo:azure, description: 'Mentor peers in utilizing Microsoft Azure, dedicating time each week to facilitate hands-on learning and project development.' },
        
    ];
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    large: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    small: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="responsibilities-section">
      <h2 className="section-title">Responsibilities and Positions</h2>
      <p>Some of the responsibilities I hold and have held them in past.</p>
      <Carousel responsive={responsive} infinite={true} className="responsibilities-carousel">
        {responsibilities.map((item, index) => (
          <div key={index} className="responsibility-card">
            <div className="circle-logo">
              <img src={item.logo} alt={item.title} className="responsibility-logo" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Responsibilities;
