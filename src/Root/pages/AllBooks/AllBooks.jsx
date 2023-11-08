import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import AllBooksCard from "./AllBooksCard";


const AllBooks = () => {
    const books = useLoaderData();
    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto my-10">
            <Title
                title={"All Books"}
                subTitle={"Explore our wide range of Books, from mysteries to science fiction, romance, and horror. Find your next captivating read and embark on a literary journey with us."}
            ></Title>
            <div className="grid grid-cols-4 gap-8">
            {
                books.map(book => <AllBooksCard
                key={book._id}
                book={book}
                ></AllBooksCard>)
            }
            </div>
        </div>
    );
};

export default AllBooks;