import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gray-700 text-white text-center">
      <h2 className="text-4xl">Hoppsan, sidan hittades inte!</h2>
      <p>Sidan du försökte nå finns inte.</p>
      <p>
        Gå tillbaka till{" "}
        <Link to="/" className="text-purple-400 hover:text-pink-400">
          Hem
        </Link>
      </p>
    </div>
  );
}
