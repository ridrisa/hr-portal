import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../data/knowledgeArticles';

const KnowledgeArticle = () => {
  const { articleId } = useParams();
  const article = getArticleBySlug(articleId);
  const relatedArticles = article ? getRelatedArticles(article.slug).slice(0, 3) : [];

  if (!article) {
    return (
      <section className="article-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/knowledge-base" className="btn btn-primary">Back to Knowledge Base</Link>
          </div>
        </div>
      </section>
    );
  }

  const renderContent = () => {
    return article.content.map((section, index) => {
      switch (section.type) {
        case 'paragraph':
          return <p key={index}>{section.text}</p>;
        case 'heading':
          const HeadingTag = `h${section.level}`;
          return <HeadingTag key={index}>{section.text}</HeadingTag>;
        case 'list':
          return section.ordered ? (
            <ol key={index}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul key={index}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        case 'keyPoints':
          return (
            <div key={index} style={{ background: 'var(--light-sand-bg)', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
              <h4>Key Points:</h4>
              <ul>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ background: 'var(--light-sand-bg)', padding: '20px 0' }}>
        <div className="container">
          <nav style={{ fontSize: '0.9rem' }}>
            <Link to="/" style={{ color: '#666' }}>Home</Link>
            <span style={{ margin: '0 10px', color: '#666' }}>/</span>
            <Link to="/knowledge-base" style={{ color: '#666' }}>Knowledge Base</Link>
            <span style={{ margin: '0 10px', color: '#666' }}>/</span>
            <span style={{ color: 'var(--primary-green)' }}>{article.category}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Article Header */}
            <header style={{ marginBottom: '40px' }}>
              <h1 style={{ marginBottom: '20px' }}>{article.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#666', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                <span><i className="fas fa-user"></i> {article.author}</span>
                <span><i className="fas fa-calendar"></i> {new Date(article.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span><i className="fas fa-clock"></i> {Math.ceil(article.content.length * 2)} min read</span>
              </div>
              <div style={{ marginTop: '15px' }}>
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{ 
                    background: 'var(--light-sand-bg)', 
                    padding: '5px 12px', 
                    borderRadius: '15px', 
                    marginRight: '10px',
                    fontSize: '0.85rem',
                    color: 'var(--dark-blue-text)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Summary */}
            <div style={{ 
              background: 'var(--light-sand-bg)', 
              padding: '20px', 
              borderRadius: '8px', 
              marginBottom: '30px',
              borderLeft: '4px solid var(--primary-green)'
            }}>
              <p style={{ margin: 0, fontStyle: 'italic' }}>{article.summary}</p>
            </div>

            {/* Article Body */}
            <div className="article-content">
              {renderContent()}
            </div>

            {/* Key Metrics if available */}
            {article.keyMetrics && article.keyMetrics.length > 0 && (
              <div style={{ 
                background: '#fff', 
                border: '1px solid var(--light-sand-bg)', 
                padding: '25px', 
                borderRadius: '8px', 
                marginTop: '40px' 
              }}>
                <h3 style={{ marginBottom: '20px' }}>Key Metrics to Track</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  {article.keyMetrics.map((metric, index) => (
                    <div key={index} style={{ textAlign: 'center', padding: '15px' }}>
                      <div style={{ 
                        fontSize: '2rem', 
                        color: 'var(--primary-green)', 
                        marginBottom: '10px' 
                      }}>
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <p style={{ margin: 0, fontWeight: '600' }}>{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools if available */}
            {article.tools && article.tools.length > 0 && (
              <div style={{ 
                background: 'var(--accent-gold)', 
                padding: '25px', 
                borderRadius: '8px', 
                marginTop: '30px' 
              }}>
                <h3 style={{ marginBottom: '15px', color: 'var(--dark-blue-text)' }}>Recommended Tools</h3>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {article.tools.map((tool, index) => (
                    <li key={index} style={{ color: 'var(--dark-blue-text)', marginBottom: '8px' }}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Footer */}
            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <h3>Was this article helpful?</h3>
                  <div style={{ marginTop: '15px' }}>
                    <button className="btn btn-secondary" style={{ marginRight: '10px' }}>
                      <i className="fas fa-thumbs-up"></i> Yes
                    </button>
                    <button className="btn btn-secondary">
                      <i className="fas fa-thumbs-down"></i> No
                    </button>
                  </div>
                </div>
                <div>
                  <h4>Share this article</h4>
                  <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                    <button style={{ background: '#0077b5', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </button>
                    <button style={{ background: '#1da1f2', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                      <i className="fab fa-twitter"></i> Twitter
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div style={{ background: 'var(--light-sand-bg)', padding: '30px', borderRadius: '8px' }}>
                  <h3 style={{ marginBottom: '20px' }}>Related Articles</h3>
                  <div style={{ display: 'grid', gap: '15px' }}>
                    {relatedArticles.map((relatedArticle, index) => (
                      <Link 
                        key={index} 
                        to={`/knowledge-base/${relatedArticle.slug}`} 
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <i className="fas fa-arrow-right" style={{ marginRight: '10px', color: 'var(--primary-green)' }}></i>
                        {relatedArticle.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeArticle;