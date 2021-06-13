import './CoinList.css';
import {uuid} from 'uuidv4';
import { ThemeContext } from './theme-context';
import { useContext } from 'react';

const CoinList = (props) => {
    const theme = useContext(ThemeContext);

    let textStyle = {
        color: `rgb(${theme['text'][0]}, ${theme['text'][1]}, ${theme['text'][2]})`,
        'border-bottom': `2px rgb(${theme['text'][0]}, ${theme['text'][1]}, ${theme['text'][2]}) solid`
    };

    const elems = props.coins.map(coin => {
        return <tr key={uuid()} className="CoinTableRow">
            <td style={{'border-bottom': textStyle['border-bottom']}}><img src={coin['image']} width="20" height="20"></img></td>
            <td style={textStyle}>{coin['name']}</td>
            <td style={textStyle}>{coin['symbol']}</td>
            <td style={textStyle}>${coin['current_price'].toLocaleString()}</td>
            {coin['price_change_percentage_24h'] >= 0 ? <td style={{'border-bottom': textStyle['border-bottom']}} className="green">{coin['price_change_percentage_24h']}</td> : <td style={{'border-bottom': textStyle['border-bottom']}} className="red">{coin['price_change_percentage_24h']}</td>}
            <td style={textStyle}>${coin['market_cap'].toLocaleString()}</td>
            <td style={textStyle}>${coin['high_24h'] != null ? coin['high_24h'].toLocaleString() : coin['high_24h']}</td>
            <td style={textStyle}>${coin['low_24h'] != null ? coin['low_24h'].toLocaleString() : coin['low_24h']}</td>
        </tr>
    });

    return (
        <div className="CoinTableDiv">
            <table align="center" className="CoinTable">
                <tr>
                    <th></th>
                    <th style={{color: textStyle['color']}}>Name</th>
                    <th style={{color: textStyle['color']}}>Symbol</th>
                    <th style={{color: textStyle['color']}}>Current price</th>
                    <th style={{color: textStyle['color']}}>Price chg% [24h]</th>
                    <th style={{color: textStyle['color']}}>Market cap</th>
                    <th style={{color: textStyle['color']}}>High [24h]</th>
                    <th style={{color: textStyle['color']}}>Low [24h]</th>
                </tr>
                {elems}
            </table>
        </div>
    )
}

export default CoinList;