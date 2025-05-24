import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import styles from './index.css?inline';

// Create a container div to hold the shadow DOM
const shadowContatiner = document.createElement('div');
document.body.appendChild(shadowContatiner);
// Create shadow DOM
const shadow = shadowContatiner.attachShadow({ mode: "open" });

// Render the React app into the container
const root = ReactDOM.createRoot(shadow);
root.render(<Counter />);

// Append Tailwind style
const style = document.createElement("style");
style.textContent = styles;
shadow.appendChild(style);
