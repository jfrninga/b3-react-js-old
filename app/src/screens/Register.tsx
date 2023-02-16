import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={async (event) => {
        event.preventDefault()
        try {
          const response = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, name })
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
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..." />
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  )
}