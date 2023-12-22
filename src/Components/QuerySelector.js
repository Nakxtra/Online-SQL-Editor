// Import necessary React library dependencies
import React from 'react';

// Import custom components
import QueryResult from './QueryResult';
import Queries from '../Tables/Queries';

// Define the QuerySelector component
const QuerySelector = () => {

  // Return JSX for rendering the QuerySelector component
  return (
    <div className='query-selector'>
      {/* Header for the QuerySelector section */}
      <h3>Select a Query</h3>

      {/* Accordion container for displaying queries */}
      <div className="accordion" id="accordionExample">
        {/* Map through each result to create an accordion item */}
        {Queries().map((query) => (
          <div className="accordion-item" key={query.id}>
            {/* Accordion header button */}
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + query.id}
                aria-expanded="true"
                aria-controls={query.id}
              >
                {query.name}
              </button>
            </h2>

            {/* Accordion body containing the QueryResult component */}
            <div id={query.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {/* QueryResult component to display results for the selected query */}
                <QueryResult tableName={query.tableName} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the QuerySelector component for use in other parts of the application
export default QuerySelector;
