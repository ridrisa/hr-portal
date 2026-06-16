import React, { useState } from 'react';

const HRTools = () => {
  const [activeCalculator, setActiveCalculator] = useState(null);
  const [calculatorValues, setCalculatorValues] = useState({
    totalEmployees: '',
    saudiEmployees: '',
    sector: '',
    companySize: ''
  });
  const [calculatorResult, setCalculatorResult] = useState(null);

  const tools = [
    {
      title: "Saudization Calculator",
      icon: "fas fa-calculator",
      description: "Calculate your organization's Saudization percentage and track progress towards Nitaqat requirements.",
      features: ["Real-time calculation", "Nitaqat band prediction", "Sector-specific thresholds", "Export reports"],
      popular: true,
      gradient: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))'
    },
    {
      title: "Salary Benchmarking Tool",
      icon: "fas fa-chart-bar",
      description: "Compare salaries across industries and positions in the Saudi market with up-to-date data.",
      features: ["Industry comparisons", "Position-based analysis", "Regional variations", "Percentile rankings"],
      popular: false,
      gradient: 'linear-gradient(135deg, var(--accent-gold), #E5C048)'
    },
    {
      title: "Leave Balance Tracker",
      icon: "fas fa-calendar-alt",
      description: "Track and manage employee leave balances in compliance with Saudi labor law requirements.",
      features: ["Annual leave tracking", "Sick leave management", "Public holiday calendar", "Automated calculations"],
      popular: false,
      gradient: 'linear-gradient(135deg, #0A2342, #1a3a5c)'
    },
    {
      title: "End of Service Calculator",
      icon: "fas fa-hand-holding-usd",
      description: "Calculate end of service benefits according to Saudi labor law for your employees.",
      features: ["Article 84 & 85 compliance", "Resignation vs termination", "Years of service factor", "Instant calculations"],
      popular: true,
      gradient: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))'
    },
    {
      title: "HR Metrics Dashboard",
      icon: "fas fa-tachometer-alt",
      description: "Track key HR metrics and KPIs with interactive dashboards and visualizations.",
      features: ["Turnover analysis", "Recruitment metrics", "Performance indicators", "Custom reports"],
      popular: false,
      gradient: 'linear-gradient(135deg, var(--accent-gold), #E5C048)'
    },
    {
      title: "Compliance Checklist",
      icon: "fas fa-clipboard-check",
      description: "Ensure your HR practices comply with Saudi labor law and MHRSD requirements.",
      features: ["Regular updates", "Document templates", "Audit preparation", "Risk assessment"],
      popular: false,
      gradient: 'linear-gradient(135deg, #0A2342, #1a3a5c)'
    }
  ];

  const handleInputChange = (field, value) => {
    setCalculatorValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSaudization = () => {
    const total = parseInt(calculatorValues.totalEmployees) || 0;
    const saudi = parseInt(calculatorValues.saudiEmployees) || 0;

    if (total === 0) return;

    const percentage = Math.round((saudi / total) * 100);
    let band = 'Red';
    let nextBand = 'Green';

    if (percentage >= 55) { band = 'Platinum'; nextBand = 'Excellence'; }
    else if (percentage >= 50) { band = 'Gold'; nextBand = 'Platinum'; }
    else if (percentage >= 44) { band = 'Silver'; nextBand = 'Gold'; }
    else if (percentage >= 38) { band = 'Green'; nextBand = 'Silver'; }
    else if (percentage >= 28) { band = 'Yellow'; nextBand = 'Green'; }
    else { band = 'Red'; nextBand = 'Yellow'; }

    setCalculatorResult({
      percentage,
      band,
      nextBand,
      saudiNeeded: Math.ceil(total * 0.28) - saudi
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="modern-hero" style={{ paddingBottom: '50px' }}>
        <div className="container">
          <div className="modern-hero-content">
            <h1 style={{ fontSize: '3rem' }}>HR Tools & Calculators</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Powerful tools designed specifically for HR professionals in Saudi Arabia
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ padding: '80px 0', background: 'var(--light-sand-bg)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '50px' }}>Available Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {tools.map((tool, index) => (
              <div
                key={index}
                className="tool-card-modern"
                onClick={() => setActiveCalculator(activeCalculator === index ? null : index)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                {tool.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, var(--accent-gold), #E5C048)',
                    color: 'var(--dark-blue-text)',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <i className="fas fa-star"></i> Popular
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                  <div className="tool-icon-modern" style={{ background: tool.gradient }}>
                    <i className={tool.icon}></i>
                  </div>
                  <h3 style={{ margin: 0, color: 'var(--dark-blue-text)', fontSize: '1.3rem' }}>{tool.title}</h3>
                </div>

                <p style={{ color: 'var(--neutral-gray)', marginBottom: '25px', lineHeight: '1.7' }}>{tool.description}</p>

                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '12px', color: 'var(--dark-blue-text)', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tool.features.map((feature, idx) => (
                      <li key={idx} style={{
                        color: 'var(--neutral-gray)',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(0,106,78,0.1), rgba(0,143,101,0.15))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <i className="fas fa-check" style={{ color: 'var(--primary-green)', fontSize: '0.6rem' }}></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-modern-primary" style={{ width: '100%' }}>
                  Launch Tool <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Demo Section */}
      {activeCalculator === 0 && (
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="container">
            <div className="calculator-card-modern">
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '10px', color: 'var(--dark-blue-text)' }}>Saudization Calculator</h2>
                <p style={{ color: 'var(--neutral-gray)' }}>Calculate your Nitaqat classification and Saudization percentage</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '30px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-blue-text)' }}>
                    Total Employees
                  </label>
                  <input
                    type="number"
                    placeholder="Enter total number"
                    value={calculatorValues.totalEmployees}
                    onChange={(e) => handleInputChange('totalEmployees', e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-blue-text)' }}>
                    Saudi Employees
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Saudi employees"
                    value={calculatorValues.saudiEmployees}
                    onChange={(e) => handleInputChange('saudiEmployees', e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-blue-text)' }}>
                    Industry Sector
                  </label>
                  <select
                    value={calculatorValues.sector}
                    onChange={(e) => handleInputChange('sector', e.target.value)}
                  >
                    <option value="">Select sector...</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="construction">Construction</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--dark-blue-text)' }}>
                    Company Size
                  </label>
                  <select
                    value={calculatorValues.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                  >
                    <option value="">Select size...</option>
                    <option value="small">Small (10-49)</option>
                    <option value="medium">Medium (50-499)</option>
                    <option value="large">Large (500+)</option>
                  </select>
                </div>
              </div>

              <button className="btn-modern-primary" style={{ width: '100%', padding: '16px' }} onClick={calculateSaudization}>
                <i className="fas fa-calculator" style={{ marginRight: '10px' }}></i>
                Calculate Saudization
              </button>

              {calculatorResult && (
                <div className="result-card-modern" style={{ marginTop: '40px' }}>
                  <h3 style={{ marginBottom: '25px', color: 'var(--dark-blue-text)' }}>Results</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ textAlign: 'center', padding: '25px', background: 'white', borderRadius: '12px' }}>
                      <p style={{ margin: 0, color: 'var(--neutral-gray)', fontSize: '0.9rem', marginBottom: '10px' }}>Saudization Rate</p>
                      <h2 style={{ margin: 0, background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem' }}>
                        {calculatorResult.percentage}%
                      </h2>
                    </div>
                    <div style={{ textAlign: 'center', padding: '25px', background: 'white', borderRadius: '12px' }}>
                      <p style={{ margin: 0, color: 'var(--neutral-gray)', fontSize: '0.9rem', marginBottom: '10px' }}>Nitaqat Band</p>
                      <h2 style={{
                        margin: 0,
                        color: calculatorResult.band === 'Platinum' ? '#9c27b0'
                          : calculatorResult.band === 'Gold' ? 'var(--accent-gold)'
                          : calculatorResult.band === 'Silver' ? '#78909c'
                          : calculatorResult.band === 'Green' ? 'var(--primary-green)'
                          : calculatorResult.band === 'Yellow' ? '#f9a825'
                          : '#f44336',
                        fontSize: '2rem'
                      }}>
                        {calculatorResult.band}
                      </h2>
                    </div>
                    <div style={{ textAlign: 'center', padding: '25px', background: 'white', borderRadius: '12px' }}>
                      <p style={{ margin: 0, color: 'var(--neutral-gray)', fontSize: '0.9rem', marginBottom: '10px' }}>Next Band</p>
                      <h2 style={{ margin: 0, color: 'var(--primary-green)', fontSize: '1.8rem' }}>{calculatorResult.nextBand}</h2>
                    </div>
                  </div>

                  {calculatorResult.saudiNeeded > 0 && (
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(244,67,54,0.1), rgba(244,67,54,0.05))',
                      padding: '20px',
                      borderRadius: '12px',
                      borderLeft: '4px solid #f44336'
                    }}>
                      <p style={{ margin: 0, color: 'var(--dark-blue-text)', fontWeight: '500' }}>
                        <i className="fas fa-exclamation-triangle" style={{ color: '#f44336', marginRight: '10px' }}></i>
                        You need {calculatorResult.saudiNeeded} more Saudi employees to reach the Yellow band threshold (28%).
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      <section style={{ padding: '100px 0', background: 'var(--light-sand-bg)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '50px' }}>Additional Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div className="resource-card-modern">
              <i className="fas fa-download"></i>
              <h4 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>HR Templates</h4>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '20px', lineHeight: '1.6' }}>Download ready-to-use HR templates and forms for your organization.</p>
              <button className="btn-modern-gold" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Browse Templates</button>
            </div>
            <div className="resource-card-modern">
              <i className="fas fa-book-open"></i>
              <h4 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>User Guides</h4>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '20px', lineHeight: '1.6' }}>Learn how to use our tools effectively with detailed guides.</p>
              <button className="btn-modern-gold" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>View Guides</button>
            </div>
            <div className="resource-card-modern">
              <i className="fas fa-headset"></i>
              <h4 style={{ color: 'var(--dark-blue-text)', marginBottom: '15px' }}>Support</h4>
              <p style={{ color: 'var(--neutral-gray)', marginBottom: '20px', lineHeight: '1.6' }}>Get help from our HR experts for any questions.</p>
              <button className="btn-modern-gold" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Contact Support</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HRTools;
