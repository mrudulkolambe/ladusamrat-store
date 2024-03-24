"use client"
import { Pacifico, Nunito } from "next/font/google";
import { useCallback, useEffect, useMemo, useState } from "react";
const nunito = Nunito({ subsets: ['latin'], weight: ["400"] })
import { useCart } from "react-use-cart";
import { ShoppingBag } from "lucide-react"

const ProductViewSection = ({ product }) => {
    const { addItem, items, updateItemQuantity } = useCart();
    const [variant, setVariant] = useState({ variantName: "250gm", id: `1__${product?._id}`, price: product?.price, variantID: product?._id, weight: 250 });
    const [cart, setCart] = useState();

    useEffect(() => {
        let cartItems = items.filter((item) => {
            console.log(item)
            console.log(variant)
            return variant.id == item.id
        })
        if (cartItems.length == 0) {
            setCart()
        } else {
            console.log(cartItems[0])
            setCart(cartItems[0]);
        }
    }, [items, variant])

    return (
        <>
            <div className="pt-[40%] lg:pt-[10%] pb-[4%] px-[5%] flex flex-col lg:flex-row w-full  items-center gap-10">
                <div className="lg:w-[50%] w-full">
                    <img className="w-full" src={product?.image} />
                </div>
                <div className="lg:w-[50%] py-4 lg:py-0 w-full flex flex-col gap-4">
                    <h2 className={nunito.className + " text-3xl text-[#C21C20]"}>
                        {product?.name}
                        <p>{product?.price}</p>
                    </h2>
                    <div>
                        <button type="button" onClick={() => setVariant({ weight: 250, variantID: product?._id, variantName: "250gm", id: `1__${product?._id}`, price: product.price })} className={variant.variantName == "250gm" ? "text-white border-2 border-red-700 bg-red-700 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2" : "text-black border-2 border-red-700 bg-white font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2"} >250gm</button>
                        <button type="button" onClick={() => setVariant({ weight: 250 * 2, variantID: product?._id, variantName: "500gm", id: `2__${product?._id}`, price: product.price * 2 })} className={variant.variantName == "500gm" ? "text-white border-2 border-red-700 bg-red-700 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2" : "text-black border-2 border-red-700 bg-white font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2"} >500gm</button>
                        <button type="button" onClick={() => setVariant({ weight: 250 * 4, variantID: product?._id, variantName: "1kg", id: `3__${product?._id}`, price: product.price * 4 })} className={variant.variantName == "1kg" ? "text-white border-2 border-red-700 bg-red-700 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2" : "text-black border-2 border-red-700 bg-white font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2"} >1kg</button>
                    </div>
                    <p className={nunito.className + " font-semibold"}>
                        {product?.description}
                    </p>
                    <div className="w-72">
                        {cart && <div class="flex items-center">
                            <button onClick={() =>
                                updateItemQuantity(cart?.id, cart?.quantity - 1)
                            } className="inline-flex items-center justify-center h-8 w-8 p-1 rounded-full me-3 text-sm font-medium bg-white border-2 border-red-700 text-red-700 focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <div>
                                <input type="number" value={cart?.quantity} id="first_product" className="font-bold text-center bg-gray-50 w-14 px-3 py-2 border-2 border-red-700 text-gray-900 text-sm rounded-lg" placeholder="1" required />
                            </div>
                            <button onClick={() =>
                                updateItemQuantity(cart?.id, cart?.quantity + 1)
                            } className="inline-flex items-center justify-center h-8 w-8 p-1 rounded-full ms-3 text-sm font-medium bg-white border-2 border-red-700 text-red-700 focus:outline-none  focus:ring-4 focus:ring-gray-200 " type="button">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>}
                        {!cart && <div onClick={() => {
                            addItem({ item: product, varaiation: variant.variantName, id: `${variant.id?.toString()}`, elementID: product?._id, price: variant.price, title: product.name, image: product.image, weight: variant.weight });
                        }} className="border-2 border-red-700 px-4 py-2 w-max rounded-xl bg-white">
                            <ShoppingBag />
                        </div>}
                    </div>
                </div >
            </div >
        </>
    )

}
export default ProductViewSection;