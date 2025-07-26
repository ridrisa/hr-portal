import React from 'react';
import { Link } from 'react-router-dom';

const Discussions = () => {
  const discussionCategories = [
    {
      title: "Labor Law & Compliance",
      icon: "fas fa-gavel",
      topics: [
        { title: "Latest MHRSD Regulations", posts: 234 },
        { title: "Saudization Requirements Q&A", posts: 189 },
        { title: "Work Permit Processes", posts: 156 },
        { title: "End of Service Benefits", posts: 142 }
      ]
    },
    {
      title: "Recruitment & Hiring",
      icon: "fas fa-briefcase",
      topics: [
        { title: "Best Recruitment Agencies in KSA", posts: 312 },
        { title: "Interview Best Practices", posts: 278 },
        { title: "Salary Benchmarking Discussion", posts: 265 },
        { title: "Remote Hiring Challenges", posts: 198 }
      ]
    },
    {
      title: "HR Technology",
      icon: "fas fa-chart-line",
      topics: [
        { title: "HRMS Implementation Stories", posts: 167 },
        { title: "Digital Transformation in HR", posts: 145 },
        { title: "AI in Recruitment", posts: 123 },
        { title: "Best HR Software for SMEs", posts: 109 }
      ]
    },
    {
      title: "Learning & Development",
      icon: "fas fa-graduation-cap",
      topics: [
        { title: "Leadership Development Programs", posts: 234 },
        { title: "Training ROI Measurement", posts: 189 },
        { title: "E-Learning Platforms Review", posts: 156 },
        { title: "Skills Gap Analysis", posts: 142 }
      ]
    }
  ];

  const recentDiscussions = [
    {
      title: "How to implement effective performance reviews in a multicultural team?",
      author: "Sarah Ahmed",
      replies: 23,
      time: "2 hours ago",
      tag: "Performance Management",
      tagColor: "#e3f2fd",
      tagTextColor: "#1976d2"
    },
    {
      title: "New MHRSD guidelines for remote work - What's your experience?",
      author: "Mohammed Al-Rashid",
      replies: 45,
      time: "5 hours ago",
      tag: "Compliance",
      tagColor: "#fce4ec",
      tagTextColor: "#c2185b"
    },
    {
      title: "Best practices for Saudization in tech companies",
      author: "Fatima Al-Zahrani",
      replies: 67,
      time: "1 day ago",
      tag: "Saudization",
      tagColor: "#e8f5e9",
      tagTextColor: "#388e3c"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="kb-hero">
        <div className="container">
          <h1>Community Discussions</h1>
          <p>Connect, collaborate, and share insights with HR professionals across Saudi Arabia</p>
          <p lang="ar" dir="rtl">تواصل وتعاون وشارك الأفكار مع محترفي الموارد البشرية في جميع أنحاء المملكة</p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="community">
        <div className="container">
          <div className="community-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
            <div className="stat-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-users" style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '10px' }}></i>
              <h3>5,000+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-comment-alt" style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '10px' }}></i>
              <h3>10,000+</h3>
              <p>Discussions</p>
            </div>
            <div className="stat-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-lightbulb" style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '10px' }}></i>
              <h3>25,000+</h3>
              <p>Solutions Shared</p>
            </div>
            <div className="stat-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-award" style={{ fontSize: '2.5rem', color: 'var(--primary-green)', marginBottom: '10px' }}></i>
              <h3>500+</h3>
              <p>Expert Contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Categories */}
      <section className="discussions-section">
        <div className="container">
          <h2 className="section-title">Popular Discussion Topics</h2>
          <div className="knowledge-categories">
            {discussionCategories.map((category, index) => (
              <div key={index} className="category-card">
                <h3><i className={category.icon}></i> {category.title}</h3>
                <ul>
                  {category.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>
                      <a href="#">{topic.title}</a> 
                      <span style={{ color: '#888', fontSize: '0.9em' }}> ({topic.posts} posts)</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="trending">
        <div className="container">
          <h2 className="section-title">Recent Discussions</h2>
          <div className="discussion-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {recentDiscussions.map((discussion, index) => (
              <div key={index} className="discussion-item" style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ marginBottom: '10px' }}>
                      <a href="#">{discussion.title}</a>
                    </h3>
                    <p style={{ color: '#666', marginBottom: '10px' }}>
                      Looking for advice on conducting fair and effective performance reviews in our diverse team...
                    </p>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '0.9em', color: '#888' }}>
                      <span><i className="fas fa-user"></i> {discussion.author}</span>
                      <span><i className="fas fa-comments"></i> {discussion.replies} replies</span>
                      <span><i className="fas fa-clock"></i> {discussion.time}</span>
                      <span style={{ 
                        background: discussion.tagColor, 
                        color: discussion.tagTextColor, 
                        padding: '2px 8px', 
                        borderRadius: '12px' 
                      }}>
                        {discussion.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-container">
            <a href="#" className="btn btn-primary">View All Discussions</a>
            <a href="#" className="btn btn-secondary">Start New Discussion</a>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="community light-bg">
        <div className="container">
          <h2 className="section-title">Community Guidelines</h2>
          <div className="community-content">
            <div className="community-info">
              <p>Our community thrives on respectful, professional dialogue. Please follow these guidelines to maintain a positive environment:</p>
              <ul className="community-benefits">
                <li><i className="fas fa-check"></i> Be respectful and professional in all interactions</li>
                <li><i className="fas fa-check"></i> Share knowledge and experiences generously</li>
                <li><i className="fas fa-check"></i> Verify information before sharing, especially regarding regulations</li>
                <li><i className="fas fa-check"></i> Protect confidential information - avoid sharing sensitive company data</li>
                <li><i className="fas fa-check"></i> Use appropriate tags to help others find relevant discussions</li>
                <li><i className="fas fa-check"></i> Report any inappropriate content to moderators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discussions;