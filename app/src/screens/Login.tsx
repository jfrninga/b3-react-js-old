// Login.tsx

import { Title } from "../components/Title";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  // permet de changer l'url du navigateur
  const navigate = useNavigate()
   
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  return (
    <>
      <Title>Login</Title>
      <form onSubmit={async (event) => {
        // preventDefault nous aide a ne pas rafraichir la page
        event.preventDefault()
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
          })
          const data = await response.json()
          if (response.status >= 401 && response.status < 500) {
            setError(data.message)
            return
          }
          if (response.status >= 500) {
            setError("Something went wrong")
            return
          }
        } catch (e) {
          if (e instanceof Error) {
            setError(e.message)
          }
          return
        }
        navigate("/")
      }}>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Name" />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </>
  )
}
