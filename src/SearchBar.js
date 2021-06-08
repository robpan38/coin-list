import { useState } from "react";
import './SearchBar.css';

const SearchBar = (props) => {
    const [continut, setContinut] = useState('');
    
    const handleContinut = (e) => {
        console.log(e.target.value);
    }

    return (
        <input className="SearchBar" type="text" onChange={handleContinut}></input>
    )
}

export default SearchBar;