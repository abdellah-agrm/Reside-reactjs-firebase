import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Nunito Sans and Poppins with desired weights
import "@fontsource/nunito-sans/400.css"; // Weight 400.
import "@fontsource/nunito-sans/600.css"; // Weight 600.
import "@fontsource/nunito-sans/700.css"; // Weight 700.
import "@fontsource/poppins/400.css";      // Weight 400.
import "@fontsource/poppins/500.css";      // Weight 500.
import "@fontsource/poppins/600.css";      // Weight 600.
import "@fontsource/poppins/700.css";      // Weight 700.

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);