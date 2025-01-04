import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import ImageGallery from './components/ImageGallery';
import ImageUploader from './components/ImageUploader';
import ReinitialiseTables from './components/ReinitialiseTables';
import ImageDetails from './components/ImageDetails';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import FavoritesPage from './components/FavoritesPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <ConditionalSearchBar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/upload" element={<ImageUploader />} />
                    <Route path="/" element={<ImageGallery />} />
                    <Route path="/reinitialisetables" element={<ReinitialiseTables />} />
                    <Route path="/image/:id" element={<ImageDetails />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">Image Gallery</Link>
            </div>
            <div className="nav-buttons">
                <Link to="/login" className="nav-button">Login</Link>
                <Link to="/register" className="nav-button">Register</Link>
            </div>
        </header>
    );
}

function ConditionalSearchBar() {
    const location = useLocation();
    return location.pathname === '/' ? <SearchBar /> : null;
}

export default App;
