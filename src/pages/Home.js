import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Empowering the Future of HR in Saudi Arabia</h1>
            <h2>تمكين مستقبل الموارد البشرية في المملكة العربية السعودية</h2>
            <p>Your Essential Platform for Data-Driven, Vision 2030-Aligned HR Knowledge, Peer Community, and Career Acceleration.</p>
            <p lang="ar" dir="rtl">منصتكم الأساسية للمعرفة المتخصصة في الموارد البشرية، والمجتمع التفاعلي، والتطور الوظيفي، بما يتماشى مع رؤية 2030.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Join the Community</a>
              <Link to="/knowledge-base" className="btn btn-secondary">Explore Knowledge Hub</Link>
              <a href="#" className="btn btn-primary">Post a Job</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose HRInsights KSA?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-book"></i></div>
              <h3>Curated Knowledge Hub</h3>
              <p>Access an extensive library of expert-curated, bilingual resources covering every facet of HR, from recruitment and compliance to advanced people analytics.</p>
              <Link to="/knowledge-base" className="btn btn-secondary btn-sm">Browse Topics</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-comments"></i></div>
              <h3>Peer Community Forum</h3>
              <p>Engage with fellow HR professionals in KSA. Ask questions, share policy templates, solve complex challenges, and stay ahead of emerging trends.</p>
              <Link to="/discussions" className="btn btn-secondary btn-sm">Join the Discussion</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-rocket"></i></div>
              <h3>Career Development & Growth</h3>
              <p>Advance your career with specialized certifications, targeted short courses, and access to a premium job board featuring top HR roles in the Kingdom.</p>
              <a href="#" className="btn btn-secondary btn-sm">View Programs</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Data & Analytics Tools</h3>
              <p>Leverage our suite of localized tools, including ROI calculators, benefits modelers, and compliance dashboards designed for the Saudi market.</p>
              <Link to="/hr-tools" className="btn btn-secondary btn-sm">Explore Tools</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="trending">
        <div className="container">
          <h2 className="section-title">Trending in HR</h2>
          <div className="topic-grid">
            <div className="topic-card">
              <div className="topic-content">
                <h3>Vision 2030 & HR Transformation</h3>
                <p>Learn how Saudi Arabia's Vision 2030 is reshaping HR practices and creating new opportunities for professionals.</p>
                <a href="#" className="btn btn-sm">Learn More</a>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-content">
                <h3>Saudization Best Practices</h3>
                <p>Discover proven strategies for effective Saudization implementation while maintaining organizational excellence.</p>
                <a href="#" className="btn btn-sm">Learn More</a>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-content">
                <h3>Digital HR Transformation</h3>
                <p>Explore how digital tools and AI are revolutionizing HR practices in the Kingdom's leading organizations.</p>
                <a href="#" className="btn btn-sm">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with HR Insights</h2>
            <p>Get the latest HR trends, regulatory updates, and exclusive content delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;