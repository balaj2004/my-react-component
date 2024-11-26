import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Only allow females to register
    if (gender.toLowerCase() !== 'female') {
      alert('Sorry, this app is only available to females.');
      return;
    }

    // Register the user
    const newUser = { username, password, gender };
    onRegister(newUser);
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
