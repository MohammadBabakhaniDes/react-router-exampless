import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "../data/data";

const Book = ()=> {
    const param = useParams();
    const book = getBook(parseInt(param.bookId));
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <main style={{padding:'1rem'}}>
            <h2>قیمت کتاب {book.amount}</h2>
            <p>{book.name}</p>
            <p>تاریخ انتشار {book.due}</p>
            <p>
                <button onClick={()=> {
                    deleteBook(book.number);
                    navigate(`/books/${location.search}`);
                }}>
                    حذف کتاب
                </button>
            </p>
        </main>
    )












    // const param = useParams();
    // const book = getBook(parseInt(param.bookId));
    // const navigate = useNavigate();
    // const location = useLocation();

    // if(book) {
    // return(
    //     <div>
    //         <main style={{padding:'1rem'}}>
    //             <h2>قیمت کتاب : {book.amount}</h2>
    //             <p>{book.name}</p>
    //             <p>{`تاریخ انتشار : ${book.due}`}</p>
    //             <p>
    //                 <button onClick={()=> {
    //                     deleteBook(book.number);
    //                     navigate(`/books${location.search}`);
    //                 }}>حذف کتاب</button>
    //             </p>
    //         </main>
    //     </div>
    // );
    // }
    // else{
    //     return (
    //         <div>کتاب شما یافت نشد</div>
    //     )
    // }
}


















// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { getBook, deleteBook } from "../data/data";


// const Book = ()=> {
//     const param = useParams();
//     const book = getBook(parseInt(param.bookId));
//     const navigate = useNavigate();
//     const location = useLocation();

//     if(book) {
//         return (
//             <div>
//                 <main style={{padding:'1rem'}}>
//                     <h2>{`قیمت کل : ${book.amount}`}</h2>
//                     <p>{book.name}</p>
//                     <p>{`تاریخ انتشار : ${book.due}`}</p>
//                     <p>
//                         <button onClick={
//                             ()=> {
//                                 deleteBook(book.number);
//                                 navigate('/books'+ location.search);
//                             }
//                         }>حذف کتاب</button>
//                     </p>
//                 </main>
//             </div>
//         );
//     }

//     else {
//         return (
//             <div>
//                 <main style={{padding:'1rem'}}>
//                     <h2>همچین کتابی یافت نشد براگم.</h2>
//                 </main>
//             </div>
//         );
//     }
    
// }

export default Book;

