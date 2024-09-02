import React from 'react';
import './Modal.css';
import ContactForm from './ContactForm'

const Modal = ({ contact, isEditMode, onClose, onSave }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{isEditMode ? 'Edit Contact' : 'Add New Contact'}</h2>
                <ContactForm
                    contact={contact}
                    isEditMode={isEditMode}
                    onClose={onClose}
                    onSave={onSave}
                />
            </div>
        </div>
    );
};

export default Modal;
