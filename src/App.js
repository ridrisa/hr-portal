import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowledgeBase from './pages/KnowledgeBase';
import Discussions from './pages/Discussions';
import OpenChat from './pages/OpenChat';
import HRTools from './pages/HRTools';
import Profile from './pages/Profile';
import KnowledgeArticle from './pages/KnowledgeArticle';
import NotFound from './pages/NotFound';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/knowledge-base/:articleId" element={<KnowledgeArticle />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/open-chat" element={<OpenChat />} />
            <Route path="/hr-tools" element={<HRTools />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;