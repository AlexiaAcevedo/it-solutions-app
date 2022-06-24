import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apply from './components/Apply';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/apply/:id" element={<Apply />} />
        </Routes>
    </BrowserRouter>
);