// // AuthDropdown.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthChoice.css';

// const AuthDropdown = ({ type = 'signin' }) => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigate = (role) => {
//     navigate(`/${type}/${role}`);
//     setOpen(false);
//   };

//   return (
//     <div className="auth-dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
//       <button className="auth-dropdown-trigger">
//         {type === 'signin' ? 'Sign in' : 'Get Started'}
//       </button>
//       {open && (
//         <div className="auth-dropdown-menu">
//           <button className="dropdown-option provider" onClick={() => handleNavigate('doctor')}>
//             I'm a provider <span className="arrow">→</span>
//           </button>
//           <button className="dropdown-option patient" onClick={() => handleNavigate('patient')}>
//             I'm a patient <span className="arrow">→</span>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthDropdown;
