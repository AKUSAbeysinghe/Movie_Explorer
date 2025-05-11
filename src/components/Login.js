// // // src/components/Login.js
// // import React, { useState } from 'react';

// // function Login({ onLogin }) {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Dummy login check
// //     if (username === 'admin' && password === 'admin') {
// //       onLogin(); // Calls a function passed from App to switch screens
// //     } else {
// //       alert('Invalid credentials!');
// //     }
// //   };

// //   return (
// //     <div style={{ marginTop: '100px' }}>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         /><br/><br/>
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         /><br/><br/>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from 'react';
// import './Login.css';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For demo purposes; replace with real authentication logic
//     if (username === 'admin' && password === 'password') {
//       onLogin(true);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');  // State for handling error message

//   // Hardcoded credentials for the demo (you can replace this with real authentication logic)
//   const correctUsername = 'user123';
//   const correctPassword = 'password123';

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if the entered username and password match the correct credentials
//     if (username === correctUsername && password === correctPassword) {
//       setError('');  // Clear error if credentials are correct
//       // Redirect to the main app page (or dashboard)
//       window.location.href = '/';  // Example: redirect to home page after successful login
//     } else {
//       setError('Invalid Credentials, please try again!');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
        
//         {error && <p className="error-message">{error}</p>}  {/* Display error message if credentials are incorrect */}
        
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();  // Use useNavigate hook for redirection

  // Hardcoded credentials for the demo
  const correctUsername = 'URU';
  const correctPassword = 'Abc';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      setError('');
      navigate('/home');  // Redirect to the home page (main page) after successful login
    } else {
      setError('Invalid Credentials, please try again!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        {error && <p className="error-message">{error}</p>}  {/* Display error message if credentials are incorrect */}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
