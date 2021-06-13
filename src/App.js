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
    document.getElementById('body').style.backgroundColor = `rgb(${tema['background'][0]}, ${tema['background'][1]}, ${tema['background'][2]})`;
  }, [tema])

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
      searchValue = searchValue.toLowerCase();
      setFilteredCoins(coins.filter(coin => coin['name'].toLowerCase().includes(searchValue)));
    }
  }

  const handleChangeTheme = () => {
    tema === theme['dark'] ? setTema(theme['light']) : setTema(theme['dark']);
  }

  return (
    <div style={{'background-color': `rgb(${tema['background'][0]}, ${tema['background'][1]}, ${tema['background'][2]})`}} className="App">
      <button style={{'font-size': '1.5vw', background: 'rgb(63,94,251)', background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)', color: 'white'}} onClick={handleChangeTheme}>Change theme</button>
      <p style={{color: `rgb(${tema['text'][0]}, ${tema['text'][1]}, ${tema['text'][2]})`}}>Search a currency</p>
      <ThemeContext.Provider value={tema}>
        <SearchBar handleSearchBar={handleSearchBar}></SearchBar>
        <CoinList coins={filteredCoins.length ? filteredCoins : coins}></CoinList>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
