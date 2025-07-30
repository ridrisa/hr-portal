import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section style={{ padding: '100px 0', textAlign: 'center' }}>
    <div className="container">
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Page Not Found</h1>
      <p style={{ marginBottom: '30px' }}>
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
    </div>
  </section>
);

export default NotFound;
