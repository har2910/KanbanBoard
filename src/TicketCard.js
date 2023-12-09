// TicketCard.js
import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      {/* Display other ticket information */}
    </div>
  );
};

export default TicketCard;
