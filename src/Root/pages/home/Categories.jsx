import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Title from "../../components/Title";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(res => {
                const data = res.data;
                setCategories(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto my-10">
            <Title
                title={"Browse Categories"}
                subTitle={"Explore our wide range of categories, from mysteries to science fiction, romance, and horror. Find your next captivating read and embark on a literary journey with us."}
            ></Title>

            <div className="grid grid-cols-4 gap-8">
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;