import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {

    const [searchString, setSearchString] = useState('');

    return (
        <form onSubmit={onSearch}>
            <div className="input-group mb-3 row col-5">
                <input name='search' type="text" className="form-control" placeholder="Recipient's username" value={searchString}
                onChange ={e => setSearchString(e.target.value)} />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2" 
                disabled={!searchString}>Button</button>
            </div>
        </form>
    )
}

export default SearchForm;