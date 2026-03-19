// Configuration module for Modern Travel Planner
module.exports = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  debug: process.env.DEBUG === 'true',
  theme: 'light'
};