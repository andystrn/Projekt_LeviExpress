import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import JorneyDetail from './JorneyDetail';
import SelectedSeat from './JorneyDetail/SelectedSeat';

export const Home = () => {
  const [journ, setJourn] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourn(journey);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journ !== null ?
        [
          <JorneyDetail key={journ.journeyId} journey={journ} />,
          <SelectedSeat key={journ.autoSeat} number={journ.autoSeat} />
        ]
        : null}
    </main>
  )
};
