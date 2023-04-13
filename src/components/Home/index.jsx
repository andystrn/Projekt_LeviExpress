import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journ, setJourn] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourn(journey);
  }

  return (
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    <p>{journ !== null ? `Nalezeno spojení s id ${journ.journeyId}` : null}</p>
  </main>
  )
  };
