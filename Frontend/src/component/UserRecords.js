// import React, { useState, useEffect } from 'react';
// import { Download, FileText, X } from 'lucide-react';
// import styles from './userRecordsStyles';

// const UserRecords = () => {
//   // Dummy user data remains the same as before
//   const [users] = useState([
//     {
//       id: 1,
//       username: 'johndoe',
//       fullName: 'John Doe',
//       email: 'john.doe@example.com',
//       sleepData: {
//         age: 32,
//         gender: 'Male',
//         sleepDuration: 7.5,
//         caffeine: 150,
//         exercise: 3,
//         smoking: 'No'
//       }
//     },
//     {
//       id: 2,
//       username: 'janedoe',
//       fullName: 'Jane Doe',
//       email: 'jane.doe@example.com',
//       sleepData: {
//         age: 28,
//         gender: 'Female',
//         sleepDuration: 8.2,
//         caffeine: 50,
//         exercise: 4,
//         smoking: 'No'
//       }
//     },
//     {
//       id: 3,
//       username: 'mikebrown',
//       fullName: 'Mike Brown',
//       email: 'mike.brown@example.com',
//       sleepData: {
//         age: 45,
//         gender: 'Male',
//         sleepDuration: 6.8,
//         caffeine: 200,
//         exercise: 2,
//         smoking: 'Yes'
//       }
//     },
//     {
//       id: 4,
//       username: 'sarahwilson',
//       fullName: 'Sarah Wilson',
//       email: 'sarah.wilson@example.com',
//       sleepData: {
//         age: 35,
//         gender: 'Female',
//         sleepDuration: 7.8,
//         caffeine: 100,
//         exercise: 5,
//         smoking: 'No'
//       }
//     }
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Sleep metrics calculation functions remain the same
//   const calculateSleepMetrics = (sleepData) => {
//     const baseEfficiency = 0.788916;
//     const baseLightSleep = 24.561947;
//     const baseDeepSleep = 52.823009;
//     const baseREMSleep = 22.615044;

//     const efficiencyAdjustment = 
//       (sleepData.sleepDuration - 7.465708) * 0.05 +
//       (sleepData.exercise - 1.791480) * 0.03 -
//       (sleepData.caffeine > 100 ? 0.05 : 0) -
//       (sleepData.smoking === 'Yes' ? 0.08 : 0);

//     const lightSleepAdjustment =
//       (sleepData.age - 40.285398) * -0.0319 +
//       (sleepData.smoking === 'Yes' ? 0.2244 * 15.313665 : 0);

//     return {
//       efficiency: Math.min(Math.max(baseEfficiency + efficiencyAdjustment, 0.5), 0.99),
//       lightSleep: Math.min(Math.max(baseLightSleep + lightSleepAdjustment, 7), 63),
//       deepSleep: baseDeepSleep,
//       remSleep: baseREMSleep
//     };
//   };

//   const generateAnalysisText = (metrics, sleepData) => {
//     const quality = metrics.efficiency > 0.85 ? 'excellent' : 
//                    metrics.efficiency > 0.75 ? 'good' : 
//                    metrics.efficiency > 0.65 ? 'fair' : 'poor';

//     return `Based on the analysis, your sleep quality is ${quality} with an efficiency of ${(metrics.efficiency * 100).toFixed(1)}%. 
//     Your sleep architecture shows ${metrics.lightSleep.toFixed(1)}% light sleep, ${metrics.deepSleep.toFixed(1)}% deep sleep, 
//     and ${metrics.remSleep.toFixed(1)}% REM sleep. ${
//       sleepData.caffeine > 100 ? 'Your caffeine intake may be affecting your sleep quality. ' : ''
//     }${
//       sleepData.exercise < 3 ? 'Increasing your exercise frequency might improve your sleep quality. ' : ''
//     }${
//       sleepData.smoking === 'Yes' ? 'Smoking appears to be negatively impacting your sleep patterns. ' : ''
//     }`;
//   };

//   const handleGenerateReport = (user) => {
//     setSelectedUser(user);
//     setShowModal(true);
//   };

//   const handleDownloadReport = (user) => {
//     const metrics = calculateSleepMetrics(user.sleepData);
//     const analysis = generateAnalysisText(metrics, user.sleepData);

//     const reportContent = `
// Sleep Analysis Report for ${user.fullName}

