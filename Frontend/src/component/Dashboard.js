import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Moon, Sun, Coffee, Clock, UserCheck, X, Menu, Download, FileText, ChevronDown, Star, Users, Brain, Heart, Award } from 'lucide-react';
import UserRecords from './UserRecords';

// Custom CSS styles
const styles = {
  dashboardContainer: {
    minHeight: '100vh',
    backgroundColor: '#f5f6fa',
    fontFamily: 'Arial, sans-serif'
  },
  navbar: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    color: 'white',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500'
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  iconContainer: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartContainer: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    marginBottom: '1.5rem'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontWeight: '500',
    color: '#2c3e50'
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '1rem'
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#2c3e50'
  },
  submitButton: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2c3e50',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '500',
    marginTop: '1rem'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem'
  },
  th: {
    padding: '1rem',
    textAlign: 'left',
    borderBottom: '2px solid #e2e8f0',
    color: '#2c3e50',
    fontWeight: '600'
  },
  td: {
    padding: '1rem',
    borderBottom: '1px solid #e2e8f0'
  }
  , enhancedNav: {
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
    color: 'white',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navWrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s ease',
    cursor: 'pointer'
  },
  // Hero section styles
  hero: {
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
    color: 'white',
    padding: '8rem 2rem 6rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  // Feature section styles
  featureSection: {
    padding: '6rem 2rem',
    background: 'white'
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  featureCard: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  // Statistics section styles
  statsSection: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%)'
  },
  // Hypothesis section styles
  hypothesisSection: {
    padding: '6rem 2rem',
    background: 'white'
  },
  hypothesisCard: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  },
  // Testimonial section styles
  testimonialSection: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%)'
  },
  testimonialCard: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '0 auto'
  },
  // Call to action styles
  ctaSection: {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
    color: 'white',
    textAlign: 'center'
  },
  // Enhanced footer styles
  enhancedFooter: {
    backgroundColor: '#1a202c',
    color: 'white',
    padding: '4rem 2rem 2rem'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  footerLink: {
    color: '#a0aec0',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  },
  footerBottom: {
    borderTop: '1px solid #2d3748',
    marginTop: '3rem',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#a0aec0'
  }
};

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    sleepDuration: '',
    caffeine: '',
    exercise: '',
    smoking: ''
  });
  const [statistics, setStatistics] = useState({
    sleepStages: [
      { name: 'Light Sleep', value: 24.56 },
      { name: 'Deep Sleep', value: 52.82 },
      { name: 'REM Sleep', value: 22.62 }
    ],
    correlations: {
      sleepEfficiency: -0.8192,
      caffeine: -0.0151,
      exercise: -0.1894,
      smoking: 0.2244
    },
    averages: {
      sleepEfficiency: 0.788916,
      sleepDuration: 7.465708,
      caffeineIntake: 23.653396
    }
  });


  // Function to calculate sleep efficiency
  const calculateSleepEfficiency = (formData) => {
    const sleepDuration = parseFloat(formData.sleepDuration);
    const caffeine = parseFloat(formData.caffeine);
    const exercise = parseFloat(formData.exercise);

    // Simple weighted calculation based on our model coefficients
    let efficiency = (sleepDuration / 24) * 0.4 +
      (1 - caffeine / 200) * 0.3 +
      (exercise / 7) * 0.3;

    return Math.min(Math.max(efficiency, 0), 1); // Ensure between 0 and 1
  };

  // Function to predict light sleep percentage
  const predictLightSleep = (formData) => {
    const efficiency = calculateSleepEfficiency(formData);
    const age = parseInt(formData.age);
    const isSmoking = formData.smoking === 'Yes';

    // Using our model coefficients to predict light sleep
    let predicted = 24.56; // baseline mean
    predicted += efficiency * -15.313665; // efficiency impact
    predicted += (age - 40.285398) * -0.0319; // age impact
    predicted += isSmoking ? 0.2244 * 15.313665 : 0; // smoking impact

    return Math.min(Math.max(predicted, 7), 63); // Constrain to observed range
  };

  // Helper function to calculate correlation coefficient
  const calculateCorrelationCoefficient = (x, y) => {
    const n = x.length;
    const sum1 = x.reduce((a, b) => a + b) * y.reduce((a, b) => a + b);
    const sum2 = x.reduce((a, b) => a + b * b) * y.reduce((a, b) => a + b * b);
    const sum3 = x.map((n, i) => n * y[i]).reduce((a, b) => a + b);
    return (n * sum3 - sum1) / Math.sqrt((n * sum2 - sum1 * sum1));
  };

  const calculateCorrelations = (data) => {
    const efficiencies = data.map(entry => calculateSleepEfficiency(entry));
    const lightSleep = data.map(entry => predictLightSleep(entry));
    const caffeine = data.map(entry => parseFloat(entry.caffeine));
    const exercise = data.map(entry => parseFloat(entry.exercise));

    return {
      sleepEfficiency: calculateCorrelationCoefficient(efficiencies, lightSleep),
      caffeine: calculateCorrelationCoefficient(caffeine, lightSleep),
      exercise: calculateCorrelationCoefficient(exercise, lightSleep),
      smoking: statistics.correlations.smoking // Maintained from research
    };
  };

  // Function to update statistics
  const updateStatistics = (newEntry) => {
    const allData = [...userData, newEntry];

    // First, calculate all the individual sleep predictions
    const predictedLightSleepValues = allData.map(entry => predictLightSleep(entry));

    // Now we can calculate sleep stages with the predicted values
    const newSleepStages = [
      {
        name: 'Light Sleep',
        value: predictedLightSleepValues.reduce((acc, curr) => acc + curr, 0) / allData.length
      },
      {
        name: 'Deep Sleep',
        // Calculate deep sleep as remaining percentage after light and REM, with minimum threshold
        value: Math.max(100 - (predictedLightSleepValues.reduce((acc, curr) => acc + curr, 0) / allData.length) - 22.62, 18)
      },
      { name: 'REM Sleep', value: 22.62 } // Constant based on research
    ];

    // Calculate new averages
    const newAverages = {
      sleepEfficiency: allData.reduce((acc, curr) => acc + calculateSleepEfficiency(curr), 0) / allData.length,
      sleepDuration: allData.reduce((acc, curr) => acc + parseFloat(curr.sleepDuration), 0) / allData.length,
      caffeineIntake: allData.reduce((acc, curr) => acc + parseFloat(curr.caffeine), 0) / allData.length
    };

    // Calculate new correlations
    const newCorrelations = calculateCorrelations(allData);

    // Update state with all new calculations
    setStatistics({
      sleepStages: newSleepStages,
      correlations: newCorrelations,
      averages: newAverages
    });
  };

  // Sample data from your Python analysis
  const sampleData = {
    sleepEfficiency: 0.788916,
    sleepDuration: 7.465708,
    totalParticipants: 452,
    caffeineIntake: 23.653396,

    sleepStagesData: [
      { name: 'Light Sleep', value: 24.561947 },
      { name: 'Deep Sleep', value: 52.823009 },
      { name: 'REM Sleep', value: 22.615044 }
    ],

    ageGroupData: [
      { age: '18-24', avgEfficiency: 82, count: 89 },
      { age: '25-34', avgEfficiency: 84, count: 156 },
      { age: '35-44', avgEfficiency: 81, count: 98 },
      { age: '45-54', avgEfficiency: 79, count: 67 },
      { age: '55+', avgEfficiency: 77, count: 42 }
    ]
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Features', href: '#features' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Hypotheses', href: '#hypotheses' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  // Features data
  const features = [
    {
      icon: <Brain size={24} />,
      title: 'Sleep Stage Analysis',
      description: 'Advanced analysis of sleep stages including REM, deep sleep, and light sleep patterns.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Health Correlations',
      description: 'Understanding the relationship between sleep quality and various health metrics.'
    },
    {
      icon: <Award size={24} />,
      title: 'Lifestyle Impact',
      description: 'Comprehensive analysis of how lifestyle choices affect sleep quality.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Sleep Researcher',
      text: 'This dashboard provides invaluable insights into sleep patterns and their correlation with lifestyle factors.'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Neuroscientist',
      text: 'The comprehensive analysis of sleep stages has helped advance our understanding of sleep quality indicators.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add timestamp to the data
    const newEntry = {
      ...formData,
      timestamp: new Date().toISOString(),
      predictedEfficiency: calculateSleepEfficiency(formData),
      predictedLightSleep: predictLightSleep(formData)
    };
    setUserData([...userData, newEntry]);
    updateStatistics(newEntry);
    setShowForm(false);
    setFormData({
      age: '',
      gender: '',
      sleepDuration: '',
      caffeine: '',
      exercise: '',
      smoking: ''
    });





    // Create and download CSV file
    const csvContent = convertToCSV([...userData, newEntry]);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'sleep_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (data) => {
    const headers = ['timestamp', 'age', 'gender', 'sleepDuration', 'caffeine', 'exercise', 'smoking'];
    const rows = data.map(entry =>
      headers.map(header => entry[header]).join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={styles.dashboardContainer}>
      {/* Navbar */}
      <nav style={styles.enhancedNav}>
        <div style={styles.navWrapper}>
          <div style={styles.logo}>
            <Moon size={24} />
            <span>Sleep Analysis</span>
          </div>
          <div style={styles.navLinks}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={styles.navLink}
                onMouseEnter={(e) => {
                  e.target.style.borderBottomColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderBottomColor = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
            <button
              style={styles.button}
              onClick={() => setShowForm(true)}
            >
              Add Data
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            Unlock the Secrets of Better Sleep
          </h1>
          <p style={{
            fontSize: '1.25rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Discover how your sleep patterns affect your daily performance through advanced data analysis and scientific research.
          </p>
          <button style={{
            ...styles.button,
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            Explore Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.featureSection}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#2d3748'
          }}>
            Key Features
          </h2>
          <div style={styles.featureGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  backgroundColor: '#ebf8ff',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: '#3182ce'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#2d3748'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4a5568' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#ebf5ff' }}>
              <Activity size={24} color="#0088FE" />
            </div>
            <div>
              <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>Sleep Efficiency</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                {(sampleData.sleepEfficiency * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#e6fffa' }}>
              <Clock size={24} color="#00C49F" />
            </div>
            <div>
              <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>Sleep Duration</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                {sampleData.sleepDuration.toFixed(1)}h
              </p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#fff5f5' }}>
              <UserCheck size={24} color="#FF8042" />
            </div>
            <div>
              <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>Total Participants</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                {sampleData.totalParticipants}
              </p>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={{ ...styles.iconContainer, backgroundColor: '#fff8e6' }}>
              <Coffee size={24} color="#FFBB28" />
            </div>
            <div>
              <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>Avg. Caffeine</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                {sampleData.caffeineIntake.toFixed(1)}mg
              </p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
          <div style={styles.chartContainer}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#2c3e50' }}>Sleep Stages Distribution</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={sampleData.sleepStagesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {sampleData.sleepStagesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={styles.chartContainer}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#2c3e50' }}>Sleep Efficiency by Age Group</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer>
                <BarChart data={sampleData.ageGroupData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgEfficiency" fill="#8884d8" name="Sleep Efficiency (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* User Data Table */}
        {userData.length > 0 && (
          <div style={styles.chartContainer}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: '#2c3e50' }}>User Submitted Data</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Age</th>
                    <th style={styles.th}>Gender</th>
                    <th style={styles.th}>Sleep Duration</th>
                    <th style={styles.th}>Caffeine</th>
                    <th style={styles.th}>Exercise</th>
                    <th style={styles.th}>Smoking</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((entry, index) => (
                    <tr key={index}>
                      <td style={styles.td}>{new Date(entry.timestamp).toLocaleDateString()}</td>
                      <td style={styles.td}>{entry.age}</td>
                      <td style={styles.td}>{entry.gender}</td>
                      <td style={styles.td}>{entry.sleepDuration}h</td>
                      <td style={styles.td}>{entry.caffeine}mg</td>
                      <td style={styles.td}>{entry.exercise}</td>
                      <td style={styles.td}>{entry.smoking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Form Modal */}
      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setShowForm(false)}
            >
              <X size={24} />
            </button>
            <h2 style={{ margin: '0 0 1.5rem 0', color: '#2c3e50' }}>Add Sleep Data</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Age</label>
                <input
                  style={styles.input}
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  min="0"
                  max="120"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Gender</label>
                <select
                  style={styles.input}
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Sleep Duration (hours)</label>
                <input
                  style={styles.input}
                  type="number"
                  step="0.1"
                  name="sleepDuration"
                  value={formData.sleepDuration}
                  onChange={handleInputChange}
                  placeholder="Enter sleep duration"
                  min="0"
                  max="24"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Caffeine Intake (mg)</label>
                <input
                  style={styles.input}
                  type="number"
                  name="caffeine"
                  value={formData.caffeine}
                  onChange={handleInputChange}
                  placeholder="Enter caffeine intake"
                  min="0"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Exercise Frequency (times per week)</label>
                <input
                  style={styles.input}
                  type="number"
                  min="0"
                  max="7"
                  name="exercise"
                  value={formData.exercise}
                  onChange={handleInputChange}
                  placeholder="Enter exercise frequency"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Smoking Status</label>
                <select
                  style={styles.input}
                  name="smoking"
                  value={formData.smoking}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select smoking status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  ':hover': {
                    backgroundColor: '#34495e'
                  }
                }}
              >
                Submit Data
              </button>
            </form>
          </div>
        </div>
      )}


      {/* Statistics Section */}
      <section id="statistics" style={styles.statsSection}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#2d3748'
          }}>
            Research Statistics
          </h2>

          {/* Key Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Sleep Stage Distribution</h3>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={statistics.sleepStages}

                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label
                    >
                      {statistics.sleepStages.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Lifestyle Impact Analysis</h3>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer>
                  <BarChart data={[
                    { factor: 'Caffeine', impact: -0.0151 },
                    { factor: 'Exercise', impact: -0.1894 },
                    { factor: 'Smoking', impact: 0.2244 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="impact" fill="#8884d8" name="Correlation with Sleep Quality" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Age Group Analysis</h3>
              <div style={{ height: '300px' }}>
                <ResponsiveContainer>
                  <LineChart data={[
                    { age: '18-24', efficiency: 82 },
                    { age: '25-34', efficiency: 84 },
                    { age: '35-44', efficiency: 81 },
                    { age: '45-54', efficiency: 79 },
                    { age: '55+', efficiency: 77 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="efficiency" stroke="#8884d8" name="Sleep Efficiency (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Statistical Tables */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Sleep Stage Statistics</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Sleep Stage</th>
                    <th style={styles.th}>Mean (%)</th>
                    <th style={styles.th}>Std Dev</th>
                    <th style={styles.th}>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>Light Sleep</td>
                    <td style={styles.td}>24.56</td>
                    <td style={styles.td}>15.31</td>
                    <td style={styles.td}>7-63</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Deep Sleep</td>
                    <td style={styles.td}>52.82</td>
                    <td style={styles.td}>15.65</td>
                    <td style={styles.td}>18-75</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>REM Sleep</td>
                    <td style={styles.td}>22.62</td>
                    <td style={styles.td}>3.53</td>
                    <td style={styles.td}>15-30</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Correlation Matrix</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Variable</th>
                    <th style={styles.th}>Sleep Efficiency</th>
                    <th style={styles.th}>Light Sleep</th>
                    <th style={styles.th}>Concentration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>Sleep Efficiency</td>
                    <td style={styles.td}>1.000</td>
                    <td style={styles.td}>-0.819</td>
                    <td style={styles.td}>0.724</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Light Sleep</td>
                    <td style={styles.td}>-0.819</td>
                    <td style={styles.td}>1.000</td>
                    <td style={styles.td}>-0.683</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Concentration</td>
                    <td style={styles.td}>0.724</td>
                    <td style={styles.td}>-0.683</td>
                    <td style={styles.td}>1.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <section id="hypotheses" style={styles.hypothesisSection}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#2d3748'
          }}>
            Research Hypotheses
          </h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={styles.hypothesisCard}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>H1: Sleep Efficiency Correlation</h3>
              <p style={{ color: '#4a5568' }}>
                Sleep efficiency strongly correlates with concentration and motivation rate during the day.
                Our analysis shows a correlation coefficient of {(-0.8192).toFixed(4)}, indicating a strong negative relationship between these variables. This suggests that higher sleep efficiency is associated with improved concentration and motivation levels throughout daily activities.
              </p>
            </div>

            <div style={styles.hypothesisCard}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>H2: Lifestyle Impact on Sleep</h3>
              <p style={{ color: '#4a5568' }}>
                High caffeine intake and smoking lead to decrease in light sleep percentage caused by lifestyle factors.
                The analysis revealed a correlation of {(-0.0151).toFixed(4)} for caffeine consumption and {(0.2244).toFixed(4)} for smoking status, with smoking showing a more significant impact on light sleep patterns.
              </p>
            </div>

            <div style={styles.hypothesisCard}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>H3: Light Sleep and Concentration</h3>
              <p style={{ color: '#4a5568' }}>
                Light sleep percentage has a positive correlation with concentration. Through our statistical analysis,
                we've found that the amount of time spent in light sleep stages significantly influences cognitive performance
                and concentration abilities during waking hours.
              </p>
            </div>

            <div style={styles.hypothesisCard}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>H4: Demographic Variables</h3>
              <p style={{ color: '#4a5568' }}>
                Age and gender as demographic variables moderate the relationship between light sleep percentage and concentration.
                Our analysis demonstrates an age correlation of {(-0.0319).toFixed(4)} with light sleep percentage, while gender
                differences show distinct patterns in sleep quality and concentration relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <UserRecords />
      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem'
          }}>
            Ready to Improve Your Sleep?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Join our research study and contribute to the understanding of sleep patterns.
          </p>
          <button
            style={styles.button}
            onClick={() => setShowForm(true)}
          >
            Participate Now
          </button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" style={styles.testimonialSection}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#2d3748'
          }}>
            Expert Testimonials
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.testimonialCard}>
                <div style={{
                  color: '#ecc94b',
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#ecc94b" />
                  ))}
                </div>
                <p style={{
                  color: '#4a5568',
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p style={{
                    color: '#2d3748',
                    fontWeight: '600'
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{ color: '#718096' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem'
          }}>
            Contact Us
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem'
          }}>
            {/* Contact Form */}
            <div style={styles.chartContainer}>
              <h3 style={{ color: '#2d3748', marginBottom: '1.5rem' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Name</label>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    style={styles.input}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Subject</label>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    style={{ ...styles.input, minHeight: '150px' }}
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              color: 'white'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Research Center</h3>
                <p style={{ lineHeight: '1.6' }}>
                  Our sleep research facility is dedicated to understanding the relationship between sleep patterns and cognitive performance.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>Email: research@sleepanalysis.org</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>
                    Address: 123 Research Center<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer style={styles.enhancedFooter}>
        <div style={styles.footerGrid}>
          <div style={styles.footerColumn}>
            <div style={styles.logo}>
              <Moon size={24} />
              <span style={{ marginLeft: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Sleep Analysis
              </span>
            </div>
            <p style={{ color: '#a0aec0', marginTop: '1rem', lineHeight: '1.6' }}>
              Advancing sleep research through data-driven analysis and scientific methodology.
              Join us in understanding the impact of sleep on human performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ ...styles.footerLink, color: '#4299e1' }}>Twitter</a>
              <a href="#" style={{ ...styles.footerLink, color: '#4299e1' }}>LinkedIn</a>
              <a href="#" style={{ ...styles.footerLink, color: '#4299e1' }}>GitHub</a>
            </div>
          </div>

          <div style={styles.footerColumn}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Research</h3>
            <a href="#" style={styles.footerLink}>Methodology</a>
            <a href="#" style={styles.footerLink}>Publications</a>
            <a href="#" style={styles.footerLink}>Case Studies</a>
            <a href="#" style={styles.footerLink}>Data Analysis</a>
            <a href="#" style={styles.footerLink}>Research Team</a>
          </div>

          <div style={styles.footerColumn}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Resources</h3>
            <a href="#" style={styles.footerLink}>Documentation</a>
            <a href="#" style={styles.footerLink}>API Access</a>
            <a href="#" style={styles.footerLink}>Data Sets</a>
            <a href="#" style={styles.footerLink}>Sleep Guide</a>
            <a href="#" style={styles.footerLink}>FAQs</a>
          </div>

          <div style={styles.footerColumn}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h3>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>
              Email: research@sleepanalysis.org
            </p>
            <p style={{ color: '#a0aec0', marginBottom: '0.5rem' }}>
              Phone: +1 (555) 123-4567
            </p>
            <p style={{ color: '#a0aec0' }}>
              Address: 123 Research Center<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <p>© 2025 Sleep Analysis Research. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" style={styles.footerLink}>Privacy Policy</a>
                <a href="#" style={styles.footerLink}>Terms of Service</a>
                <a href="#" style={styles.footerLink}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;