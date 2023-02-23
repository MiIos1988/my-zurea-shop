import React, { useState } from 'react'

const SearchElementComponent = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    return (
        <>
            <div className="search" onClick={() => setShowSearchInput(!showSearchInput)}>

            </div>
            {
                showSearchInput ?
                    <div className="searchElement " >
                        <input type="text" placeholder='Search our catalog' />
                        <div></div>
                    </div>
                    : null
            }
        </>

    )
}

export default SearchElementComponent
