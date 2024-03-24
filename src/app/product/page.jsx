import Navbar from "@/Components/ReusableComponet/Navbar";
import ProductFilter from "@/Components/ProductPageComponent/ProductFilter";
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection";
import Footer from "@/Components/ReusableComponet/Footer";


const Product = () => {
    
    return (
        <>
            <Navbar />
            <ProductFilter />
            <ProductListSection />
            <Footer />
        </>
    )
}
export default Product;