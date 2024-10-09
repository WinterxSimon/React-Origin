import React from 'react';
import { useParams } from 'react-router-dom';

const stories = [
  { id: 1, title: "A Day in Vegas", description: "Explore the best spots in Vegas. Visit the Strip, see a show, and dine at top restaurants." },
  { id: 2, title: "Exploring New York", description: "Discover the hidden gems of New York. Walk through Central Park, visit museums, and enjoy Broadway shows." }
];

function ViewStory() {
  const { id } = useParams();
  const story = stories.find(story => story.id === parseInt(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
    </div>
  );
}

export default ViewStory;
