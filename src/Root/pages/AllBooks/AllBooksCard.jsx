import { Link } from "react-router-dom";
import Rating from "../../components/Rating";


const AllBooksCard = ({book}) => {

        const { _id, bookName, authorName, rating, categoryName, image } = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-7 pt-7">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center space-y-1">
                <h2 className="card-title text-xl font-bold">{bookName}</h2>
                <h2 className="text-lg font-semibold text-slate-600 flex-1">{authorName}</h2>
                {/* <div className='grid grid-cols-2 items-center flex-1'> */}
                    <div>
                    <Rating
                        id={_id}
                        rating={rating}
                        ></Rating>
                    </div>
                    <div >Category: {categoryName}</div>
                {/* </div> */}
                <div className="card-actions w-full">
                    <Link className='w-full' to={`/updateBook/${_id}`}><button className="btn btn-primary btn-block">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllBooksCard;