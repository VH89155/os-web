// import "../product/sanpham.css"
// import "../css/xuongmoc.css"
import BannerHome from "../../components/Web/home/bannerHome";
import AboutUs from "../../components/Web/home/aboutUs";
import NewHome from "../../components/Web/home/newsHome";

const Home = (props) => {
    // const {allProduct}=props;
    return ( 
        <>
        <BannerHome />
        <AboutUs />
        <NewHome />
        </>
     );
}
 
export default Home;