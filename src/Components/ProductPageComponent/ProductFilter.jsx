"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] })
const ProductFilter = () => {
    return (
        <>
            <div className="px-[5%] lg:pt-[10%] pt-[40%]  flex flex-col justify-center items-center w-full">
                <h2 className={pacifico.className + " lg:mb-6 mb-4 text-3xl text-center lg:text-5xl text-[#C21C20]"}>
                   Sweet and More
                </h2>

                <form className="w-full lg:mb-6 mb-4">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm  border border-[#C21C20] rounded-lg bg-gray-50  focus:border-[#C21C20] focus:outline-none " placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#C21C20]   -300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default ProductFilter