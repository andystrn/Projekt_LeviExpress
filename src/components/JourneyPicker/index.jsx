import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const[toCity, setToCity] = useState('');
  const[date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.results));
  }, []);

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
    .then(response => response.json())
    .then(data => setDates(data.results));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromCity, toCity, date);
  }

  const CityOptions = ( {cities} ) => {
    return (
        <>
          <option value="">Vyberte</option>
          {cities.map(d => <option key={d.code} value={d.code}>{d.name}</option>)}     
        </>
    )
}

  const DatesOptions = ({ dates }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {dates.map(d => <option key={d.dateBasic} value={d.dataBasic}>{d.dateCs}</option>)}     
      </>
  )
  }

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
              <option value="">Vyberte</option>
              <CityOptions cities={cities}/>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities}/>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
            > 
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
    )
};
