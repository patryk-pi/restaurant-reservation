"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import NavBar from "../components/NavBar";
import SearchHeader from "./components/SearchHeader";
import SearchSideBar from "./components/SearchSideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";

const Search = () => {
    const router = useRouter();
    const [location, setLocation] = useState()
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <NavBar/>
                {/* HEADER */}
                <SearchHeader/>
                <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                    <SearchSideBar/>
                    <div className="w-5/6">
                        <SearchRestaurantCard/>
                    </div>
                </div>
            </main>
        </main>

    )
}

export default Search;