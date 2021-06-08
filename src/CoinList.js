import './CoinList.css';

const CoinList = (props) => {
    const elems = props.coins.map(coin => {
        return <tr key={coin['symbol']} className="CoinTableRow">
            <td><img src={coin['image']} width="16" height="16"></img></td>
            <td>{coin['name']}</td>
            <td>{coin['symbol']}</td>
            <td>{coin['current_price']}</td>
            <td>{coin['price_change_percentage_24h']}</td>
            <td>{coin['market_cap']}</td>
            <td>{coin['high_24h']}</td>
            <td>{coin['low_24h']}</td>
        </tr>
    });

    return (
        <div className="CoinTableDiv">
            <table className="CoinTable">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current price</th>
                    <th>Price change %[24h]</th>
                    <th>Market cap</th>
                    <th>High_24h</th>
                    <th>Low_24h</th>
                </tr>
                {elems}
            </table>
        </div>
    )
}

export default CoinList;