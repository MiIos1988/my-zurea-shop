import React, { useEffect, useState } from 'react'

const SearchComponent = () => {
    const [showSearchInput, setShowSearchInput] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue]
    )

    const onSearch = () => {
        console.log("work")
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
