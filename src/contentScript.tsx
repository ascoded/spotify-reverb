import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

// Create a container div to hold the React app
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// Render the React app into the container
const root = ReactDOM.createRoot(appContainer);
root.render(<Counter />);
