import { useLocation } from "react-router-dom";

export default function Confirmation() {

  const location = useLocation();

  return (
    <div className="container">
      <h1>Thank You {location.state.name}!</h1>
      <p>You're now registered for Red30 Tech.</p>
      <p>We've sent more details to {location.state.email}</p>
    </div>
  );
}
