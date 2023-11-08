import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import axios from "axios";
import BorrowedBooksCard from "./BorrowedBooksCard";


const BorrowedBooks = () => {
    const {user} = useContext(AuthContext)
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    console.log(user.email)

    useEffect(() => {
        axios.get(`http://localhost:5000/borrowedBooks?email=${user?.email}`)
        .then(res => {
            console.log(res.data)
            setBorrowedBooks(res.data);
        })
    }, [])
    return (
        <div className="grid grid-cols-5"> 
            {
                borrowedBooks.map(book => <BorrowedBooksCard
                key={book._Id}
                book={book}
                ></BorrowedBooksCard>)
            }
        </div>
    );
};

export default BorrowedBooks;