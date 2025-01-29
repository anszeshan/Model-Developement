const userRecordsStyles = {
  section: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%)'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  headerTitle: {
    fontSize: '2.5rem',
    color: '#2d3748',
    marginBottom: '1rem'
  },
  headerSubtitle: {
    color: '#4a5568',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto'
  },
  tableWrapper: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    overflow: 'hidden'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    backgroundColor: '#f8fafc',
    padding: '1rem 1.5rem',
    textAlign: 'left',
    color: '#2d3748',
    fontWeight: '600',
    fontSize: '0.95rem',
    borderBottom: '2px solid #e2e8f0'
  },
  td: {
    padding: '1rem 1.5rem',
    color: '#4a5568',
    borderBottom: '1px solid #e2e8f0'
  },
  actionButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#2c5282',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
  },
  modalHeader: {
    padding: '1.5rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalBody: {
    padding: '1.5rem'
  },
  modalSection: {
    marginBottom: '1.5rem'
  },
  modalSectionTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '1rem'
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  modalFooter: {
    padding: '1.5rem',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem'
  },
  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    backgroundColor: '#2c5282',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  },
  // Container for the entire pagination section
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    gap: '1rem',
    borderTop: '1px solid #e2e8f0',
    marginTop: '1rem'
  },

  // Base styles for pagination buttons
  paginationButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'white',
    color: '#2c5282',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    // Disabled state styling
    '&:disabled': {
      backgroundColor: '#f7fafc',
      color: '#a0aec0',
      borderColor: '#edf2f7',
      cursor: 'not-allowed',
      opacity: 0.7
    },
    // Hover state (when not disabled)
    '&:not(:disabled):hover': {
      backgroundColor: '#2c5282',
      color: 'white',
      borderColor: '#2c5282',
      transform: 'translateY(-1px)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    // Active/pressed state
    '&:not(:disabled):active': {
      transform: 'translateY(0)',
      boxShadow: 'none'
    }
  },

  // Styles for the page information display
  paginationInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
    color: '#4a5568',
    fontSize: '0.875rem',
    fontWeight: '500',
    minWidth: '150px',
    justifyContent: 'center',
    border: '1px solid #e2e8f0'
  },

  // Additional hover effects for the page info
  paginationInfoHover: {
    '&:hover': {
      backgroundColor: '#edf2f7'
    }
  }
};

export default userRecordsStyles;