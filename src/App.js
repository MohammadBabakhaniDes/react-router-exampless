import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <h1>کتابخانه من</h1>
      <nav style={{paddingBottom:' 1rem', borderBottom:'solid 1px'}}>
        <Link to="/books">Books</Link>  {' '}
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}




















// import { Link, Outlet} from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//         <h1>کتابخانه من</h1>
//         <nav style={{borderBottom:'solid 1px', paddingBottom:'1rem'}}>
//           <Link to={"/books"}>Books</Link> {' '}
//           <Link to={"/about"}>About</Link>
//         </nav>                            
//         <Outlet />
//     </div>
//   );
// }

export default App;
