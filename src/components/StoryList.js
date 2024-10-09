import React from 'react';
import '../styles.css'; // Correct path to the styles.css file

function StoryList() {
  // Sample data for demonstration
  const stories = [
    { title: 'A Day in Vegas', description: 'Explore the best spots in Vegas.' },
    { title: 'Exploring New York', description: 'Discover hidden gems in NYC.' }
  ];

  return (
    <div className="story-list">
      <h2>Story List</h2>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryList;
