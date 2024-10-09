// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateStory from './components/CreateStory';
import ViewStory from './components/ViewStory';
import StoryList from './components/StoryList';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Welcome to Hawthourn</h1>
          <nav>
            <Link to="/">Story List</Link>
            <Link to="/create">Create a New Story</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<StoryList />} />
            <Route path="/create" element={<CreateStory />} />
            <Route path="/view/:id" element={<ViewStory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
