import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSchool from './components/AddSchool';
import ShowSchools from './components/ShowSchools';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold">School Management System</h1>
        </header>
        
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<AddSchool />} />
            <Route path="/add-school" element={<AddSchool />} />
            <Route path="/show-schools" element={<ShowSchools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;