import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const DhakaMap = () => {
    const dhakaCoordinates = [23.8103, 90.4125]; // Latitude and Longitude of Dhaka

    return (
        <>
        <div>
            <h2 className='text-4xl mb-4  font-bold text-center'>Hotel&apos;s Map </h2>
        </div>
        <MapContainer center={dhakaCoordinates} zoom={13} scrollWheelZoom={false} style={{ height: "80vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={dhakaCoordinates}>
                <Popup>
                    Dhaka, Bangladesh <br /> The capital city!
                </Popup>
            </Marker>
        </MapContainer>
        </>
    );
};

export default DhakaMap;
