import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: "Talent Acquisition", color: "linear-gradient(135deg, rgba(0,106,78,0.1), rgba(0,143,101,0.15))", textColor: "#006A4E" },
    { name: "Performance Management", color: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,192,72,0.2))", textColor: "#B8962E" },
    { name: "HRIS", color: "linear-gradient(135deg, rgba(10,35,66,0.1), rgba(26,58,92,0.15))", textColor: "#0A2342" },
    { name: "Saudization", color: "linear-gradient(135deg, rgba(0,106,78,0.1), rgba(0,143,101,0.15))", textColor: "#006A4E" },
    { name: "Employee Relations", color: "linear-gradient(135deg, rgba(156,39,176,0.1), rgba(186,104,200,0.15))", textColor: "#9c27b0" }
  ];

  const recentActivity = [
    { action: "Replied to discussion", topic: "Saudization Requirements Q&A", time: "2 hours ago", icon: "fas fa-reply", iconColor: "var(--primary-green)" },
    { action: "Started new thread", topic: "Best practices for remote onboarding", time: "1 day ago", icon: "fas fa-plus", iconColor: "var(--accent-gold)" },
    { action: "Liked article", topic: "Digital Transformation in HR", time: "2 days ago", icon: "fas fa-heart", iconColor: "#f44336" },
    { action: "Bookmarked resource", topic: "MHRSD Compliance Checklist", time: "3 days ago", icon: "fas fa-bookmark", iconColor: "#2196f3" }
  ];

  return (
    <section style={{ paddingTop: '20px', minHeight: 'calc(100vh - 80px)', background: 'var(--light-sand-bg)' }}>
      <div className="container" style={{ maxWidth: '1300px' }}>
        {/* Profile Header - Modern Dark */}
        <div className="profile-header-modern" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="profile-avatar-modern" style={{ margin: '0 auto 25px' }}>
            <i className="fas fa-user"></i>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{ color: 'white', marginBottom: '10px', fontSize: '2.5rem', fontWeight: '700' }}>Ahmed Al-Rashidi</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '15px' }}>Senior HR Manager</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '25px' }}>Member since: January 2024</p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="badge-modern" style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))', color: 'white', padding: '10px 20px' }}>
                <i className="fas fa-certificate" style={{ marginRight: '8px' }}></i> Certified HR Professional
              </span>
              <span className="badge-modern" style={{ background: 'linear-gradient(135deg, var(--accent-gold), #E5C048)', color: 'var(--dark-blue-text)', padding: '10px 20px' }}>
                <i className="fas fa-star" style={{ marginRight: '8px' }}></i> Top Contributor
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px' }}>
          {/* Left Sidebar */}
          <div>
            {/* Profile Stats */}
            <div className="profile-card-modern" style={{ marginBottom: '25px' }}>
              <h3 style={{ marginBottom: '25px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-chart-bar" style={{ color: 'var(--primary-green)' }}></i> Profile Stats
              </h3>
              <div style={{ display: 'grid', gap: '15px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 15px',
                  background: 'linear-gradient(135deg, rgba(0,106,78,0.05), rgba(0,143,101,0.08))',
                  borderRadius: '10px',
                  transition: 'all 0.2s'
                }}>
                  <span style={{ color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-comments" style={{ color: 'var(--primary-green)' }}></i>
                    Posts
                  </span>
                  <strong style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}>124</strong>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 15px',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(229,192,72,0.1))',
                  borderRadius: '10px'
                }}>
                  <span style={{ color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-heart" style={{ color: 'var(--accent-gold)' }}></i>
                    Likes Received
                  </span>
                  <strong style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}>532</strong>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 15px',
                  background: 'linear-gradient(135deg, rgba(0,106,78,0.05), rgba(0,143,101,0.08))',
                  borderRadius: '10px'
                }}>
                  <span style={{ color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-bookmark" style={{ color: 'var(--primary-green)' }}></i>
                    Bookmarks
                  </span>
                  <strong style={{ color: 'var(--primary-green)', fontSize: '1.1rem' }}>48</strong>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 15px',
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(229,192,72,0.1))',
                  borderRadius: '10px'
                }}>
                  <span style={{ color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-users" style={{ color: 'var(--accent-gold)' }}></i>
                    Followers
                  </span>
                  <strong style={{ color: 'var(--accent-gold)', fontSize: '1.1rem' }}>289</strong>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="profile-card-modern" style={{ marginBottom: '25px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-tools" style={{ color: 'var(--accent-gold)' }}></i> Skills & Expertise
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag-modern" style={{ background: skill.color, color: skill.textColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="profile-card-modern">
              <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-history" style={{ color: 'var(--primary-green)' }}></i> Recent Activity
              </h3>
              <div style={{ display: 'grid', gap: '15px' }}>
                {recentActivity.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '12px',
                    padding: '12px',
                    background: 'var(--light-sand-bg)',
                    borderRadius: '10px',
                    transition: 'transform 0.2s'
                  }}>
                    <div style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${item.iconColor}15, ${item.iconColor}25)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={item.icon} style={{ color: item.iconColor, fontSize: '0.9rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--neutral-gray)', marginBottom: '3px' }}>{item.action}</p>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--dark-blue-text)', fontWeight: '500' }}>{item.topic}</p>
                      <p style={{ margin: '5px 0 0', fontSize: '0.8rem', color: 'var(--neutral-gray)' }}>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {/* Tabs */}
            <div className="glass-card" style={{ marginBottom: '25px', padding: 0, overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                gap: '30px',
                padding: '0 30px',
                borderBottom: '2px solid #f0f0f0'
              }}>
                {[
                  { id: 'about', label: 'About', icon: 'fas fa-info-circle' },
                  { id: 'posts', label: 'Recent Posts', icon: 'fas fa-file-alt' },
                  { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
                  { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    className={`tab-btn-modern ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      position: 'relative',
                      padding: '20px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderBottom: activeTab === tab.id ? '3px solid var(--primary-green)' : 'none',
                      marginBottom: '-2px'
                    }}
                  >
                    <i className={tab.icon}></i>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <div className="profile-card-modern">
                <h3 style={{ marginBottom: '25px', color: 'var(--dark-blue-text)' }}>About Me</h3>
                <p style={{ lineHeight: '1.9', marginBottom: '30px', color: 'var(--neutral-gray)', fontSize: '1.05rem' }}>
                  Experienced HR professional with over 12 years in the field, specializing in talent management and organizational development within the Saudi Arabian market. Passionate about leveraging technology to enhance HR practices and committed to supporting Vision 2030 objectives through strategic workforce planning.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-briefcase" style={{ color: 'var(--primary-green)' }}></i> Experience
                </h4>

                <div style={{
                  borderLeft: '3px solid var(--primary-green)',
                  paddingLeft: '25px',
                  marginBottom: '25px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-9px',
                    top: '0',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                    border: '3px solid white'
                  }}></div>
                  <h5 style={{ marginBottom: '5px', color: 'var(--dark-blue-text)', fontSize: '1.1rem' }}>Senior HR Manager</h5>
                  <p style={{ color: 'var(--neutral-gray)', marginBottom: '5px' }}>ABC Corporation • Riyadh, Saudi Arabia</p>
                  <p style={{ color: 'var(--primary-green)', fontSize: '0.9rem', marginBottom: '15px' }}>2019 - Present</p>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--neutral-gray)' }}>
                    <li style={{ marginBottom: '8px' }}>Leading HR transformation initiatives aligned with Vision 2030</li>
                    <li style={{ marginBottom: '8px' }}>Managing Saudization programs with 95% success rate</li>
                    <li>Implementing AI-powered recruitment systems</li>
                  </ul>
                </div>

                <div style={{
                  borderLeft: '3px solid var(--accent-gold)',
                  paddingLeft: '25px',
                  marginBottom: '35px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-9px',
                    top: '0',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-gold), #E5C048)',
                    border: '3px solid white'
                  }}></div>
                  <h5 style={{ marginBottom: '5px', color: 'var(--dark-blue-text)', fontSize: '1.1rem' }}>HR Business Partner</h5>
                  <p style={{ color: 'var(--neutral-gray)', marginBottom: '5px' }}>XYZ Industries • Jeddah, Saudi Arabia</p>
                  <p style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '15px' }}>2015 - 2019</p>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', color: 'var(--neutral-gray)' }}>
                    <li style={{ marginBottom: '8px' }}>Partnered with business units to develop HR strategies</li>
                    <li style={{ marginBottom: '8px' }}>Conducted workforce planning and analytics</li>
                    <li>Managed employee relations and conflict resolution</li>
                  </ul>
                </div>

                <h4 style={{ marginTop: '35px', marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-graduation-cap" style={{ color: 'var(--primary-green)' }}></i> Education
                </h4>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '20px'
                }}>
                  <div className="pinned-resource">
                    <h5 style={{ marginBottom: '5px', color: 'var(--dark-blue-text)' }}>Master of Business Administration (MBA)</h5>
                    <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>King Saud University • 2015</p>
                  </div>
                  <div className="pinned-resource">
                    <h5 style={{ marginBottom: '5px', color: 'var(--dark-blue-text)' }}>Bachelor of Human Resources Management</h5>
                    <p style={{ color: 'var(--neutral-gray)', margin: 0 }}>Imam Muhammad ibn Saud Islamic University • 2011</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="profile-card-modern" style={{ textAlign: 'center', padding: '60px' }}>
                <i className="fas fa-file-alt" style={{ fontSize: '3rem', color: 'var(--neutral-gray)', marginBottom: '20px' }}></i>
                <h3>Posts Coming Soon</h3>
                <p style={{ color: 'var(--neutral-gray)' }}>Your recent posts will appear here...</p>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="profile-card-modern" style={{ textAlign: 'center', padding: '60px' }}>
                <i className="fas fa-certificate" style={{ fontSize: '3rem', color: 'var(--accent-gold)', marginBottom: '20px' }}></i>
                <h3>Certifications Coming Soon</h3>
                <p style={{ color: 'var(--neutral-gray)' }}>Your certifications will appear here...</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="profile-card-modern" style={{ textAlign: 'center', padding: '60px' }}>
                <i className="fas fa-cog" style={{ fontSize: '3rem', color: 'var(--primary-green)', marginBottom: '20px' }}></i>
                <h3>Settings Coming Soon</h3>
                <p style={{ color: 'var(--neutral-gray)' }}>Account settings will appear here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
