import { useLoaderData } from "react-router-dom";
import Rating from "../../components/Rating";
import TextBreaker from "../../components/TextBreaker";


const BookDetails = () => {
    const book = useLoaderData();
    const { _id, bookName, authorName, categoryName, totalPages, demoReading, quantityAvailable, rating, image, description } = book;

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
                        {description.split('\n').map((text, index) => <TextBreaker
                            key={index}
                            text={text}
                        ></TextBreaker>)}
                    </div>
                    <div className="py-12 ">
                        <button className="btn btn-outline hover:text-white btn-primary btn-block ">Want to Read</button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary px-12 btn-block text-white mt-6" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;