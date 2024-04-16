import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h2>Oj då...</h2>
      <p>
        <Link to="/">Gå tillbaka</Link>
      </p>
    </div>
  );
}

export default NoMatch;
