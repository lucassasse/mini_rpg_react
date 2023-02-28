import { Link } from 'react-router-dom'
import { usePlayer } from './usePlayer'
import '../styles/Header.css'

export const Header = () => {
  const { player } = usePlayer()

  return (
    <div className="container">
      <div className="phrase-container">
        <p className="phrase">Life: {player.life}</p>
        <p className="phrase">Food: {player.food}</p>
        <p className="phrase">Strength: {player.strength}</p>
        <p className="phrase">Money: $ {player.money}</p>
        <p className="phrase">Stamina: {player.stamina}</p>
        {/*<p className="phrase">Inventory:</p>*/}
        {
          <ul className="phrase">
            Inventory:
            {Object.entries(player.inventory)
              .filter(([itemName, item]) => item.quantity > 0)
              .map(([itemName, item]) => (
                <li key={itemName}>
                  {itemName}: {item.quantity}
                </li>
              ))}
          </ul>
        }
      </div>

      <div className="links-container">
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/store">
          Store
        </Link>
        <Link className="btn" to="/gym">
          Gym
        </Link>
        <Link className="btn" to="/work">
          Work
        </Link>
        <Link className="btn" to="/forest">
          Forest
        </Link>
      </div>
    </div>
  )
}
