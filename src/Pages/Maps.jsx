import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
  const [countriesData, setCountriesData] = useState([]);
  const position = [51.505, -0.09];

  useEffect(() => {
    async function fetchCountriesData() {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCountriesData();
  }, []);

  return (
    <div>
      <MapContainer center={position} zoom={3} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesData.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