// User Information:
// - Username: ${user.username}
// - Email: ${user.email}

// Input Parameters:
// - Age: ${user.sleepData.age}
// - Gender: ${user.sleepData.gender}
// - Sleep Duration: ${user.sleepData.sleepDuration} hours
// - Caffeine Intake: ${user.sleepData.caffeine} mg
// - Exercise Frequency: ${user.sleepData.exercise} times per week
// - Smoking Status: ${user.sleepData.smoking}

// Analysis Results:
// - Sleep Efficiency: ${(metrics.efficiency * 100).toFixed(1)}%
// - Light Sleep: ${metrics.lightSleep.toFixed(1)}%
// - Deep Sleep: ${metrics.deepSleep.toFixed(1)}%
// - REM Sleep: ${metrics.remSleep.toFixed(1)}%

// Summary:
// ${analysis}
//     `;

//     const blob = new Blob([reportContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `sleep_report_${user.username}.txt`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <section id="user-records" style={styles.section}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <h2 style={styles.headerTitle}>User Records</h2>
//           <p style={styles.headerSubtitle}>
//             View and analyze sleep patterns for registered users. Generate detailed reports and recommendations based on user data.
//           </p>
//         </div>

//         <div style={styles.tableWrapper}>
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Username</th>
//                 <th style={styles.th}>Full Name</th>
//                 <th style={styles.th}>Email</th>
//                 <th style={styles.th}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td style={styles.td}>{user.username}</td>
//                   <td style={styles.td}>{user.fullName}</td>
//                   <td style={styles.td}>{user.email}</td>
//                   <td style={styles.td}>
//                     <button
//                       onClick={() => handleGenerateReport(user)}
//                       style={styles.actionButton}
//                     >
//                       <FileText className="w-4 h-4 mr-2" />
//                       Generate Report
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {showModal && selectedUser && (
//           <div style={styles.modal}>
//             <div style={styles.modalContent}>
//               <div style={styles.modalHeader}>
//                 <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748' }}>
//                   Sleep Analysis Report
//                 </h3>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//                 >
//                   <X className="w-6 h-6" color="#4a5568" />
//                 </button>
//               </div>

//               <div style={styles.modalBody}>
//                 <div style={styles.modalSection}>
//                   <h4 style={styles.modalSectionTitle}>User Information</h4>
//                   <div style={styles.modalGrid}>
//                     <p>Name: {selectedUser.fullName}</p>
//                     <p>Email: {selectedUser.email}</p>
//                   </div>
//                 </div>

//                 <div style={styles.modalSection}>
//                   <h4 style={styles.modalSectionTitle}>Input Parameters</h4>
//                   <div style={styles.modalGrid}>
//                     <p>Age: {selectedUser.sleepData.age}</p>
//                     <p>Gender: {selectedUser.sleepData.gender}</p>
//                     <p>Sleep Duration: {selectedUser.sleepData.sleepDuration} hours</p>
//                     <p>Caffeine Intake: {selectedUser.sleepData.caffeine} mg</p>
//                     <p>Exercise Frequency: {selectedUser.sleepData.exercise}/week</p>
//                     <p>Smoking Status: {selectedUser.sleepData.smoking}</p>
//                   </div>
//                 </div>

//                 <div style={styles.modalSection}>
//                   <h4 style={styles.modalSectionTitle}>Analysis Results</h4>
//                   {(() => {
//                     const metrics = calculateSleepMetrics(selectedUser.sleepData);
//                     return (
//                       <div style={styles.modalGrid}>
//                         <p>Sleep Efficiency: {(metrics.efficiency * 100).toFixed(1)}%</p>
//                         <p>Light Sleep: {metrics.lightSleep.toFixed(1)}%</p>
//                         <p>Deep Sleep: {metrics.deepSleep.toFixed(1)}%</p>
//                         <p>REM Sleep: {metrics.remSleep.toFixed(1)}%</p>
//                       </div>
//                     );
//                   })()}
//                 </div>

//                 <div style={styles.modalSection}>
//                   <h4 style={styles.modalSectionTitle}>Summary</h4>
//                   <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
//                     {generateAnalysisText(
//                       calculateSleepMetrics(selectedUser.sleepData),
//                       selectedUser.sleepData
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <div style={styles.modalFooter}>
//                 <button
//                   onClick={() => handleDownloadReport(selectedUser)}
//                   style={styles.downloadButton}
//                 >
//                   <Download className="w-4 h-4 mr-2" />
//                   Download Report
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default UserRecords;


























import React, { useState, useEffect } from 'react';
import { Download, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './userRecordsStyles';
import axios from 'axios';

const UserRecords = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  });

  const API_URL = 'http://localhost:3001/api';

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`, {
        params: {
          page,
          limit: pagination.itemsPerPage
        }
      });

      setUsers(response.data.users);
      setPagination(response.data.pagination);
      setError(null);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to load users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Pagination handlers
  const handlePreviousPage = () => {
    if (pagination.currentPage > 1) {
      fetchUsers(pagination.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      fetchUsers(pagination.currentPage + 1);
    }
  };

  // Report generation handlers
  const handleGenerateReport = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Sleep metrics calculation functions remain the same
  const calculateSleepMetrics = (sleepData) => {
    const baseEfficiency = 0.788916;
    const baseLightSleep = 24.561947;
    const baseDeepSleep = 52.823009;
    const baseREMSleep = 22.615044;

    const efficiencyAdjustment =
      (sleepData.sleepDuration - 7.465708) * 0.05 +
      (sleepData.exercise - 1.791480) * 0.03 -
      (sleepData.caffeine > 100 ? 0.05 : 0) -
      (sleepData.smoking === 'Yes' ? 0.08 : 0);

    const lightSleepAdjustment =
      (sleepData.age - 40.285398) * -0.0319 +
      (sleepData.smoking === 'Yes' ? 0.2244 * 15.313665 : 0);

    return {
      efficiency: Math.min(Math.max(baseEfficiency + efficiencyAdjustment, 0.5), 0.99),
      lightSleep: Math.min(Math.max(baseLightSleep + lightSleepAdjustment, 7), 63),
      deepSleep: baseDeepSleep,
      remSleep: baseREMSleep
    };
  };

  const generateAnalysisText = (metrics, sleepData) => {
    const quality = metrics.efficiency > 0.85 ? 'excellent' :
      metrics.efficiency > 0.75 ? 'good' :
        metrics.efficiency > 0.65 ? 'fair' : 'poor';

    return `Based on the analysis, your sleep quality is ${quality} with an efficiency of ${(metrics.efficiency * 100).toFixed(1)}%. 
    Your sleep architecture shows ${metrics.lightSleep.toFixed(1)}% light sleep, ${metrics.deepSleep.toFixed(1)}% deep sleep, 
    and ${metrics.remSleep.toFixed(1)}% REM sleep. ${sleepData.caffeine > 100 ? 'Your caffeine intake may be affecting your sleep quality. ' : ''
      }${sleepData.exercise < 3 ? 'Increasing your exercise frequency might improve your sleep quality. ' : ''
      }${sleepData.smoking === 'Yes' ? 'Smoking appears to be negatively impacting your sleep patterns. ' : ''
      }`;
  };


  const handleDownloadReport = async (user) => {
    try {
      const metrics = calculateSleepMetrics(user.sleepData);
      const analysis = generateAnalysisText(metrics, user.sleepData);

      // Generate report content
      const reportContent = `
Sleep Analysis Report for ${user.fullName}

User Information:
- Username: ${user.username}
- Email: ${user.email}

Input Parameters:
- Age: ${user.sleepData.age}
- Gender: ${user.sleepData.gender}
- Sleep Duration: ${user.sleepData.sleepDuration} hours
- Caffeine Intake: ${user.sleepData.caffeine} mg
- Exercise Frequency: ${user.sleepData.exercise} times per week
- Smoking Status: ${user.sleepData.smoking}

Analysis Results:
- Sleep Efficiency: ${(metrics.efficiency * 100).toFixed(1)}%
- Light Sleep: ${metrics.lightSleep.toFixed(1)}%
- Deep Sleep: ${metrics.deepSleep.toFixed(1)}%
- REM Sleep: ${metrics.remSleep.toFixed(1)}%

Summary:
${analysis}
      `;

      // Create and download the file
      const blob = new Blob([reportContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sleep_report_${user.username}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating report:', error);
      setError('Failed to generate report. Please try again.');
    }
  };

  // Loading state
  if (loading && users.length === 0) {
    return (
      <section id="user-records" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.loading}>
            <div style={styles.loadingSpinner}></div>
            <p>Loading user records...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error && users.length === 0) {
    return (
      <section id="user-records" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.error}>
            <p>{error}</p>
            <button
              onClick={() => fetchUsers(pagination.currentPage)}
              style={styles.retryButton}
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
    return (
      <div style={styles.pagination}>
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 1}
          style={{
            ...styles.paginationButton,
            opacity: currentPage === 1 ? 0.7 : 1,
            transform: `scale(${currentPage === 1 ? 0.98 : 1})`
          }}
        >
          <ChevronLeft
            size={20}
            style={{
              transition: 'transform 0.3s ease',
              transform: currentPage === 1 ? 'translateX(2px)' : 'translateX(0)'
            }}
          />
          <span>Previous</span>
        </button>

        <div
          style={styles.paginationInfo}
          title={`Page ${currentPage} of ${totalPages}`}
        >
          <span>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>
        </div>

        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          style={{
            ...styles.paginationButton,
            opacity: currentPage === totalPages ? 0.7 : 1,
            transform: `scale(${currentPage === totalPages ? 0.98 : 1})`
          }}
        >
          <span>Next</span>
          <ChevronRight
            size={20}
            style={{
              transition: 'transform 0.3s ease',
              transform: currentPage === totalPages ? 'translateX(-2px)' : 'translateX(0)'
            }}
          />
        </button>
      </div>
    );
  };

  return (
    <section id="user-records" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>User Records</h2>
          <p style={styles.headerSubtitle}>
            View and analyze sleep patterns for registered users. Generate detailed reports and recommendations based on user data.
          </p>
        </div>
        {/* Error message if any */}
        {error && <div style={styles.errorMessage}>{error}</div>}

        {/* Table */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Username</th>
                <th style={styles.th}>Full Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={styles.td}>{user.username}</td>
                  <td style={styles.td}>{user.fullName}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>
                    <button
                      onClick={() => handleGenerateReport(user)}
                      style={styles.actionButton}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
          />
        </div>

        {showModal && selectedUser && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <div style={styles.modalHeader}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748' }}>
                  Sleep Analysis Report
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <X className="w-6 h-6" color="#4a5568" />
                </button>
              </div>

              <div style={styles.modalBody}>
                <div style={styles.modalSection}>
                  <h4 style={styles.modalSectionTitle}>User Information</h4>
                  <div style={styles.modalGrid}>
                    <p>Name: {selectedUser.fullName}</p>
                    <p>Email: {selectedUser.email}</p>
                  </div>
                </div>

                <div style={styles.modalSection}>
                  <h4 style={styles.modalSectionTitle}>Input Parameters</h4>
                  <div style={styles.modalGrid}>
                    <p>Age: {selectedUser.sleepData.age}</p>
                    <p>Gender: {selectedUser.sleepData.gender}</p>
                    <p>Sleep Duration: {selectedUser.sleepData.sleepDuration} hours</p>
                    <p>Caffeine Intake: {selectedUser.sleepData.caffeine} mg</p>
                    <p>Exercise Frequency: {selectedUser.sleepData.exercise}/week</p>
                    <p>Smoking Status: {selectedUser.sleepData.smoking}</p>
                  </div>
                </div>

                <div style={styles.modalSection}>
                  <h4 style={styles.modalSectionTitle}>Analysis Results</h4>
                  {(() => {
                    const metrics = calculateSleepMetrics(selectedUser.sleepData);
                    return (
                      <div style={styles.modalGrid}>
                        <p>Sleep Efficiency: {(metrics.efficiency * 100).toFixed(1)}%</p>
                        <p>Light Sleep: {metrics.lightSleep.toFixed(1)}%</p>
                        <p>Deep Sleep: {metrics.deepSleep.toFixed(1)}%</p>
                        <p>REM Sleep: {metrics.remSleep.toFixed(1)}%</p>
                      </div>
                    );
                  })()}
                </div>

                <div style={styles.modalSection}>
                  <h4 style={styles.modalSectionTitle}>Summary</h4>
                  <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
                    {generateAnalysisText(
                      calculateSleepMetrics(selectedUser.sleepData),
                      selectedUser.sleepData
                    )}
                  </p>
                </div>
              </div>
              <div style={styles.modalFooter}>
                <button
                  onClick={() => handleDownloadReport(selectedUser)}
                  style={styles.downloadButton}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserRecords;