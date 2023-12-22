// Define the Queries component
const Queries = () => {
  // An array of query objects, each containing an id, SQL query, and associated table name
  return [
    { id: 'one', name: 'SELECT * FROM USER', tableName: 'T1' },
    { id: 'two', name: 'SELECT * FROM USER ORDER BY AGE', tableName: 'T2' },
    { id: 'three', name: 'SELECT * FROM USER WHERE AGE > 30 ORDER BY AGE', tableName: 'T3' },
    { id: 'four', name: "SELECT Name FROM USER WHERE CITY = 'New York'", tableName: 'T4' },
    { 
      id: 'five', 
      name: "SELECT Occupation, COUNT(*) AS 'Total Users' FROM USER GROUP BY Occupation", 
      tableName: 'T5' 
    },
    { id: 'six', name: 'SELECT * FROM ORDERS (Large Data)', tableName: 'T6' },
    { id: 'seven', name: 'SELECT * FROM ORDERS_DETAILS (Large Data)', tableName: 'T7' },
  ];
};

// Export the Queries component for use in other parts of the application
export default Queries;
