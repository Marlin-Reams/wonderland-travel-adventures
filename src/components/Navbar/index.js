import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './result.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">

      <div className="container-fluid">
        <div>
          <Link to='/'>
            <img src={logo}  alt="logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-brand logo-text">Wonderland Travel Adventures</div>

        {/* Full screen navbar */}
        <div className="navbar-collapse d-none d-xl-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plan-a-trip">Plan a Trip</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/questions">Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">About Me</Link>
            </li>
          </ul>
        </div>

        {/* Menu button for small screens
        <button className="navbar-toggler d-xl-none" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsed navbar for small screens */}
        {/* <div className={`collapse navbar-collapse d-xl-none ${showMenu ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plan-a-trip">Plan a Trip</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/questions">Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">About Me</Link>
            </li>
          </ul>
        </div> */}

      </div>

    </nav>
  );
};

export default Navbar;


// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from './result.png'

// const Navbar = () => {

//   useEffect(() => {
//     const menuButton = document.querySelector('.navbar-toggler');
//     const menuCollapse = document.querySelector('.navbar-collapse');

//     menuButton.addEventListener('click', function() {
//       menuCollapse.classList.toggle('show');
//     });
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-xl navbar-dark bg-dark">

//       <div className="container-fluid">
//       <div>
//         <Link to='/'>
//     <img src={logo}  alt="logo" className="logo" />
//     </Link>
//     </div>
//         <div className="navbar-brand logo-text">Wonderland Travel Adventures</div>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/plan-a-trip">Plan a Trip</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/questions">Questions</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about-me">About Me</Link>
//             </li>
//           </ul>
//         </div>

//       </div>


//     </nav>

//   );
// };

// export default Navbar;
