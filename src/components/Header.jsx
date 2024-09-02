import React from 'react';
import './Header.css';

const Header = ({ searchTerm, onSearch, onAdd }) => {
    return (
        <header className="header">
            <h2>Contact App</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={onSearch}
                placeholder="Search by name or email"
            />
            <button onClick={onAdd}>Add New Contact</button>
        </header>
    );
};

export default Header;
