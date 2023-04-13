import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JorneyDetail from './JorneyDetail';

export const Home = () => {
  const [journ, setJourn] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourn(journey);
  }

  return (
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    {journ !== null ? <JorneyDetail journey={journ}/> : null}
  </main>
  )
  };
