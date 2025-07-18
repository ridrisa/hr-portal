import React, { useState } from 'react';

const OpenChat = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = [
    { id: 'general', name: 'general', unread: 12 },
    { id: 'recruitment', name: 'recruitment', unread: 0 },
    { id: 'compliance', name: 'compliance', unread: 0 },
    { id: 'hr-tech', name: 'hr-tech', unread: 0 },
    { id: 'saudization', name: 'saudization', unread: 0 },
    { id: 'career-advice', name: 'career-advice', unread: 0 }
  ];

  const messages = [
    {
      id: 1,
      author: 'Sarah Ahmed',
      avatar: 'SA',
      avatarColor: 'var(--primary-green)',
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
      avatarColor: 'var(--accent-gold)',
      time: '10:45 AM',
      content: '@Sarah Ahmed Yes! We had a meeting with our legal team yesterday. The main changes affect contribution calculations for employees above 65. I can share our summary if you\'d like.',
      isReply: true
    },
    {
      id: 3,
      author: 'Fatima Hassan',
      avatar: 'FH',
      avatarColor: '#9c27b0',
      time: '11:15 AM',
      content: 'Quick question: Does anyone have experience with AI-powered screening tools for high-volume recruitment? We\'re evaluating options for our tech hiring.',
      poll: {
        question: 'Which AI screening tools have you used?',
        options: ['HireVue', 'Pymetrics', 'Harver', 'Other']
      }
    }
  ];

  const onlineUsers = [
    { name: 'Ahmed Al-Rashidi', status: 'online' },
    { name: 'Sarah Ahmed', status: 'online' },
    { name: 'Mohammed Ali', status: 'away' },
    { name: 'Noura Khalid', status: 'online' },
    { name: 'Khalid Hassan', status: 'away' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <section className="chat-section" style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--light-sand-bg)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr 300px', gap: '20px', height: 'calc(100vh - 100px)' }}>
          
          {/* Channels Sidebar */}
          <div className="channels-sidebar" style={{ background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              Channels
              <button style={{ background: 'var(--primary-green)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>
                <i className="fas fa-plus"></i>
              </button>
            </h3>
            <div className="channel-list">
              {channels.map(channel => (
                <div 
                  key={channel.id}
                  className={`channel-item ${activeChannel === channel.id ? 'active' : ''}`}
                  style={{ 
                    padding: '10px', 
                    marginBottom: '5px', 
                    background: activeChannel === channel.id ? 'var(--light-sand-bg)' : 'transparent',
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onClick={() => setActiveChannel(channel.id)}
                >
                  <div>
                    <i className="fas fa-hashtag" style={{ color: activeChannel === channel.id ? 'var(--primary-green)' : '#888', marginRight: '8px' }}></i>
                    <span>{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span style={{ background: 'var(--accent-gold)', color: 'white', borderRadius: '10px', padding: '2px 8px', fontSize: '0.8rem' }}>
                      {channel.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Direct Messages</h4>
            <div className="dm-list">
              <div className="dm-item" style={{ padding: '10px', marginBottom: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', background: '#4caf50', borderRadius: '50%', marginRight: '10px' }}></div>
                <span>Sarah Ahmed</span>
              </div>
              <div className="dm-item" style={{ padding: '10px', marginBottom: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', background: '#ff9800', borderRadius: '50%', marginRight: '10px' }}></div>
                <span>Mohammed Ali</span>
              </div>
              <div className="dm-item" style={{ padding: '10px', marginBottom: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', marginRight: '10px' }}></div>
                <span>Fatima Hassan</span>
              </div>
            </div>
          </div>

          {/* Chat Main Area */}
          <div className="chat-main" style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <div className="chat-header" style={{ padding: '20px', borderBottom: '1px solid #e0e0e0' }}>
              <h2 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-hashtag" style={{ color: 'var(--primary-green)', marginRight: '10px' }}></i>
                {activeChannel}
              </h2>
              <p style={{ color: '#666', margin: '5px 0 0 0' }}>General HR discussions and announcements</p>
            </div>

            {/* Messages Area */}
            <div className="messages-container" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {messages.map(msg => (
                <div key={msg.id} className="message" style={{ marginBottom: '20px', marginLeft: msg.isReply ? '55px' : '0', paddingLeft: msg.isReply ? '20px' : '0', borderLeft: msg.isReply ? '3px solid var(--light-sand-bg)' : 'none' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <div className="avatar" style={{ 
                      width: msg.isReply ? '35px' : '40px', 
                      height: msg.isReply ? '35px' : '40px', 
                      background: msg.avatarColor, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'white', 
                      flexShrink: 0,
                      fontSize: msg.isReply ? '0.9rem' : '1rem'
                    }}>
                      {msg.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '5px' }}>
                        <strong>{msg.author}</strong>
                        <span style={{ color: '#888', fontSize: '0.9rem' }}>{msg.time}</span>
                      </div>
                      <p style={{ margin: 0 }}>{msg.content}</p>
                      
                      {msg.poll && (
                        <div style={{ marginTop: '10px' }}>
                          <div style={{ background: 'var(--light-sand-bg)', padding: '15px', borderRadius: '5px', borderLeft: '3px solid var(--primary-green)' }}>
                            <p style={{ margin: 0, fontWeight: '600' }}>Poll: {msg.poll.question}</p>
                            <div style={{ marginTop: '10px' }}>
                              {msg.poll.options.map((option, index) => (
                                <label key={index} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }}>
                                  <input type="radio" name={`poll-${msg.id}`} style={{ marginRight: '8px' }} /> {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {msg.reactions && (
                        <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
                          <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem' }}>
                            <i className="fas fa-reply"></i> Reply
                          </button>
                          {msg.reactions.map((reaction, index) => (
                            <button key={index} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem' }}>
                              {reaction.emoji} {reaction.count}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="message-input" style={{ padding: '20px', borderTop: '1px solid #e0e0e0' }}>
              <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button type="button" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '1.2rem' }}>
                  <i className="fas fa-paperclip"></i>
                </button>
                <input 
                  type="text" 
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ flex: 1, padding: '10px', border: '1px solid #e0e0e0', borderRadius: '5px' }}
                />
                <button type="button" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '1.2rem' }}>
                  <i className="fas fa-smile"></i>
                </button>
                <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px' }}>
                  <i className="fas fa-paper-plane"></i> Send
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar - Online Users */}
          <div className="users-sidebar" style={{ background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflowY: 'auto' }}>
            <h3 style={{ marginBottom: '20px' }}>Online Now ({onlineUsers.length})</h3>
            <div className="user-list">
              {onlineUsers.map((user, index) => (
                <div key={index} className="user-item" style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
                  <div style={{ 
                    width: '10px', 
                    height: '10px', 
                    background: user.status === 'online' ? '#4caf50' : '#ff9800', 
                    borderRadius: '50%', 
                    marginRight: '10px' 
                  }}></div>
                  <span>{user.name}</span>
                </div>
              ))}
            </div>

            <h4 style={{ marginTop: '30px', marginBottom: '15px' }}>Pinned Resources</h4>
            <div style={{ background: 'var(--light-sand-bg)', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>
                <i className="fas fa-thumbtack" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i>
                MHRSD Guidelines 2025
              </p>
            </div>
            <div style={{ background: 'var(--light-sand-bg)', padding: '15px', borderRadius: '5px' }}>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.9rem' }}>
                <i className="fas fa-thumbtack" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i>
                Saudization Calculator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenChat;