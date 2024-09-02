import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css'; // اطمینان از مسیر صحیح

const ContactList = ({ contacts, onEdit, onDelete }) => {
    if (!contacts || !Array.isArray(contacts)) {
        console.error('Invalid contacts prop:', contacts);
        return null; // یا یک پیام خطا نمایش دهید
    }

    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onEdit={() => onEdit(contact)}
                    onDelete={() => onDelete(contact.id)}
                />
            ))}
        </div>
    );
};

export default ContactList;


