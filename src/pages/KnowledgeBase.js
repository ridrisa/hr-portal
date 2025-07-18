import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories, getArticlesByCategory, searchArticles } from '../data/knowledgeArticles';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Get all unique categories
    const allCategories = getAllCategories();
    setCategories(allCategories);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = searchArticles(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults(null);
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I contribute to the knowledge base?",
      answer: "We welcome contributions from HR professionals! You can submit articles, case studies, or best practices through our contribution portal. All submissions are reviewed by our expert panel before publication."
    },
    {
      question: "Are the resources available in Arabic?",
      answer: "Yes! We provide bilingual resources in both English and Arabic to serve the diverse needs of HR professionals in Saudi Arabia."
    },
    {
      question: "How often is the knowledge base updated?",
      answer: "Our knowledge base is continuously updated with new content, regulatory changes, and industry insights. We add new resources weekly and review existing content quarterly."
    }
  ];

  // Category icons mapping
  const categoryIcons = {
    'Recruitment & Talent Acquisition': 'fas fa-users',
    'Performance & Development': 'fas fa-chart-line',
    'Compensation & Benefits': 'fas fa-dollar-sign',
    'Diversity & Inclusion': 'fas fa-balance-scale',
    'HR Operations': 'fas fa-cogs',
    'Analytics & Metrics': 'fas fa-chart-bar',
    'Employee Relations': 'fas fa-handshake',
    'Learning & Development': 'fas fa-graduation-cap',
    'Employee Experience': 'fas fa-smile'
  };

  return (
    <>
      {/* Hero Section */}
      <section className="kb-hero">
        <div className="container">
          <h1>HR Knowledge Base</h1>
          <p>Your comprehensive resource for HR best practices, policies, and insights tailored for Saudi Arabia</p>
          <div className="kb-search">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search knowledge base..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit"><i className="fas fa-search"></i> Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results or Categories */}
      <section className="knowledge-hub">
        <div className="container">
          {searchResults ? (
            <div>
              <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Search Results ({searchResults.length} articles found)</h2>
                <button onClick={clearSearch} className="btn btn-secondary">
                  <i className="fas fa-times"></i> Clear Search
                </button>
              </div>
              {searchResults.length > 0 ? (
                <div className="search-results" style={{ display: 'grid', gap: '20px' }}>
                  {searchResults.map((article) => (
                    <div key={article.id} style={{ 
                      background: '#fff', 
                      padding: '20px', 
                      borderRadius: '8px', 
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      borderLeft: '4px solid var(--primary-green)'
                    }}>
                      <Link to={`/knowledge-base/${article.slug}`}>
                        <h3 style={{ marginBottom: '10px' }}>{article.title}</h3>
                      </Link>
                      <p style={{ color: '#666', marginBottom: '10px' }}>{article.summary}</p>
                      <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#888' }}>
                        <span><i className="fas fa-folder"></i> {article.category}</span>
                        <span><i className="fas fa-tags"></i> {article.tags.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <p>No articles found matching your search. Try different keywords.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="kb-categories">
              {categories.map((category, index) => {
                const articles = getArticlesByCategory(category);
                const icon = categoryIcons[category] || 'fas fa-folder';
                
                return (
                  <div key={index} className="kb-category">
                    <h3><i className={icon}></i> {category}</h3>
                    <ul>
                      {articles.map((article) => (
                        <li key={article.id}>
                          <Link to={`/knowledge-base/${article.slug}`}>{article.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq light-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    <i className={`fas fa-${expandedFAQ === index ? 'minus' : 'plus'}`}></i>
                  </span>
                </div>
                <div className="faq-answer" style={{ display: expandedFAQ === index ? 'block' : 'none' }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeBase;