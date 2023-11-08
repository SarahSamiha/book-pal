import axios from "axios";
import Swal from 'sweetalert2';


const AddBook = () => {
    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;

        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const categoryName = form.categoryName.value;
        const totalPages = form.totalPages.value;
        const demoReading = form.demoReading.value;
        const quantityAvailable = form.quantityAvailable.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;

        const newBook = {bookName, authorName, categoryName, totalPages, demoReading, quantityAvailable, rating, image, description};
        
        axios.post('http://localhost:5000/books', newBook)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Book Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        form.reset();
                    }
                })
                .catch(error => {
                    console.log(error);
                })

    }

    return (
        <div className=" min-h-screen bg-base-200 px-3 md:px-28 py-10">
            <h1 className=" text-5xl font-bold mb-6 text-center">Add a New Book</h1>
            <form onSubmit={handleAddBook} className="w-full space-y-6">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" name="bookName" placeholder="Book Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="authorName" placeholder="Author Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <div className="space-y-6">
                            <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <div className="space-y-6">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Pages</span>
                        </label>
                        <div className="space-y-6">
                            <input type="number" name="totalPages" placeholder="Total Pages" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <div className="space-y-6">
                            <input type="number" name="quantityAvailable" placeholder="Available Quantity" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="space-y-6">
                            <input type="number" min="1" max="5" name="rating" placeholder="Rating: 1 to 5" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>
                <div className="form-control w-full row-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <div className="space-y-6">
                        <textarea name="description" placeholder=" Short Description" className="textarea textarea-bordered h-40 w-full whitespace-pre-wrap" required></textarea>
                    </div>
                </div>
                <div className="form-control w-full row-span-2">
                    <label className="label">
                        <span className="label-text">Demo Reading</span>
                    </label>
                    <div className="space-y-6">
                        <textarea name="demoReading" placeholder="Demo Reading" className="textarea textarea-bordered h-40 w-full whitespace-pre-wrap" required></textarea>
                    </div>
                </div>

                <input className="btn btn-primary btn-block lg:col-span-2" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddBook;