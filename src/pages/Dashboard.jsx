import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard interno</h1>
      <p>Bienvenido al panel privado.</p>
      <Link to="/">Volver a Inicio</Link>
    </div>
  );
}



