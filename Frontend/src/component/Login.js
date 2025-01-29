import React, { useState } from 'react';
import { Moon, Mail, Lock, LogIn } from 'lucide-react';
import styles from './loginStyles';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Demo credentials for testing
  const DEMO_EMAIL = 'demo@sleepanalysis.com';
  const DEMO_PASSWORD = 'demo123';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simple demo authentication
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // Store auth state
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email, name: 'Demo User' }));

        // Call the onLogin callback
        onLogin();
      } else {
        throw new Error('Invalid credentials. Try using the demo account.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Animated background */}
      <div style={styles.backgroundAnimation} />

      {/* Login card */}
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logoContainer}>
            <Moon size={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Sleep Analysis</span>
          </div>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to access your sleep dashboard</p>
        </div>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputContainer}>
              <Mail size={20} style={styles.inputIcon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputContainer}>
              <Lock size={20} style={styles.inputIcon} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={styles.input}
                required
              />
            </div>
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button
            type="submit"
            style={{
              ...styles.button,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'wait' : 'pointer'
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              'Signing in...'
            ) : (
              <>
                <LogIn size={20} />
                Sign In
              </>
            )}
          </button>

          <a href="#" style={styles.forgotPassword}>
            Forgot your password?
          </a>

        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Don't have an account?{' '}
            <a href="#" style={styles.footerLink}>
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Info box */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>Demo Account</h3>
        <p style={styles.infoText}>
          Use these credentials to test the application:
          <br />
          Email: {DEMO_EMAIL}
          <br />
          Password: {DEMO_PASSWORD}
        </p>
      </div>
    </div>
  );
};

export default Login;