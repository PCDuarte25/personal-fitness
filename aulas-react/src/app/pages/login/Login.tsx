import { useState } from "react";

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}