import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories, getArticlesByCategory, searchArticles } from '../data/knowledgeArticles';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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

  const categoryColors = {
    'Recruitment & Talent Acquisition': 'linear-gradient(135deg, #006A4E 0%, #008f65 100%)',
    'Performance & Development': 'linear-gradient(135deg, #D4AF37 0%, #E5C048 100%)',
    'Compensation & Benefits': 'linear-gradient(135deg, #0A2342 0%, #1a3a5c 100%)',
    'Diversity & Inclusion': 'linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)',
    'HR Operations': 'linear-gradient(135deg, #006A4E 0%, #008f65 100%)',
    'Analytics & Metrics': 'linear-gradient(135deg, #D4AF37 0%, #E5C048 100%)',
    'Employee Relations': 'linear-gradient(135deg, #0A2342 0%, #1a3a5c 100%)',
    'Learning & Development': 'linear-gradient(135deg, #006A4E 0%, #008f65 100%)',
    'Employee Experience': 'linear-gradient(135deg, #D4AF37 0%, #E5C048 100%)'
  };

  return (
    <>
      {/* Hero Section - Modern Dark */}
      <section className="modern-hero" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="modern-hero-content">
            <h1 style={{ fontSize: '3rem' }}>HR Knowledge Base</h1>
            <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto' }}>
              Your comprehensive resource for HR best practices, policies, and insights tailored for Saudi Arabia
            </p>
            {/* Modern Search Box */}
            <form onSubmit={handleSearch} className="search-box-modern">
              <i className="fas fa-search" style={{ color: 'rgba(255,255,255,0.6)' }}></i>
              <input
                type="text"
                placeholder="Search for articles, guides, policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ border: 'none', background: 'transparent', flex: 1, color: 'white', padding: '12px 20px', fontSize: '1rem', width: '100%' }}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-green)', fontSize: '2rem', margin: 0 }}>500+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Articles</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-green)', fontSize: '2rem', margin: 0 }}>50+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Categories</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-green)', fontSize: '2rem', margin: 0 }}>100+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Templates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Categories */}
      <section style={{ padding: '80px 0', background: 'var(--light-sand-bg)' }}>
        <div className="container">
          {searchResults ? (
            <div>
              <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0 }}>Search Results <span style={{ color: 'var(--neutral-gray)', fontSize: '1rem' }}>({searchResults.length} articles)</span></h2>
                <button onClick={clearSearch} className="btn-modern-gold" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                  <i className="fas fa-times" style={{ marginRight: '8px' }}></i> Clear
                </button>
              </div>
              {searchResults.length > 0 ? (
                <div style={{ display: 'grid', gap: '20px' }}>
                  {searchResults.map((article) => (
                    <div key={article.id} className="discussion-card-modern" style={{ borderLeft: '4px solid var(--primary-green)' }}>
                      <Link to={`/knowledge-base/${article.slug}`} style={{ color: 'var(--dark-blue-text)', textDecoration: 'none' }}>
                        <h3 style={{ marginBottom: '10px', transition: 'color 0.3s', '&:hover': { color: 'var(--primary-green)' } }}>{article.title}</h3>
                      </Link>
                      <p style={{ color: 'var(--neutral-gray)', marginBottom: '15px', lineHeight: '1.7' }}>{article.summary}</p>
                      <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                        <span className="badge-modern badge-success"><i className="fas fa-folder" style={{ marginRight: '6px' }}></i> {article.category}</span>
                        <span className="badge-modern badge-gold"><i className="fas fa-tags" style={{ marginRight: '6px' }}></i> {article.tags.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-card" style={{ textAlign: 'center', padding: '80px 40px' }}>
                  <i className="fas fa-search" style={{ fontSize: '4rem', color: 'var(--neutral-gray)', marginBottom: '20px' }}></i>
                  <h3>No articles found</h3>
                  <p style={{ color: 'var(--neutral-gray)' }}>Try different keywords or browse categories below.</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="section-title" style={{ marginBottom: '50px' }}>Browse by Category</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
                {categories.map((category, index) => {
                  const articles = getArticlesByCategory(category);
                  const icon = categoryIcons[category] || 'fas fa-folder';
                  const gradient = categoryColors[category] || 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))';

                  return (
                    <div key={index} className="category-card-modern" style={{ padding: 0, overflow: 'hidden' }}>
                      <div style={{
                        background: gradient,
                        padding: '25px',
                        color: 'white'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <i className={icon} style={{ fontSize: '1.8rem' }}></i>
                          <h3 style={{ margin: 0, color: 'white', fontSize: '1.2rem' }}>{category}</h3>
                        </div>
                        <p style={{ margin: '10px 0 0 0', opacity: 0.9, fontSize: '0.9rem' }}>{articles.length} articles</p>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {articles.slice(0, 4).map((article, idx) => (
                            <li key={article.id} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: idx < 3 ? '1px solid #eee' : 'none' }}>
                              <Link to={`/knowledge-base/${article.slug}`} style={{ color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fas fa-chevron-right" style={{ color: 'var(--primary-green)', fontSize: '0.8rem' }}></i>
                                {article.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '50px' }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card" style={{ marginBottom: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => toggleFAQ(index)}>
                <div style={{
                  padding: '25px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background 0.3s'
                }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fas fa-question" style={{ color: 'white', fontSize: '0.9rem' }}></i>
                    </div>
                    {faq.question}
                  </h3>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: expandedFAQ === index ? 'var(--primary-green)' : '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}>
                    <i className={`fas fa-${expandedFAQ === index ? 'minus' : 'plus'}`} style={{ color: expandedFAQ === index ? 'white' : 'var(--neutral-gray)', transition: 'transform 0.3s', transform: expandedFAQ === index ? 'rotate(180deg)' : 'none' }}></i>
                  </div>
                </div>
                <div style={{
                  maxHeight: expandedFAQ === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, padding 0.3s'
                }}>
                  <div style={{ padding: expandedFAQ === index ? '0 30px 25px 80px' : '0 30px', color: 'var(--neutral-gray)', lineHeight: '1.8' }}>
                    {faq.answer}
                  </div>
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
