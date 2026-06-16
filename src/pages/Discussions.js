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
      avatar: "SA",
      replies: 23,
      views: 145,
      time: "2 hours ago",
      tag: "Performance Management",
      tagColor: "#e3f2fd",
      tagTextColor: "#1976d2",
      hot: true
    },
    {
      title: "New MHRSD guidelines for remote work - What's your experience?",
      author: "Mohammed Al-Rashid",
      avatar: "MA",
      replies: 45,
      views: 312,
      time: "5 hours ago",
      tag: "Compliance",
      tagColor: "#fce4ec",
      tagTextColor: "#c2185b",
      hot: true
    },
    {
      title: "Best practices for Saudization in tech companies",
      author: "Fatima Al-Zahrani",
      avatar: "FZ",
      replies: 67,
      views: 421,
      time: "1 day ago",
      tag: "Saudization",
      tagColor: "#e8f5e9",
      tagTextColor: "#388e3c",
      hot: false
    }
  ];

  const topContributors = [
    { name: "Ahmed Al-Rashidi", points: 2450, avatar: "AA", rank: 1 },
    { name: "Sarah Ahmed", points: 2320, avatar: "SA", rank: 2 },
    { name: "Fatima Hassan", points: 1950, avatar: "FH", rank: 3 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="modern-hero" style={{ paddingBottom: '50px' }}>
        <div className="container">
          <div className="modern-hero-content">
            <h1 style={{ fontSize: '3rem' }}>Community Discussions</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
              Connect, collaborate, and share insights with HR professionals across Saudi Arabia
            </p>
            <p lang="ar" dir="rtl" style={{ opacity: 0.7, marginTop: '15px' }}>
              تواصل وتعاون وشارك الأفكار مع محترفي الموارد البشرية في جميع أنحاء المملكة
            </p>
            <div style={{ marginTop: '35px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-modern-primary">
                <i className="fas fa-plus" style={{ marginRight: '8px' }}></i> Start Discussion
              </button>
              <Link to="/open-chat" className="btn-modern-gold">
                <i className="fas fa-comments" style={{ marginRight: '8px' }}></i> Open Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section style={{ marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-users"></i>
              <h3>5,000+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Active Members</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-comment-alt"></i>
              <h3>10,000+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Discussions</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-lightbulb"></i>
              <h3>25,000+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Solutions Shared</p>
            </div>
            <div className="stat-card-modern glass-card">
              <i className="fas fa-award"></i>
              <h3>500+</h3>
              <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Expert Contributors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ padding: '80px 0 100px', background: 'var(--light-sand-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px' }}>
            {/* Left - Discussion Categories & Recent */}
            <div>
              {/* Discussion Categories */}
              <h2 style={{ marginBottom: '30px', color: 'var(--dark-blue-text)' }}>Popular Discussion Topics</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                {discussionCategories.map((category, index) => (
                  <div key={index} className="category-card-modern" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{
                      background: index % 2 === 0
                        ? 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))'
                        : 'linear-gradient(135deg, var(--accent-gold), #E5C048)',
                      padding: '20px',
                      color: index % 2 === 0 ? 'white' : 'var(--dark-blue-text)'
                    }}>
                      <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px', color: 'inherit', fontSize: '1.1rem' }}>
                        <i className={category.icon}></i> {category.title}
                      </h3>
                    </div>
                    <div style={{ padding: '18px' }}>
                      {category.topics.map((topic, idx) => (
                        <div key={idx} style={{
                          padding: '10px 0',
                          borderBottom: idx < category.topics.length - 1 ? '1px solid #f0f0f0' : 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <a href="#" style={{ color: 'var(--dark-blue-text)', fontSize: '0.95rem', flex: 1 }}>{topic.title}</a>
                          <span className="badge-modern badge-success" style={{ fontSize: '0.75rem', marginLeft: '10px' }}>{topic.posts}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Discussions */}
              <h2 style={{ marginBottom: '30px', color: 'var(--dark-blue-text)' }}>Recent Discussions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {recentDiscussions.map((discussion, index) => (
                  <div key={index} className="discussion-card-modern">
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div className="avatar-modern" style={{
                        background: index === 0 ? 'linear-gradient(135deg, #006A4E, #008f65)'
                          : index === 1 ? 'linear-gradient(135deg, #D4AF37, #E5C048)'
                          : 'linear-gradient(135deg, #0A2342, #1a3a5c)'
                      }}>
                        {discussion.avatar}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--dark-blue-text)' }}>
                            {discussion.hot && <i className="fas fa-fire" style={{ color: '#f44336', marginRight: '8px' }}></i>}
                            }
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{discussion.title}</a>
                          </h3>
                        </div>
                        <p style={{ color: 'var(--neutral-gray)', margin: '0 0 15px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                          Looking for advice on conducting fair and effective performance reviews...
                        </p>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
                          <span style={{ color: 'var(--neutral-gray)' }}><i className="fas fa-user" style={{ marginRight: '6px', color: 'var(--primary-green)' }}></i> {discussion.author}</span>
                          <span style={{ color: 'var(--neutral-gray)' }}><i className="fas fa-comment" style={{ marginRight: '6px', color: 'var(--accent-gold)' }}></i> {discussion.replies} replies</span>
                          <span style={{ color: 'var(--neutral-gray)' }}><i className="fas fa-eye" style={{ marginRight: '6px', color: 'var(--primary-green)' }}></i> {discussion.views} views</span>
                          <span style={{ color: 'var(--neutral-gray)' }}><i className="fas fa-clock" style={{ marginRight: '6px' }}></i> {discussion.time}</span>
                          <span style={{
                            background: discussion.tagColor,
                            color: discussion.tagTextColor,
                            padding: '4px 12px',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                          }}>
                            {discussion.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button className="btn-modern-primary">View All Discussions</button>
                <button className="btn-modern-gold">Start New Discussion</button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Top Contributors */}
              <div className="profile-card-modern" style={{ marginBottom: '25px' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-trophy" style={{ color: 'var(--accent-gold)' }}></i> Top Contributors
                </h3>
                {topContributors.map((user, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '12px 0',
                    borderBottom: idx < 2 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: user.rank === 1 ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                        : user.rank === 2 ? 'linear-gradient(135deg, #C0C0C0, #A9A9A9)'
                        : 'linear-gradient(135deg, #CD7F32, #8B4513)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '0.85rem'
                    }}>
                      {user.rank}
                    </div>
                    <div className="avatar-modern" style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}>{user.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--dark-blue-text)' }}>{user.name}</p>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--neutral-gray)' }}>{user.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hot Topics */}
              <div className="profile-card-modern" style={{ marginBottom: '25px' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-fire" style={{ color: '#f44336' }}></i> Hot Topics
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Saudization', 'GOSI', 'Remote Work', 'Visa 2025', 'Nitaqat'].map((tag, idx) => (
                    <span key={idx} className="skill-tag-modern" style={{
                      background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
                      color: '#e65100',
                      cursor: 'pointer'
                    }}>
                      <i className="fas fa-fire" style={{ marginRight: '5px', fontSize: '0.75rem' }}></i> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Community Guidelines */}
              <div className="profile-card-modern" style={{ background: 'linear-gradient(145deg, #0A2342 0%, #061428 100%)', color: 'white' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-clipboard-list"></i> Community Guidelines
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Be respectful and professional',
                    'Share knowledge generously',
                    'Verify information before sharing',
                    'Protect confidential data',
                    'Use appropriate tags'
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.8)' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-green)' }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discussions;
