import { useEffect } from "react";
import "./NearbyHospitals.css";

const NearbyHospitals = () => {
  useEffect(() => {
    window.open("https://www.google.com/maps/search/nearby+hospitals", "_blank");
  }, []);

  return (
    <div className="nearby-hospitals-page">
      <p>We've opened Google Maps in a new tab. You can return here any time.</p>
    </div>
  );
};

export default NearbyHospitals;
