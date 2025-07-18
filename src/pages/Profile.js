import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: "Talent Acquisition", color: "#e8f5e9", textColor: "#388e3c" },
    { name: "Performance Management", color: "#e3f2fd", textColor: "#1976d2" },
    { name: "HRIS", color: "#fce4ec", textColor: "#c2185b" },
    { name: "Saudization", color: "#fff3e0", textColor: "#f57c00" },
    { name: "Employee Relations", color: "#f3e5f5", textColor: "#7b1fa2" }
  ];

  return (
    <section className="profile-section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="profile-header" style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div className="profile-avatar" style={{ width: '120px', height: '120px', background: 'var(--primary-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem' }}>
              <i className="fas fa-user"></i>
            </div>
            <div className="profile-info">
              <h1>Ahmed Al-Rashidi</h1>
              <p style={{ color: '#666', fontSize: '1.1rem', margin: '10px 0' }}>Senior HR Manager</p>
              <p style={{ color: '#888' }}>Member since: January 2024</p>
              <div style={{ marginTop: '15px' }}>
                <span style={{ background: 'var(--primary-green)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', marginRight: '10px' }}>
                  <i className="fas fa-certificate"></i> Certified HR Professional
                </span>
                <span style={{ background: 'var(--accent-gold)', color: 'var(--dark-blue-text)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem' }}>
                  <i className="fas fa-star"></i> Top Contributor
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          {/* Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-card" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Profile Stats</h3>
              <div style={{ display: 'grid', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><i className="fas fa-comments" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i>Posts</span>
                  <strong>124</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><i className="fas fa-heart" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i>Likes Received</span>
                  <strong>532</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><i className="fas fa-bookmark" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i>Bookmarks</span>
                  <strong>48</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span><i className="fas fa-users" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i>Followers</span>
                  <strong>289</strong>
                </div>
              </div>
            </div>

            <div className="profile-card" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '20px' }}>Skills & Expertise</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag" style={{ background: skill.color, color: skill.textColor, padding: '5px 12px', borderRadius: '15px', fontSize: '0.9rem' }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="profile-main">
            {/* Tabs */}
            <div className="profile-tabs" style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '30px', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px' }}>
                <button 
                  className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                  onClick={() => setActiveTab('about')}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: activeTab === 'about' ? 'var(--primary-green)' : '#666', 
                    cursor: 'pointer', 
                    paddingBottom: '15px', 
                    borderBottom: activeTab === 'about' ? '3px solid var(--primary-green)' : 'none' 
                  }}
                >
                  <i className="fas fa-info-circle"></i> About
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('posts')}
                  style={{ background: 'none', border: 'none', fontSize: '1rem', color: '#666', cursor: 'pointer' }}
                >
                  <i className="fas fa-file-alt"></i> Recent Posts
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('certifications')}
                  style={{ background: 'none', border: 'none', fontSize: '1rem', color: '#666', cursor: 'pointer' }}
                >
                  <i className="fas fa-certificate"></i> Certifications
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('settings')}
                  style={{ background: 'none', border: 'none', fontSize: '1rem', color: '#666', cursor: 'pointer' }}
                >
                  <i className="fas fa-cog"></i> Settings
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <div className="tab-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '20px' }}>About Me</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                  Experienced HR professional with over 12 years in the field, specializing in talent management and organizational development within the Saudi Arabian market. Passionate about leveraging technology to enhance HR practices and committed to supporting Vision 2030 objectives through strategic workforce planning.
                </p>
                
                <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Experience</h4>
                <div style={{ borderLeft: '3px solid var(--primary-green)', paddingLeft: '20px', marginBottom: '20px' }}>
                  <h5 style={{ marginBottom: '5px' }}>Senior HR Manager</h5>
                  <p style={{ color: '#666', marginBottom: '5px' }}>ABC Corporation • Riyadh, Saudi Arabia</p>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>2019 - Present</p>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Leading HR transformation initiatives aligned with Vision 2030</li>
                    <li>Managing Saudization programs with 95% success rate</li>
                    <li>Implementing AI-powered recruitment systems</li>
                  </ul>
                </div>
                
                <div style={{ borderLeft: '3px solid var(--primary-green)', paddingLeft: '20px' }}>
                  <h5 style={{ marginBottom: '5px' }}>HR Business Partner</h5>
                  <p style={{ color: '#666', marginBottom: '5px' }}>XYZ Industries • Jeddah, Saudi Arabia</p>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>2015 - 2019</p>
                  <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                    <li>Partnered with business units to develop HR strategies</li>
                    <li>Conducted workforce planning and analytics</li>
                    <li>Managed employee relations and conflict resolution</li>
                  </ul>
                </div>

                <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Education</h4>
                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ marginBottom: '5px' }}>Master of Business Administration (MBA)</h5>
                  <p style={{ color: '#666' }}>King Saud University • 2015</p>
                </div>
                <div>
                  <h5 style={{ marginBottom: '5px' }}>Bachelor of Human Resources Management</h5>
                  <p style={{ color: '#666' }}>Imam Muhammad ibn Saud Islamic University • 2011</p>
                </div>
              </div>
            )}

            {activeTab === 'posts' && (
              <div className="tab-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '20px' }}>Recent Posts</h3>
                <p>Posts content coming soon...</p>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="tab-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '20px' }}>Certifications</h3>
                <p>Certifications content coming soon...</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="tab-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '20px' }}>Settings</h3>
                <p>Settings content coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;