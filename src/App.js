import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h2>My Own Data: {users.length}</h2>
      {users.map(user => (
        <li key={user.id}>
          Name:{user.name} Mail: {user.email}
        </li>
      ))}
    </div>
  );
}

export default App;
