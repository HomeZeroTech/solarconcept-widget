import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './widget.css'

const containerId = 'pico-widget-container';
const container = document.getElementById(containerId);

if (container) {
  // Optional settings on the container:
  //   data-demo="true"         → never sends a lead (for demo/acceptance pages)
  //   data-heading-level="2"   → heading level of the question (default 3, under the page's own h2)
  const demo = container.dataset.demo === 'true';
  const headingLevel = parseInt(container.dataset.headingLevel || '3', 10) || 3;
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App demo={demo} headingLevel={headingLevel} />
    </React.StrictMode>,
  )
} else {
  console.warn(`Pico Widget: Container element #${containerId} not found. Widget will not render.`);
}
