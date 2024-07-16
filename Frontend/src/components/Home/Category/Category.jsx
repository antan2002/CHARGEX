import "./Category.scss";
import image1 from '../../../assets/category/cat-1.png';
import image2 from '../../../assets/category/cat-2.jpg';
import image3 from '../../../assets/category/cat-3.jpg';
import image4 from '../../../assets/category/cat-4.jpg'

const Category = () => {


    return (
        <div className="category-list">
            <div className="categories">
                <div className="category">
                    <img src={image1} alt="img-1" />
                </div>
                <div className="category">
                    <img src={image2} alt="img-2" />
                </div>
                <div className="category">
                    <img src={image3} alt="img-3" />
                </div>
                <div className="category">
                    <img src={image4} alt="img-4" />
                </div>
            </div>

        </div >
    );
};

export default Category;
