## Overview of Changes
### 1. Fetching Applications from Backend
   I replaced the hardcoded JSON fixture with dynamic data fetched from the API using pagination parameters (_page and _limit), with the useEffect hook triggering data fetching on component mount or when the page state changes.
   
### 2. Pagination Logic
   The pagination logic, implemented with useEffect, fetches a new set of applications when the page number changes, with the current page managed using React's useState hook.

### 3. Button to Load More Applications
   The "Load More" button is rendered along with the applications and is disabled when 'applications' array's length is less than limit (when we've reached the end). There is also a conditional rendering of applications which checks the length of the 'applications' array, and if it is empty we show 'No more applications' message.

### 4. Tests
    The tests I wrote in 'Applications.test.tsx' check the basic functionality of the Applications component. As I have never used Vitest before, these tests are quite simple for now and focus on the core behaviors:
       - Loading the first 5 applications
       - Loading 5 more applications when the button 'Load More' is clicked

### 5. Date Format and Loan Amount Format
    Based on the Figma file, I adjusted the date format to DD-MM-YY and formatted the loan amount with commas (e.g., 36,000). I also added the £ symbol for the loan amount as specified in the design.

### 6. Text Styling
    I updated the styles to make all fields bold to resemble the Figma mockup. The email field's color was changed to blue as well.

### 7. Responsiveness
    I added responsiveness by changing the grid layout to 1fr for all columns and adjusting the padding, so it now looks good on mobile and tablet.

### 8. Folder Structure
    I improved the project organization by moving components into their respective folders to maintain a clean and scalable folder structure.