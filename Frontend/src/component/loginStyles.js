// Comprehensive styles for the login page with animations and modern design elements
const loginStyles = {
  // Main container with gradient background
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif'
  },

  // Floating circles background animation
  backgroundAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    animation: 'pulse 4s ease-in-out infinite',
    pointerEvents: 'none'
  },

  // Main card container
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '450px',
    position: 'relative',
    zIndex: 1,
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },

  // Card header with gradient
  header: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #2c5282 0%, #1a365d 100%)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },

  // Logo container with animation
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    animation: 'fadeInDown 0.6s ease-out'
  },

  // Title styles
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    animation: 'fadeInDown 0.6s ease-out 0.2s both'
  },

  // Subtitle styles
  subtitle: {
    fontSize: '1rem',
    opacity: 0.9,
    animation: 'fadeInDown 0.6s ease-out 0.3s both'
  },

  // Form container
  form: {
    padding: '2rem',
    animation: 'fadeIn 0.8s ease-out 0.4s both'
  },

  // Input group container
  inputGroup: {
    marginBottom: '1.5rem',
    animation: 'slideInRight 0.6s ease-out'
  },

  // Input label
  label: {
    display: 'block',
    color: '#2d3748',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginBottom: '0.5rem'
  },

  // Input container with icon
  inputContainer: {
    position: 'relative',
    transition: 'transform 0.2s ease',
    '&:focus-within': {
      transform: 'translateY(-2px)'
    }
  },

  // Input field
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    paddingLeft: '2.5rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    '&:focus': {
      borderColor: '#2c5282',
      boxShadow: '0 0 0 3px rgba(44,82,130,0.1)'
    },
    '&::placeholder': {
      color: '#a0aec0'
    }
  },

  // Input icon
  inputIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#4a5568',
    transition: 'color 0.3s ease'
  },

  // Submit button
  button: {
    width: '100%',
    padding: '0.875rem',
    backgroundColor: '#2c5282',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#1a365d',
      transform: 'translateY(-2px)'
    },
    '&:active': {
      transform: 'translateY(0)'
    }
  },

  // Forgot password link
  forgotPassword: {
    display: 'block',
    textAlign: 'right',
    color: '#2c5282',
    fontSize: '0.875rem',
    textDecoration: 'none',
    marginTop: '1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#1a365d'
    }
  },

  // Divider section
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    color: '#718096',
    fontSize: '0.875rem'
  },

  // Divider line
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#e2e8f0'
  },

  // Divider text
  dividerText: {
    padding: '0 1rem'
  },

  // Social login buttons container
  socialLogin: {
    display: 'flex',
    gap: '1rem',
    animation: 'slideInUp 0.6s ease-out'
  },

  // Social login button
  socialButton: {
    flex: 1,
    padding: '0.75rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#2d3748',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#f7fafc',
      transform: 'translateY(-2px)'
    }
  },

  // Footer section
  footer: {
    padding: '1.5rem 2rem',
    backgroundColor: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    textAlign: 'center'
  },

  // Footer text
  footerText: {
    color: '#4a5568',
    fontSize: '0.875rem'
  },

  // Footer link
  footerLink: {
    color: '#2c5282',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#1a365d'
    }
  },

  // Error message
  error: {
    color: '#e53e3e',
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    animation: 'shake 0.5s ease-in-out'
  },

  // Info box for demo credentials
  infoBox: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '12px',
    color: 'white',
    maxWidth: '300px',
    animation: 'fadeInUp 0.5s ease-out',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  },

  // Info box title
  infoTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem'
  },

  // Info box text
  infoText: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    opacity: 0.9
  },

  // Keyframe animations
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  },

  '@keyframes fadeInDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },

  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },

  '@keyframes slideInRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  },

  '@keyframes slideInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },

  '@keyframes shake': {
    '0%, 100%': {
      transform: 'translateX(0)'
    },
    '10%, 30%, 50%, 70%, 90%': {
      transform: 'translateX(-5px)'
    },
    '20%, 40%, 60%, 80%': {
      transform: 'translateX(5px)'
    }
  },

  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.1
    },
    '50%': {
      transform: 'scale(1.1)',
      opacity: 0.2
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.1
    }
  }
};

export default loginStyles;