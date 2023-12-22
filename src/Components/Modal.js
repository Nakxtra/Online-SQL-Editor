// Import necessary React library dependencies
import React from 'react';
import Modal from 'react-modal';
import DisplayTable from './DisplayTable';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

// Define the CustomModal component
const CustomModal = ({ isOpen, onRequestClose, content }) => {
  // Return JSX for rendering the CustomModal component
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '90%',
          height: '90%',
          margin: 'auto',
        },
      }}
    >
      {/* Modal content */}
      <div>
        {/* Button to close the modal */}
        <button onClick={onRequestClose}>Close</button>

        {/* DisplayTable component inside the modal */}
        <DisplayTable tableName={content} />
      </div>
    </Modal>
  );
};

// Export the CustomModal component for use in other parts of the application
export default CustomModal;
