import { Link } from "react-router-dom";


const BorrowedBooksCard = ({book}) => {
    const { bookId, bookName, userName, email, image, authorName, categoryName} = book
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-7 pt-7">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center space-y-1">
                <h2 className="card-title text-xl font-bold">{bookName}</h2>
                <h2 className="text-lg font-semibold text-slate-600">{authorName}</h2>
                <div>category: {categoryName}</div>
                <div className="card-actions w-full">
                    <Link className='w-full' to={`/books/${bookId}`}><button className="btn btn-primary btn-block">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBooksCard;