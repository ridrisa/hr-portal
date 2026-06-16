import React, { useState } from 'react';

const OpenChat = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = [
    { id: 'general', name: 'general', unread: 12, description: 'General HR discussions' },
    { id: 'recruitment', name: 'recruitment', unread: 0, description: 'Talent acquisition topics' },
    { id: 'compliance', name: 'compliance', unread: 3, description: 'Labor law & regulations' },
    { id: 'hr-tech', name: 'hr-tech', unread: 0, description: 'HR technology discussions' },
    { id: 'saudization', name: 'saudization', unread: 0, description: 'Saudization programs' },
    { id: 'career-advice', name: 'career-advice', unread: 5, description: 'Career development' }
  ];

  const messages = [
    {
      id: 1,
      author: 'Sarah Ahmed',
      avatar: 'SA',
      role: 'HR Manager',
      time: '10:23 AM',
      content: 'Good morning everyone! Has anyone dealt with the new GOSI regulations that came out last week? We\'re trying to understand the implications for our benefits structure.',
      reactions: [
        { emoji: '👍', count: 3 },
        { emoji: '❤️', count: 2 }
      ]
    },
    {
      id: 2,
      author: 'Mohammed Ali',
      avatar: 'MA',
      role: 'Compliance Lead',
      time: '10:45 AM',
      content: '@Sarah Ahmed Yes! We had a meeting with our legal team yesterday. The main changes affect contribution calculations for employees above 65. I can share our summary if you\'d like.',
      isReply: true
    },
    {
      id: 3,
      author: 'Fatima Hassan',
      avatar: 'FH',
      role: 'HR Director',
      time: '11:15 AM',
      content: 'Quick question: Does anyone have experience with AI-powered screening tools for high-volume recruitment? We\'re evaluating options for our tech hiring.',
      poll: {
        question: 'Which AI screening tools have you used?',
        options: ['HireVue', 'Pymetrics', 'Harver', 'Other'],
        votes: [12, 5, 3, 8]
      }
    },
    {
      id: 4,
      author: 'Khalid Rahman',
      avatar: 'KR',
      role: 'Recruiter',
      time: '11:30 AM',
      content: 'We recently implemented an automated onboarding workflow using Power Automate. Happy to share the template if anyone is interested!'
    }
  ];

  const onlineUsers = [
    { name: 'Ahmed Al-Rashidi', status: 'online', role: 'HR Manager' },
    { name: 'Sarah Ahmed', status: 'online', role: 'Talent Lead' },
    { name: 'Mohammed Ali', status: 'away', role: 'Compliance' },
    { name: 'Noura Khalid', status: 'online', role: 'HRBP' },
    { name: 'Khalid Hassan', status: 'away', role: 'Analyst' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <section style={{ minHeight: '100vh', background: 'var(--light-sand-bg)', paddingTop: '20px' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 280px', gap: '20px', height: 'calc(100vh - 60px)' }}>

          {/* Channels Sidebar - Dark */}
          <div className="chat-sidebar-dark">
            <div style={{ padding: '20px 0 10px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', fontSize: '1.1rem', padding: '0 10px' }}>
                Channels
                <button style={{
                  background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  width: '28px',
                  height: '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-plus" style={{ fontSize: '0.8rem' }}></i>
                </button>
              </h3>
            </div>

            <div style={{ overflowY: 'auto', maxHeight: 'calc(50vh - 100px)' }}>
              {channels.map(channel => (
                <div
                  key={channel.id}
                  className={`channel-item-modern ${activeChannel === channel.id ? 'active' : ''}`}
                  onClick={() => setActiveChannel(channel.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fas fa-hashtag" style={{ fontSize: '0.9rem' }}></i>
                    <span style={{ fontWeight: activeChannel === channel.id ? '600' : '400' }}>{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span style={{
                      background: 'linear-gradient(135deg, var(--accent-gold), #E5C048)',
                      color: 'var(--dark-blue-text)',
                      borderRadius: '12px',
                      padding: '2px 8px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {channel.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ padding: '20px 10px 10px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '10px' }}>
              <h4 style={{ margin: '0 0 10px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Direct Messages
              </h4>
              {[
                { name: 'Sarah Ahmed', status: 'online' },
                { name: 'Mohammed Ali', status: 'away' },
                { name: 'Fatima Hassan', status: 'offline' }
              ].map((user, idx) => (
                <div key={idx} style={{
                  padding: '10px 12px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s'
                }}>
                  <div className={`status-indicator status-${user.status}`}></div>
                  <span style={{ fontSize: '0.95rem' }}>{user.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Main Area */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            {/* Chat Header */}
            <div style={{
              padding: '20px 25px',
              borderBottom: '1px solid #f0f0f0',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)'
            }}>
              <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', color: 'var(--dark-blue-text)', fontSize: '1.3rem' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <i className="fas fa-hashtag" style={{ color: 'white', fontSize: '0.9rem' }}></i>
                </div>
                {activeChannel}
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  color: 'var(--neutral-gray)',
                  marginLeft: '15px'
                }}>
                  {channels.find(c => c.id === activeChannel)?.description}
                </span>
              </h2>
            </div>

            {/* Messages Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '25px' }}>
              {messages.map(msg => (
                <div key={msg.id} className="chat-message-modern" style={{ marginBottom: '25px', marginLeft: msg.isReply ? '60px' : '0' }}>
                  <div className="avatar-modern" style={{
                    width: '45px',
                    height: '45px',
                    background: msg.isReply
                      ? 'linear-gradient(135deg, var(--accent-gold), #E5C048)'
                      : 'linear-gradient(135deg, var(--primary-green), var(--primary-green-light))',
                    flexShrink: 0
                  }}>
                    {msg.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <strong style={{ color: 'var(--dark-blue-text)', fontSize: '1rem' }}>{msg.author}</strong>
                      <span style={{
                        background: 'linear-gradient(135deg, rgba(0,106,78,0.1), rgba(0,143,101,0.1))',
                        color: 'var(--primary-green)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>{msg.role}</span>
                      <span style={{ color: 'var(--neutral-gray)', fontSize: '0.85rem' }}>{msg.time}</span>
                    </div>
                    <p style={{ margin: 0, color: 'var(--dark-blue-text)', lineHeight: '1.7', fontSize: '0.95rem' }}>{msg.content}</p>

                    {msg.poll && (
                      <div style={{
                        marginTop: '15px',
                        background: 'linear-gradient(135deg, var(--light-sand-bg), #F0EDE8)',
                        padding: '20px',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--primary-green)'
                      }}>
                        <p style={{ margin: '0 0 15px', fontWeight: '600', color: 'var(--dark-blue-text)' }}>
                          <i className="fas fa-poll" style={{ marginRight: '8px', color: 'var(--accent-gold)' }}></i>
                          {msg.poll.question}
                        </p>
                        <div style={{ display: 'grid', gap: '10px' }}>
                          {msg.poll.options.map((option, idx) => {
                            const totalVotes = msg.poll.votes.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((msg.poll.votes[idx] / totalVotes) * 100);
                            return (
                              <div key={idx} style={{
                                position: 'relative',
                                background: 'white',
                                borderRadius: '10px',
                                overflow: 'hidden'
                              }}>
                                <div style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: 0,
                                  bottom: 0,
                                  width: `${percentage}%`,
                                  background: idx === 0 ? 'linear-gradient(90deg, var(--primary-green), var(--primary-green-light))'
                    : 'linear-gradient(90deg, #e0e0e0, #f0f0f0)',
                                  opacity: 0.2
                                }}></div>
                                <label style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  padding: '12px 15px',
                                  cursor: 'pointer',
                                  position: 'relative'
                                }}>
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <input type="radio" name={`poll-${msg.id}`} style={{ accentColor: 'var(--primary-green)' }} />
                                    <span style={{ color: 'var(--dark-blue-text)' }}>{option}</span>
                                  </span>
                                  <span style={{ color: 'var(--neutral-gray)', fontSize: '0.85rem' }}>{percentage}%</span>
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {msg.reactions && (
                      <div style={{ marginTop: '12px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <button style={{
                          background: 'transparent',
                          border: '1px solid #e0e0e0',
                          color: 'var(--neutral-gray)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          padding: '5px 12px',
                          borderRadius: '20px',
                          transition: 'all 0.2s'
                        }}>
                          <i className="fas fa-reply" style={{ marginRight: '5px' }}></i> Reply
                        </button>
                        {msg.reactions.map((reaction, idx) => (
                          <button key={idx} style={{
                            background: 'linear-gradient(135deg, rgba(0,106,78,0.05), rgba(0,143,101,0.1))',
                            border: '1px solid rgba(0,106,78,0.2)',
                            color: 'var(--dark-blue-text)',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            padding: '5px 12px',
                            borderRadius: '20px',
                            transition: 'all 0.2s'
                          }}>
                            {reaction.emoji} {reaction.count}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div style={{
              padding: '20px 25px',
              borderTop: '1px solid #f0f0f0',
              background: '#FFFFFF'
            }}>
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button type="button" style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neutral-gray)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  padding: '8px',
                  transition: 'color 0.2s'
                }}>
                  <i className="fas fa-paperclip"></i>
                </button>
                <input
                  type="text"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    border: '2px solid #e8e8e8',
                    borderRadius: '25px',
                    fontSize: '0.95rem',
                    transition: 'border-color 0.2s'
                  }}
                />
                <button type="button" style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--neutral-gray)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  padding: '8px'
                }}>
                  <i className="fas fa-smile"></i>
                </button>
                <button type="submit" className="btn-modern-primary" style={{ padding: '12px 24px' }}>
                  <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i> Send
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            padding: '20px',
            overflowY: 'auto'
          }}>
            {/* Online Users */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--dark-blue-text)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                <div className="status-indicator status-online" style={{ marginRight: '5px' }}></div>
                Online Now ({onlineUsers.filter(u => u.status === 'online').length})
              </h3>
              {onlineUsers.map((user, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px',
                  borderRadius: '10px',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}>
                  <div className={`status-indicator status-${user.status}`}></div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: '500', color: 'var(--dark-blue-text)', fontSize: '0.95rem' }}>{user.name}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--neutral-gray)' }}>{user.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pinned Resources */}
            <div>
              <h4 style={{ marginBottom: '15px', color: 'var(--dark-blue-text)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-thumbtack" style={{ color: 'var(--accent-gold)' }}></i> Pinned Resources
              </h4>
              <div className="pinned-resource">
                <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--dark-blue-text)' }}>
                  <i className="fas fa-file-pdf" style={{ color: '#f44336', marginRight: '8px' }}></i>
                  MHRSD Guidelines 2025
                </p>
              </div>
              <div className="pinned-resource">
                <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--dark-blue-text)' }}>
                  <i className="fas fa-calculator" style={{ color: 'var(--primary-green)', marginRight: '8px' }}></i>
                  Saudization Calculator
                </p>
              </div>
              <div className="pinned-resource">
                <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem', color: 'var(--dark-blue-text)' }}>
                  <i className="fas fa-question-circle" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i>
                  Community FAQ
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ marginBottom: '15px', color: 'var(--dark-blue-text)', fontSize: '1rem' }}>Quick Actions</h4>
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, var(--light-sand-bg), #F0EDE8)',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                color: 'var(--dark-blue-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '10px',
                transition: 'all 0.2s'
              }}>
                <i className="fas fa-plus"></i> Create Poll
              </button>
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, var(--light-sand-bg), #F0EDE8)',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                color: 'var(--dark-blue-text)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-share"></i> Share Resource
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenChat;
