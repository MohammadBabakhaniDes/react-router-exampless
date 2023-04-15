import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { getBooks } from '../data/data';

const Books = ()=> {
    const books = getBooks();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{display: 'flex'}}>
            <nav style={{padding:'1rem', borderLeft:'1px solid'}}>
                <input type="text"
                 value={searchParams.get('filter')}
                 onChange={(e)=> {
                    let filter = e.target.value;
                    if(filter)
                        setSearchParams({filter});
                    else 
                        setSearchParams({});
                 }}
                 />

                 {
                    books.filter((book)=> {
                        let filter = searchParams.get('filter');
                        if(filter) {
                            let name = book.name.toLocaleLowerCase();
                            return name.startsWith(filter.toLowerCase());
                        }
                        else {return true}
                    }).map((book)=> (
                        <NavLink style={({isActive})=> {
                            return {
                                display: 'block',
                                margin: '1rem 0',
                                color: isActive ? 'red' : ''
                            }
                        }}
                         to={`/books/${book.number}/${location.search}`}>{book.name}</NavLink>
                    ))
                 }
            </nav>
            <Outlet />
        </div>
    )














    // const books = getBooks();
    // const location = useLocation();
    // const [searchParams, setSearchParams] = useSearchParams();

    // return(
    //     <div style={{display:'flex'}}>
    //         <nav style={{padding:'1rem', borderLeft:'1px solid'}}>
    //             <input type="text" placeholder='جستوجوی کتاب'
    //              value={searchParams.get('filter') || ""}
    //              onChange={
    //                 (event)=> {
    //                     let filter = event.target.value;
    //                     if(filter)
    //                         setSearchParams({filter});            
    //                     else 
    //                         setSearchParams({});
    //                 }
    //              } />
    //              {
    //                 books.filter(book=> {
    //                     let filter = searchParams.get('filter');
    //                     if(filter){
    //                         let name = book.name.toLowerCase();
    //                         return name.startsWith(filter.toLowerCase());
    //                     }
    //                     else {return true}
    //                 }).map(book=> (
    //                     <NavLink style={({isActive})=> {
    //                         return {
    //                             display:'block',
    //                             margin:'1rem 0',
    //                             color: isActive? 'red':''
    //                         }
    //                     }}
    //                      to={`/books/${book.number}${location.search}`}>{book.name}</NavLink>
    //                     ))  
    //              }
    //         </nav>
    //         <Outlet/>
    //     </div>
    // );
}


















// import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";
// import { getBooks } from "../data/data";
                                               
// const Books = ()=> {
//     const books = getBooks();
//     const [searchParams, setSearchParams] = useSearchParams();
//     const location = useLocation();

//     return(
//         <div style={{display:'flex'}}> 
//             <nav style={{padding:'1rem', borderLeft:'1px solid'}}>
//                 <input value={searchParams.get('filter') || ''} 
//                  onChange={event => {
//                     let filter = event.target.value;
//                     if(filter) {
//                         //setSearchParams({filter : filter});    object shorthand
//                         setSearchParams({filter});
//                     }
//                     else {
//                         setSearchParams({});
//                     }
//                  }}
//                  type="text" placeholder="جستجوی کتاب" />
//                 {
//                     books.filter(book=> {
//                         let filter = searchParams.get('filter');
//                         if(filter) {
//                             let name = book.name.toLowerCase();
//                             return name.startsWith(filter.toLowerCase());
//                         }
//                         else {
//                             return true;
//                         }
//                     }
//                     ).map(book=> (
//                     <NavLink style={({isActive})=> {  
//                         return {
//                             display:'block',
//                             margin: '1rem 0',
//                             color: isActive?'red':''
//                         }
//                     }} to={`/books/${book.number}${location.search}`}>                             
//                         {book.name}
//                     </NavLink>
//                 ))}
//             </nav>
//             <Outlet />
//         </div>
//     );
// }
export default Books;