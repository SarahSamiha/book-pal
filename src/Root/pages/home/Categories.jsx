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
        <div>
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