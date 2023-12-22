// Import necessary React library dependencies
import React, { useState } from 'react';

// Import CustomModal component
import CustomModal from './Modal';

// Define the Maximize component
const Maximize = ({ tableName }) => {
  // State variable to manage the modal's open/close state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Return JSX for rendering the Maximize component
  return (
    <div>
      {/* Button to trigger opening the modal */}
      <button onClick={openModal}>Maximize</button>

      {/* CustomModal component with isOpen, onRequestClose, and content props */}
      <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} content={tableName} />
    </div>
  );
};

// Export the Maximize component for use in other parts of the application
export default Maximize;
