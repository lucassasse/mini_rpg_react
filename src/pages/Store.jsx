import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Store = () => {
  const { player, setPlayer } = usePlayer()

  const buyFood = () => {
    if (player.money > 0) {
      setPlayer({
        ...player,
        food: player.food + 1,
        money: player.money - 1
      })
    }
  }

  const buyItem = item => {
    setPlayer({
      ...player,
      money: player.money - item.cost,
      inventory: {
        ...player.inventory,
        item: {
          ...player.inventory.item,
          quantity: item.quantity + 1
        }
      }
    })
    console.log('player.inventory', player.inventory)
    console.log('item.quantity', item.quantity)
    console.log('item.cost', item.cost)
    console.log('item', item)
  }

  return (
    <div>
      <Header player={player} />
      <h1 className="title">STORE</h1>
      <button className="button" onClick={buyFood} disabled={player.money <= 0}>
        Buy food
      </button>
      {Object.entries(player.inventory).map(([itemName, item]) => (
        <button
          className="button"
          key={itemName}
          disabled={player.money < item.cost}
          onClick={() => buyItem(item)}
        >
          BUY {itemName} - $ {item.cost}
        </button>
      ))}
    </div>
  )
}
