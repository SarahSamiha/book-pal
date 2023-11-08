import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBook = () => {

    const beforeUpdateBook = useLoaderData();
    const { _id, bookName, authorName, categoryName, quantityAvailable, rating, image } = beforeUpdateBook;

    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const categoryName = form.categoryName.value;
        const quantityAvailable = form.quantityAvailable.value;
        const rating = form.rating.value;
        const image = form.image.value;



        const updatedBook = { bookName, authorName, categoryName, quantityAvailable, rating, image}

        console.log(updatedBook);

        fetch(`https://book-pal-server.vercel.app/books/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div className=" min-h-screen bg-base-200 px-3 md:px-28 py-10">
            <h1 className=" text-5xl font-bold mb-6 text-center">Update Book</h1>
            <form onSubmit={handleUpdateBook} className="w-full space-y-6">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" name="bookName" defaultValue={bookName} placeholder="Book Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="authorName" defaultValue={authorName} placeholder="Author Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <div className="space-y-6">
                            <input type="text" name="categoryName" defaultValue={categoryName} placeholder="Category Name" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Cover Image URL</span>
                        </label>
                        <div className="space-y-6">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <div className="space-y-6">
                            <input type="number" name="quantityAvailable" defaultValue={quantityAvailable} placeholder="Available Quantity" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="space-y-6">
                            <input type="number" min="1" max="5" name="rating" defaultValue={rating} placeholder="Rating: 1 to 5" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </div>



                <input className="btn btn-primary btn-block lg:col-span-2" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateBook;