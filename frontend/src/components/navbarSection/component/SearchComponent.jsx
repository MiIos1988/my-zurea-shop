import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const SearchComponent = () => {
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(searchValue)
    // }, [searchValue]
    // )

    const onSearch = () => {
        // console.log(searchValue)
        searchValue && navigate("/shop?search=" + searchValue)
    }


    return (
        <>
            <div className='search ' onClick={() => setShowSearchInput(!showSearchInput)}>

            </div>
            {
                showSearchInput ?
                    <div className='searchField d-flex'>
                        <input type="text" onChange={e => setSearchValue(e.target.value)} />
                        <button onClick={onSearch}>Search</button>
                    </div>
                    : null
            }
        </>

    )
}

export default SearchComponent
