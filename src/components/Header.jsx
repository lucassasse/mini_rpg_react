import { Link } from 'react-router-dom'
import { usePlayer } from './usePlayer'
import '../styles/Header.css'

export const Header = () => {
  const { player } = usePlayer()

  const playerWithoutInventory = {
    ...player
  }
  delete playerWithoutInventory.inventory

  return (
    <div className="container">
      <div className="phrase-container">
        {Object.entries(playerWithoutInventory).map(([stats, quantum]) => (
          <p className="phrase" key={stats}>
            {stats}: {quantum}
          </p>
        ))}
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
