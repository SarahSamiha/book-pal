import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating";
import TextBreaker from "../../components/TextBreaker";
import { useContext} from "react";
import { AuthContext } from "../../../auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const BookDetails = () => {
    const book = useLoaderData();
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const { _id, bookName, authorName, categoryName, totalPages, demoReading, quantityAvailable, rating, image, description } = book;

    // const [returnDate, setReturnDate] = useState('');

    // const handleDateInput = e => {
    //     e.preventDefault();
    //     setReturnDate(e.target.value);
    // }
    const handleSubmit = () => {
        // if (returnDate) {
            const newBorrowedBook = {
                bookId: _id,
                bookName,
                userName: displayName,
                email,
                image,
                authorName,
                categoryName,
            }

            axios.post('https://book-pal-server.vercel.app/borrowedBooks', newBorrowedBook)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Book Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                // setReturnDate('')
        // }



    }

    return (
        <div className="bg-base-100">
            <div className="bg-primary bg-opacity-10 max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto my-10 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <div className="bg-base-100 shadow-xl rounded-xl p-12 m-12">
                        <img className="w-full" src={image} alt="" />
                    </div>
                </div>
                <div className="m-12 space-y-2">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <h2 className="text-3xl font-semibold text-slate-500">{authorName}</h2>
                    <p className="text-lg">Category: {categoryName}</p>
                    <div className="flex gap-3 items-center text-lg">
                        <p>Rating: {rating}.00</p><Rating id={_id} rating={rating}></Rating>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                        <p>{totalPages} pages</p>
                        <p>Available: {quantityAvailable}</p>
                    </div>
                    <div>
                        {description?.split('\n').map((text, index) => <TextBreaker
                            key={index}
                            text={text}
                        ></TextBreaker>)}
                    </div>
                    <div className="py-12 ">
                        <button className="btn btn-outline hover:text-white btn-primary btn-block ">Want to Read</button>
                        <button onClick={handleSubmit} className="btn btn-primary px-12 btn-block text-white mt-6">Borrow</button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn btn-primary px-12 btn-block text-white mt-6" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button> */}


                        {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box grid">
                                <h3 className="font-bold text-xl text-secondary pb-6">{bookName}</h3>
                                <form method="dialog">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input onChange={handleDateInput} type="date" name="returnDate" className="input input-bordered w-full max-w-xs" />
                                    <input className="btn btn-primary px-12 btn-block text-white m-3" type="submit" value="Confirm" required />
                                </form>
                            </div>
                        </dialog> */}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;