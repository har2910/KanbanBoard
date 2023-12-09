// TicketColumn.js
import React from 'react';
import TicketCard from './TicketCard';

const TicketColumn = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
