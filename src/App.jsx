import React, { useState } from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';




const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const handleEditContact = (updatedContact) => {
        setContacts(contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        ));
    };

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const handleDeleteAllContacts = () => {
        setContacts([]);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOpenModal = (contact, editMode) => {
        setSelectedContact(contact);
        setIsEditMode(editMode);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onAdd={() => handleOpenModal(null, false)}
            />
            <button className='delete-all-contacts' onClick={handleDeleteAllContacts}>
                Delete All Contacts
            </button>
            <ContactList
                contacts={filteredContacts}
                onEdit={contact => handleOpenModal(contact, true)}
                onDelete={handleDeleteContact}
            />
            {isModalOpen && (
                <Modal
                    contact={selectedContact}
                    isEditMode={isEditMode}
                    onClose={handleCloseModal}
                    onSave={isEditMode ? handleEditContact : handleAddContact}
                />
            )}
        </div>
    );
};
export default App;

