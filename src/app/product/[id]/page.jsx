"use client"
import Navbar from "@/Components/ReusableComponet/Navbar"
import ProductViewSection from "@/Components/ProductDetailComponent/ProductViewSection"
import ProductListSection from "@/Components/ProductPageComponent/ProductLisSection"
import Footer from "@/Components/ReusableComponet/Footer"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import axios from "axios"
const SingleProduct = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState();
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`)
            .then((res) => {
                setProductDetails(res.data.product)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [])
    return (
        <>
            <Navbar />
            <ProductViewSection key={productDetails?.toString()} product={productDetails}/>
            <ProductListSection />
            <Footer />
        </>
    )
}
export default SingleProduct
