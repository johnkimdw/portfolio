import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { DesignProvider } from './contexts/DesignContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cooking from './pages/Cooking';
import Dance from './pages/Dance';
import Lab from './pages/Lab';

function App() {
  return (
    <ThemeProvider>
      <DesignProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/dance" element={<Dance />} />
            <Route path="/lab" element={<Lab />} />
          </Routes>
        </Layout>
      </Router>
      </DesignProvider>
    </ThemeProvider>
  );
}

export default App;
