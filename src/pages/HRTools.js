import React, { useState } from 'react';

const HRTools = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);

  const tools = [
    {
      title: "Saudization Calculator",
      icon: "fas fa-calculator",
      description: "Calculate your organization's Saudization percentage and track progress towards Nitaqat requirements.",
      features: ["Real-time calculation", "Nitaqat band prediction", "Sector-specific thresholds", "Export reports"]
    },
    {
      title: "Salary Benchmarking Tool",
      icon: "fas fa-chart-bar",
      description: "Compare salaries across industries and positions in the Saudi market with up-to-date data.",
      features: ["Industry comparisons", "Position-based analysis", "Regional variations", "Percentile rankings"]
    },
    {
      title: "Leave Balance Tracker",
      icon: "fas fa-calendar-alt",
      description: "Track and manage employee leave balances in compliance with Saudi labor law requirements.",
      features: ["Annual leave tracking", "Sick leave management", "Public holiday calendar", "Automated calculations"]
    },
    {
      title: "End of Service Calculator",
      icon: "fas fa-hand-holding-usd",
      description: "Calculate end of service benefits according to Saudi labor law for your employees.",
      features: ["Article 84 & 85 compliance", "Resignation vs termination", "Years of service factor", "Instant calculations"]
    },
    {
      title: "HR Metrics Dashboard",
      icon: "fas fa-tachometer-alt",
      description: "Track key HR metrics and KPIs with interactive dashboards and visualizations.",
      features: ["Turnover analysis", "Recruitment metrics", "Performance indicators", "Custom reports"]
    },
    {
      title: "Compliance Checklist",
      icon: "fas fa-clipboard-check",
      description: "Ensure your HR practices comply with Saudi labor law and MHRSD requirements.",
      features: ["Regular updates", "Document templates", "Audit preparation", "Risk assessment"]
    }
  ];

  const handleToolClick = (index) => {
    setActiveCalculator(activeCalculator === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="kb-hero">
        <div className="container">
          <h1>HR Tools & Calculators</h1>
          <p>Powerful tools designed specifically for HR professionals in Saudi Arabia</p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section">
        <div className="container">
          <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {tools.map((tool, index) => (
              <div key={index} className="tool-card" style={{
                background: '#fff',
                borderRadius: '8px',
                padding: '30px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => handleToolClick(index)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--primary-green)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px'
                  }}>
                    <i className={tool.icon} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                  <h3 style={{ margin: 0 }}>{tool.title}</h3>
                </div>
                <p style={{ color: '#666', marginBottom: '20px' }}>{tool.description}</p>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>Key Features:</h4>
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ color: '#666', marginBottom: '5px' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Launch Tool <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Demo Section */}
      {activeCalculator === 0 && (
        <section className="calculator-section light-bg">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h2 style={{ marginBottom: '30px' }}>Saudization Calculator</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Total Employees</label>
                    <input type="number" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="Enter total number" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Saudi Employees</label>
                    <input type="number" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="Enter Saudi employees" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Industry Sector</label>
                    <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <option>Select sector...</option>
                      <option>Technology</option>
                      <option>Healthcare</option>
                      <option>Construction</option>
                      <option>Retail</option>
                      <option>Manufacturing</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Company Size</label>
                    <select style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      <option>Select size...</option>
                      <option>Small (10-49)</option>
                      <option>Medium (50-499)</option>
                      <option>Large (500+)</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Calculate Saudization</button>
              </form>
              
              <div style={{ marginTop: '40px', padding: '30px', background: 'var(--light-sand-bg)', borderRadius: '8px' }}>
                <h3 style={{ marginBottom: '20px' }}>Results</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <p style={{ margin: 0, color: '#666' }}>Current Saudization</p>
                    <h2 style={{ margin: '5px 0', color: 'var(--primary-green)' }}>0%</h2>
                  </div>
                  <div>
                    <p style={{ margin: 0, color: '#666' }}>Nitaqat Band</p>
                    <h2 style={{ margin: '5px 0', color: 'var(--accent-gold)' }}>-</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <h2 className="section-title">Additional Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div className="resource-card" style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-download" style={{ fontSize: '2rem', color: 'var(--primary-green)', marginBottom: '15px' }}></i>
              <h4>HR Templates</h4>
              <p style={{ color: '#666', marginBottom: '15px' }}>Download ready-to-use HR templates and forms.</p>
              <a href="#" className="btn btn-secondary btn-sm">Browse Templates</a>
            </div>
            <div className="resource-card" style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-book-open" style={{ fontSize: '2rem', color: 'var(--primary-green)', marginBottom: '15px' }}></i>
              <h4>User Guides</h4>
              <p style={{ color: '#666', marginBottom: '15px' }}>Learn how to use our tools effectively.</p>
              <a href="#" className="btn btn-secondary btn-sm">View Guides</a>
            </div>
            <div className="resource-card" style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <i className="fas fa-headset" style={{ fontSize: '2rem', color: 'var(--primary-green)', marginBottom: '15px' }}></i>
              <h4>Support</h4>
              <p style={{ color: '#666', marginBottom: '15px' }}>Get help from our HR experts.</p>
              <a href="#" className="btn btn-secondary btn-sm">Contact Support</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HRTools;