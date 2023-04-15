import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Books from './Component/Books';
import About from './Component/About';
import Book from './Component/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/books' element={<Books />}>
              <Route index element={<h2>کتاب مورد نظر را انتخاب کنید</h2>} />
              <Route path=':bookId' element={<Book />} />
            </Route>
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<h1>eror 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );












// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Books from './Component/Books';
// import About from './Component/About';
// import Book from './Component/Book';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />}>
//           <Route path='/books' element={<Books />}>
//             <Route index element={
//               <main style={{padding:'1rem'}}>
//                 <p>کتاب مورد نظر خود را انتخاب نمایید</p>
//               </main>
//             } />
//             <Route path=':bookId' element={<Book />} />
//           </Route>
//           <Route path='/about' element={<About />} /> 
//           <Route path='*' element={
//             <main style={{padding:'1rem'}}>
//               <p>کشتم نبود نگرد نیست.</p>
//             </main>
//           } />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

