// Import the React library, which is required for writing React components
import React from 'react';

// Import your custom components
import QueryInput from './Components/QueryInput';
import QuerySelector from './Components/QuerySelector';

// Define the main App component
const App = () => {
  // The main return block of the component
  return (
    <div>
      {/* Header of the application */}
      <h1>SQL Query App</h1>

      {/* Container div to hold the QueryInput and QuerySelector components */}
      <div className='contain'>
        {/* QueryInput component for entering SQL queries */}
        <QueryInput />

        {/* QuerySelector component for selecting different types of queries */}
        <QuerySelector />
      </div>
    </div>
  );
};

// Export the App component to make it available for use in other parts of your application
export default App;
