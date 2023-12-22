// Import necessary React library dependencies
import React from 'react';
import Maximize from './Maximize';
import DisplayTable from './DisplayTable';

// Define the QueryResult component
const QueryResult = ({ tableName }) => {
  // console.log(resultID);
  // Return JSX for rendering the QueryResult component
  return (
    <div className='result'>
      {/* Header for the QueryResult section */}
      <h4>Query Results</h4>
      <Maximize tableName={tableName}/>
      {/* Check if results are available before rendering the table */}
      <DisplayTable tableName={tableName}/>
    </div>
  );
};

// Export the QueryResult component for use in other parts of the application
export default QueryResult;
