import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Link to="/login">Ir al Login</Link>
    </div>
  );
}


