import { Link, useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate()
  return (
    <nav
      style={{
        padding: '1rem',
        background: '#333',
        color: 'white'
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: 'white',
          textDecoration: 'none'
        }}>
        My Chat App
      </Link>
      <button type="submit" onClick={async () => {
        await fetch("/api/logout", {method: "POST"})
        navigate("/login")
      }}
        style={{ 
          marginLeft: '1rem',
          cursor: 'pointer',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          background: 'none',
        }}
        >logout</button>
    </nav >
  );
}
