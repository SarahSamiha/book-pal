import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import BookCard from "../../components/BookCard";


const BooksByCategory = () => {
    const category = useLoaderData();
    const { categoryName, image1, image2, image3 } = category;
    const [booksByCategory, setBooksByCategory] = useState([]);

    const url = `https://book-pal-server.vercel.app/books?categoryName=${category?.categoryName}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBooksByCategory(res.data);
            })
    }, [])

    console.log(booksByCategory);

    return (
        <div>
            <Banner
                image1={image1}
                image2={image2}
                image3={image3}
                message1={categoryName}
                message2={categoryName}
                message3={categoryName}
            ></Banner>

            <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {
                    booksByCategory.map(book => <BookCard
                        key={book._id}
                        book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksByCategory;