import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useNavigate } from 'react-router-dom';
import JorneyDetail from './JorneyDetail';
import SelectedSeat from './JorneyDetail/SelectedSeat';

export const Home = () => {
  const navigate = useNavigate();
  const [journ, setJourn] = useState(null);
  const handleJourneyChange = (journey) => {
    setJourn(journey);
  }
  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journ.autoSeat,
        journeyId: journ.journeyId,
      }),
    })
    .then(response => response.json())
    .then(data => navigate(`/reservation/${data.results.reservationId}`));
    
  }

  return (
    <>
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journ !== null ?
        [
          <JorneyDetail key={journ.journeyId} journey={journ} />,
          <SelectedSeat key={journ.autoSeat} number={journ.autoSeat} />
        ]
        : null}
    </main>
    
    <div className="controls container">
      <button onClick={handleBuy} className="btn btn--big" type="button">Rezervovat</button>
    </div>
    </>
  )
};
