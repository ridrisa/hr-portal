import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section - Modern Dark Gradient */}
      <section className="modern-hero">
        <div className="container">
          <div className="modern-hero-content">
            <h1>Empowering the Future of HR in Saudi Arabia</h1>
            <h2>تمكين مستقبل الموارد البشرية في المملكة العربية السعودية</h2>
            <p>Your Essential Platform for Data-Driven, Vision 2030-Aligned HR Knowledge, Peer Community, and Career Acceleration.</p>
            <p lang="ar" dir="rtl" style={{ opacity: 0.85 }}>منصتكم الأساسية للمعرفة المتخصصة في الموارد البشرية، والمجتمع التفاعلي، والتطور الوظيفي، بما يتماشى مع رؤية 2030.</p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
              <button className="btn-modern-primary">Join the Community</button>
              <Link to="/knowledge-base" className="btn-modern-gold">Explore Knowledge Hub</Link>
              <button className="btn-modern-primary">Post a Job</button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator"></div>
      </section>

      {/* Stats Section */}
      <section className="section-gradient" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '-120px', position: 'relative', zIndex: 10 }}>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-users"></i>
              <h3>15,000+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>HR Professionals</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-book-open"></i>
              <h3>500+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Knowledge Articles</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-comments"></i>
              <h3>10,000+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Discussions</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-briefcase"></i>
              <h3>200+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>HR Jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 0 100px', background: 'var(--light-sand-bg)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '60px' }}>Why Choose HRInsights KSA?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <i className="fas fa-book"></i>
              </div>
              <h3 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>Curated Knowledge Hub</h3>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '25px', lineHeight: '1.7' }}>Access an extensive library of expert-curated, bilingual resources covering every facet of HR, from recruitment and compliance to advanced people analytics.</p>
              <Link to="/knowledge-base" className="btn-modern-gold" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Browse Topics</Link>
            </div>
            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <i className="fas fa-comments"></i>
              </div>
              <h3 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>Peer Community Forum</h3>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '25px', lineHeight: '1.7' }}>Engage with fellow HR professionals in KSA. Ask questions, share policy templates, solve complex challenges, and stay ahead of emerging trends.</p>
              <Link to="/discussions" className="btn-modern-gold" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Join the Discussion</Link>
            </div>
            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>Career Development & Growth</h3>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '25px', lineHeight: '1.7' }}>Advance your career with specialized certifications, targeted short courses, and access to a premium job board featuring top HR roles in the Kingdom.</p>
              <button className="btn-modern-gold" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>View Programs</button>
            </div>
            <div className="feature-card-modern">
              <div className="feature-icon-modern">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>Data & Analytics Tools</h3>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '25px', lineHeight: '1.7' }}>Leverage our suite of localized tools, including ROI calculators, benefits modelers, and compliance dashboards designed for the Saudi market.</p>
              <Link to="/hr-tools" className="btn-modern-gold" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Explore Tools</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '60px' }}>Trending in HR</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div className="category-card-modern">
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-eye" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                  </div>
                  <h3 style={{ margin: 0, color: 'var(--dark-blue-text)' }}>Vision 2030 & HR Transformation</h3>
                </div>
                <p style={{ color: 'var(--neutral-gray)', lineHeight: '1.7', marginBottom: '20px' }}>Learn how Saudi Arabia's Vision 2030 is reshaping HR practices and creating new opportunities for professionals.</p>
                <button className="btn-modern-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Learn More</button>
              </div>
            </div>
            <div className="category-card-modern">
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--accent-gold), #E5C048)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-users" style={{ color: 'var(--dark-blue-text)', fontSize: '1.2rem' }}></i>
                  </div>
                  <h3 style={{ margin: 0, color: 'var(--dark-blue-text)' }}>Saudization Best Practices</h3>
                </div>
                <p style={{ color: 'var(--neutral-gray)', lineHeight: '1.7', marginBottom: '20px' }}>Discover proven strategies for effective Saudization implementation while maintaining organizational excellence.</p>
                <button className="btn-modern-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Learn More</button>
              </div>
            </div>
            <div className="category-card-modern">
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--dark-blue-text), #1a3a5c)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <i className="fas fa-laptop" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                  </div>
                  <h3 style={{ margin: 0, color: 'var(--dark-blue-text)' }}>Digital HR Transformation</h3>
                </div>
                <p style={{ color: 'var(--neutral-gray)', lineHeight: '1.7', marginBottom: '20px' }}>Explore how digital tools and AI are revolutionizing HR practices in the Kingdom's leading organizations.</p>
                <button className="btn-modern-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="modern-hero" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px' }}>Stay Updated with HR Insights</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '40px' }}>Get the latest HR trends, regulatory updates, and exclusive content delivered to your inbox.</p>
            <form style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                style={{
                  flex: '1',
                  minWidth: '280px',
                  padding: '16px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <button type="submit" className="btn-modern-gold">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
