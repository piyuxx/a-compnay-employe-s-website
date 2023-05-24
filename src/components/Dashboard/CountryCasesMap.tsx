import L from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useDashboard } from "../../hooks";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const CountryCasesMap: React.FC = () => {
  const { countryCases, countryCasesLoading } = useDashboard();

  if (countryCasesLoading) return null;

  return (
    <MapContainer
      center={[20, 77]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ width: "1084px", height: "520px" }}
      className="rounded-lg text-center my-5"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countryCases?.countryCases.map((country) => (
        <Marker
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Tooltip>
            <div>
              <strong>{country.country}</strong>
            </div>
            <div>Cases: {country.cases}</div>
            <div>Deaths: {country.deaths}</div>
            <div>Recovered: {country.recovered}</div>
            <div>Active: {country.active}</div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CountryCasesMap;
