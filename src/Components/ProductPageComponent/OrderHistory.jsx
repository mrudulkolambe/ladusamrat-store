"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })
import Navbar from "@/Components/ReusableComponet/Navbar"
import ProductListTabel from "@/Components/CartPageComponent/CartProducts"
import Footer from "@/Components/ReusableComponet/Footer"
const OrderHistory = () => {
    return (
        <>
            <Navbar />
            <h2 className={pacifico.className + " pt-[20%] lg:pt-[5%] pb-[4%] lg:pb-[2%] text-3xl text-center lg:text-5xl text-[#C21C20]"}>
                Order History
            </h2>
            <div class="relative overflow-x-auto  pb-[10%] lg:pb-[5%] w-full  px-[5%]">

                <table class="w-full overflow-scroll text-sm text-left rtl:text-right text-gray-500 rounded-md ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" class="px-16 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td class="p-4">
                                <img src="/Assets/dummy.png" class=" md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 ">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900">
                                100
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default OrderHistory