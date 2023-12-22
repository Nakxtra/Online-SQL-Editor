// Import necessary React library dependencies
import React, { useEffect, useState } from 'react';

// Import individual table components
import Table1 from '../Tables/Table1';
import Table2 from '../Tables/Table2';
import Table3 from '../Tables/Table3';
import Table4 from '../Tables/Table4';
import Table5 from '../Tables/Table5';
import Table6 from '../Tables/Table6';
import Table7 from '../Tables/Table7';

// Define the DisplayTable component
const DisplayTable = ({ tableName }) => {
  // State variable for managing the query results
  const [results, setResults] = useState([]);

  // Define variables for each table component
  const T1 = Table1;
  const T2 = Table2;
  const T3 = Table3;
  const T4 = Table4;
  const T5 = Table5;
  const T6 = Table6;
  const T7 = Table7;

  // Effect to update results when tableName changes
  useEffect(() => {
    setResults(eval(tableName));
  }, [tableName]);

  // Return JSX for rendering the DisplayTable component
  return (
    <div className='displayTable'>
      {/* Check if results are available before rendering the table */}
      {results && 
        <table>
          {/* Table header */}
          <thead>
            <tr>
              {/* Map through keys of the first result row to create table header */}
              {results[0] && Object.keys(results[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {/* Map through each result row to create table rows */}
            {results && results.map((row, index) => (
              <tr key={index}>
                {/* Map through values of each row to create table cells */}
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

// Export the DisplayTable component for use in other parts of the application
export default DisplayTable;
