import React from 'react';
import './ContactItem.css'; // اطمینان از مسیر صحیح

const ContactItem = ({ contact, onEdit, onDelete }) => {
    return (
        <div className="contact-item">
            {/* حذف چک‌باکس‌ها از اینجا */}
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <button className='edit-button' onClick={onEdit}>Edit</button>
            <button className='delete-button' onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ContactItem;
