import React from 'react';
import '../App.css'; // Corrected import path for App.css

const Achievements = () => {
  const achievements = [
    { title: 'Google Girl Hackathon Finalist 2024', description: 'Ranked as one of the Top 45 Finalists in Google Girl Hackathon 2024, surpassing 34,000+ participants across 3500+ universities.' },
    { title: 'Linux Foundation Training Scholar 2023', description: 'Awarded the Linux Foundation+Women Who Code Scholarship for Quarterly Scholarship by Linux Foundation' },
    { title: 'Amazon ML Summer School 2024', description: 'Selected as a mentee for the Amazon Machine Learning Summer School 2024, receiving training in machine learning.' },
    { title: 'Woodpecker Hackathon 2024-Semi Finalist', description: 'Selected as a semi-finalist in Woodpecker Hackathon 2024.' },
    { title: 'Acceptance of Research Paper in IEEE IATMSI-2024', description: '“Ikigai: AI Virtual Desktop Assistant,” is published in the conference on 15th March' },
    { title: 'State Debate Winner at Indian Institute of Forest Management', description: 'Participated in nationals and was one of 45 members to reach the finals.' },
    { title: 'Grace Hopper Celebration Scholar 2024', description: 'Selected as a Grace Hopper Celebration Scholar 2024, I will connect with a global network of women in technology.' },
    { title: 'Data Structures and Algorithms', description: 'More than 450+ problems solved across various platforms, including LeetCode, Codeforces, CodeStudio, and GeeksforGeeks,got rank 1111 in Kanpur ICPC-Prelims(Team) 2023' },
  ];

  return (
    <div className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <p>"Milestones I achieved yet will add more soon. Racing :)"</p>
      <div className="achievements-grid">
        {/* First Row */}
        <div className="achievements-row">
          {achievements.slice(0, 4).map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
        
        {/* Second Row */}
        <div className="achievements-row">
          {achievements.slice(4).map((achievement, index) => (
            <div key={index + 4} className="achievement-card"> {/* Adjusting index for the second row */}
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
