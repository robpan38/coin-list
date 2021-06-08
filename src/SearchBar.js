import { useEffect, useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const [continut, setContinut] = useState('');
    
    useEffect(() => {
        props.handleSearchBar(continut);
    }, [continut])

    const handleContinut = (e) => {
        setContinut(e.target.value);
    }

    return (
        <input className="SearchBar" type="text" onChange={handleContinut} value={continut}></input>
    )
}

export default SearchBar;