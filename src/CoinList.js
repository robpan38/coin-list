import './CoinList.css';
import {uuid} from 'uuidv4';

const CoinList = (props) => {
    const elems = props.coins.map(coin => {
        return <tr key={uuid()} className="CoinTableRow">
            <td><img src={coin['image']} width="20" height="20"></img></td>
            <td>{coin['name']}</td>
            <td>{coin['symbol']}</td>
            <td>${coin['current_price'].toLocaleString()}</td>
            {coin['price_change_percentage_24h'] >= 0 ? <td class="green">{coin['price_change_percentage_24h']}</td> : <td class="red">{coin['price_change_percentage_24h']}</td>}
            <td>${coin['market_cap'].toLocaleString()}</td>
            <td>${coin['high_24h'] != null ? coin['high_24h'].toLocaleString() : coin['high_24h']}</td>
            <td>${coin['low_24h'] != null ? coin['low_24h'].toLocaleString() : coin['low_24h']}</td>
        </tr>
    });

    return (
        <div className="CoinTableDiv">
            <table align="center" className="CoinTable">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current price</th>
                    <th>Price chg% [24h]</th>
                    <th>Market cap</th>
                    <th>High [24h]</th>
                    <th>Low [24h]</th>
                </tr>
                {elems}
            </table>
        </div>
    )
}

export default CoinList;