import React from 'react';
import { useTravelContext } from '../TravelContest';
import TravelEntry from './TravelEntry';

const TravelList = () => {
  const { entries } = useTravelContext();

  return (
    <div className="travel-list">
        
      {entries.map((entry) => (
        <TravelEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default TravelList;
