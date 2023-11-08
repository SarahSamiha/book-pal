import PropTypes from 'prop-types';
import Rating from './Rating';

const BookCard = ({ book }) => {
    console.log(book)
    const { _id, bookName, authorName, rating, categoryName, image } = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-7 pt-7">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center space-y-1">
                <h2 className="card-title text-xl font-bold">{bookName}</h2>
                <h2 className="text-lg font-semibold text-slate-600">{authorName}</h2>
                <div className='grid grid-cols-2 items-center flex-1'>
                    <div>
                    <Rating
                        id={_id}
                        rating={rating}
                        ></Rating>
                    </div>
                    <div className='badge badge-outline' >{categoryName}</div>
                </div>
                <div className="card-actions w-full">
                    <button className="btn btn-primary btn-block">Details</button>
                </div>
            </div>
        </div>
    );
};
BookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BookCard;