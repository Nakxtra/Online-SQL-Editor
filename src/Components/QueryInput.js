// Import necessary React and external library dependencies
import React, { useState} from 'react';
import QueryResult from './QueryResult';
import AceEditor from 'react-ace';

// Import Ace Editor styles and extensions
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

// Define the QueryInput component
const QueryInput = () => {
  // State variables for managing the query and query results
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  
  // Function to handle executing the SQL query
  const handleExecuteQuery = () => {
    // Check if the query is empty before executing
    if (query.trim() === '') {
      alert('Type some SQL statements to execute or select from the options provided.');
      return;
    }
    
    setResults('T1');
  };
  


  // Return JSX for rendering the QueryInput component
  return (
    <div className='query-input'>
      {/* Header for the QueryInput section */}
      <h3>Write & Execute</h3>

      {/* AceEditor for writing SQL queries */}
      <AceEditor
        mode="sql"
        theme="twilight"
        onChange={(value) => setQuery(value)}
        value={query}
        name="query-editor"
        editorProps={{ $blockScrolling: true }}
        height="400px"
        width="100%"
        fontSize={14}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
      />

      {/* Button to execute the SQL query */}
      <button onClick={handleExecuteQuery}>Execute Query</button>

      {/* Component to display the query results */}
      <QueryResult tableName={results} />
    </div>
  );
};

// Export the QueryInput component for use in other parts of the application
export default QueryInput;
