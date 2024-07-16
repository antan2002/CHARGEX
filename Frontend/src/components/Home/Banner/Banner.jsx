import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.jpeg'

const Banner = () => {
    return <div className="banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE!</h1>
                <p>
                    It’s time for a new generation of personal fast transportation. We’re reinventing the bright future.
                </p>
                <div className="ctas">
                    <div className="bannar-cta">READ MORE</div>
                    <div className="bannar-cta v2">SHOP</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />
        </div>
    </div>

};

export default Banner;
