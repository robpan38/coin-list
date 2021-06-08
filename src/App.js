import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import CoinList from './CoinList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

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

  return (
    <div className="App">
      <p>Cauta o criptomoneda barosane</p>
      <SearchBar></SearchBar>
      <CoinList coins={coins}></CoinList>
    </div>
  );
}

export default App;
