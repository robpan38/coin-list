import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import CoinList from './CoinList';
import { theme, ThemeContext } from './theme-context';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [tema, setTema] = useState(theme['dark']);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setCoins(response['data']);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  const handleSearchBar = (searchValue) => {
    if (searchValue === '') {
      setFilteredCoins(coins);
    }
    else {
      setFilteredCoins(coins.filter(coin => coin['name'].includes(searchValue)));
    }
  }

  const handleChangeTheme = () => {
    tema === theme['dark'] ? setTema(theme['light']) : setTema(theme['light']);
    console.log(tema);
  }

  return (
    <div className="App">
      <p>Search a currency</p>
      <ThemeContext.Provider value={tema}>
        <button onClick={handleChangeTheme}></button>
        <SearchBar handleSearchBar={handleSearchBar}></SearchBar>
        <CoinList coins={filteredCoins.length ? filteredCoins : coins}></CoinList>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
