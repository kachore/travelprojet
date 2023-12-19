import React, { useState } from 'react';
import { useTravelContext } from '../TravelContest';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const TravelEntry = ({ entry }) => {
  const { updateEntry, deleteEntry } = useTravelContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    updateEntry(editedEntry);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteEntry(entry.id);
  };

  return (
    <div>
        
        
    <Card className="travel-entry" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Card.Body>
        {isEditing ? (
          <>
            <Card.Title>
              <input
                type="text"
                className="form-control"
                name="title"
                value={editedEntry.title}
                onChange={handleInputChange}
              />
            </Card.Title>
            <Card.Text>
              <input
                type="text"
                className="form-control"
                name="destination"
                value={editedEntry.destination}
                onChange={handleInputChange}
              />
              <input
                type="date"
                className="form-control"
                name="date"
                value={editedEntry.date}
                onChange={handleInputChange}
              />
                 <input
                type="text"
                className="form-control"
                name="experiences"
                value={editedEntry.experiences}
                onChange={handleInputChange}
              />
           
              <Button variant="primary" onClick={handleUpdate}>Enregistrer</Button>
            </Card.Text>
          </>
        ) : (
          <>
            <Card.Title>{entry.title}</Card.Title>
            <Card.Text>
              <p>Destination: {entry.destination}</p>
              <p>Date: {entry.date}</p>
              <p>Expérience: {entry.experiences}</p>
              <Button variant="info" onClick={() => setIsEditing(true)}>Modifier</Button>
              <Button variant="danger" onClick={handleDelete}><span className="bi bi-trash"></span>Supprimer</Button>
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
    </div>
  );
};

export default TravelEntry;
