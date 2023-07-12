import React, { useState } from 'react'

const Search = ({setFood}) => {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setFood(search)
        setSearch("")
    }

    return (
        <form className="flex max-w-screen-2xl space-x-3 items-center h-full justify-center mt-16" 
                onSubmit={(e) => handleSubmit(e)}
        >
            <div className=" relative ">
                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" 
                placeholder="Enter dish name"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                autoComplete='off'
                />
            </div>
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200" type="submit">
                Search
            </button>
        </form>

    )
}

export default Search
