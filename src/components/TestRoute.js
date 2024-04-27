import { Link } from "react-router-dom";

export default function TestRoute() {
  return (
    <div className="container">
      <h1>Parent Route</h1>
      <p>
        Our mission is to provide technology and business-driven solutions that
        work seamlessly with your company, allowing your employees, partners,
        and customers to engage in quality interactions that lead to scalable
        growth. We consistently work towards being the premier provider of
        environmentally sustainable technology solutions that connect the world.
      </p>
      <Link to="nested">Nested</Link>
    </div>
  );
}
