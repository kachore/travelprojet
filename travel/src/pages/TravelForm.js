import React, { useState } from 'react';
import { useTravelContext } from '../TravelContest';

const TravelForm = () => {
  const { addEntry } = useTravelContext();
  const [newEntry, setNewEntry] = useState({
    title: '',
    destination: '',
    date: '',
    experiences: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.title && newEntry.destination && newEntry.date) {
      addEntry({ ...newEntry, id: Date.now() });
      setNewEntry({
        title: '',
        destination: '',
        date: '',
        experiences: '',
      });
    }
  };

  return (
    <div className='container'>
        <form className="travel-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Titre
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Titre"
          value={newEntry.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="destination" className="form-label">
          Destination
        </label>
        <input
          type="text"
          className="form-control"
          id="destination"
          name="destination"
          placeholder="Destination"
          value={newEntry.destination}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={newEntry.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="experiences" className="form-label">
          Expériences
        </label>
        <textarea
          className="form-control"
          id="experiences"
          name="experiences"
          placeholder="Expériences"
          value={newEntry.experiences}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>
    </form>
    </div>
  );
};

export default TravelForm;
