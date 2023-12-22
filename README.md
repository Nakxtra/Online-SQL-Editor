# ONLINE SQL EDITOR Application

## Overview
This web application allows users to write and execute SQL queries. It provides a user-friendly interface for entering SQL statements, executing them, and viewing the dummy results. The app also includes a query selector that allows users to choose from predefined queries.
### LIVE
Try your hands on this amazing application with below link

https://online-sql-editor-app.netlify.app/

## Technology Stack
- **JavaScript Framework:** React
- **Dependencies/Major Plugins/Packages Installed:**
  - Ace Editor: A flexible and extensible code editor component for React.
  - React Modal: Used for Pop up maximize view for tables.
  - React Bootstrap : Used for Accordion and Styling.

## Performance
- **Page Load Time:**
  - The average page load time for the application is 2-3ms.
  - **How You Measured Load Time:**
    - Load time was measured using browser developer tools 
    - **Chrome DevTools:**
        - **Open DevTools:** Accessed Chrome Developer Tools by right-clicking on the page and selecting "Inspect," or by using keyboard shortcuts (`Ctrl + Shift + I` or `Cmd + Opt + I`).
        - **Network Tab:** Utilized the Network tab to inspect network activity during page load. Monitored the loading times of resources, such as HTML, CSS, JavaScript, and images.
        - **Performance Tab:** Employed the Performance tab to record a performance timeline. This detailed view helped identify bottlenecks and visualize the loading sequence of critical assets.

## Optimizations
- **Optimizations Made:**
  - Tables for predefined queries are only imported once and tableName is used as props which helps in rendering a large amount of rows in application without breaking the browser, or without crashing it.
- **Results:**
  - These optimizations resulted in **Decrease** in Load Time and **Increase** in Performance.

## How to Run
To run the SQL Query App locally, follow these steps:

1. Clone this repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd sql-query-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000`