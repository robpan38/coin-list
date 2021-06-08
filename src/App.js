import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import CoinList from './CoinList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

  useEffect(() => {
    console.log('cocosel');
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
      console.log(filteredCoins.length);
    }
    else {
      setFilteredCoins(coins.filter(coin => coin['name'].includes(searchValue)));
      console.log(filteredCoins.length);
    }
  }

  return (
    <div className="App">
      <p>Cauta o criptomoneda barosane</p>
      <SearchBar handleSearchBar={handleSearchBar}></SearchBar>
      <CoinList coins={filteredCoins.length ? filteredCoins : coins}></CoinList>
    </div>
  );
}

export default App;
