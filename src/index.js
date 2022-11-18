import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Details';
import Profile from './Profile';
import Mood from './Mood';
import Tasks from './Tasks';
import Task from './Task';
import List from './List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="details/:address" element={<Details />} />
      <Route path="profile/:address" element={<Profile/>} /> 
      <Route path="mood/:address" element={<Mood/>} /> 
      <Route path="tasks/:address" element={<Tasks/>} /> 
      <Route path="task/:id" element={<Task/>} /> 
      <Route path="details/:address" element={<Details/>} /> 
      <Route path="lists/:address" element={<List/>} /> 
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
