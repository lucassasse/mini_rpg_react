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

  const buyKnife = () => {
    if (player.money >= 5) {
      setPlayer({
        ...player,
        money: player.money - parseInt(player.inventory.knife.cost),
        inventory: {
          ...player.inventory,
          knife: {
            ...player.inventory.knife,
            quantity: player.inventory.knife.quantity + 1
          }
        }
      })
    }
  }

  const buySword = () => {
    if (player.money >= 10) {
      setPlayer({
        ...player,
        money: player.money - parseInt(player.inventory.sword.cost),
        inventory: {
          ...player.inventory,
          sword: {
            ...player.inventory.sword,
            quantity: player.inventory.sword.quantity + 1
          }
        }
      })
    }
  }

  const buyWaterGun = () => {
    if (player.money >= 100) {
      setPlayer({
        ...player,
        money: player.money - parseInt(player.inventory.waterGun.cost),
        inventory: {
          ...player.inventory,
          waterGun: {
            ...player.inventory.waterGun,
            quantity: player.inventory.waterGun.quantity + 1
          }
        }
      })
    }
  }

  const buyGun = () => {
    if (player.money >= 20) {
      setPlayer({
        ...player,
        money: player.money - parseInt(player.inventory.gun.cost),
        inventory: {
          ...player.inventory,
          gun: {
            ...player.inventory.gun,
            quantity: player.inventory.gun.quantity + 1
          }
        }
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1 className="title">STORE</h1>
      <button className="button" onClick={buyFood} disabled={player.money <= 0}>
        Buy food
      </button>
      <button className="button" onClick={buyKnife} disabled={player.money < 5}>
        Buy Knife
      </button>
      <button className="button" onClick={buySword} disabled={player.money < 5}>
        Buy Sword
      </button>
      <button
        className="button"
        onClick={buyWaterGun}
        disabled={player.money < 5}
      >
        Buy Water Gun
      </button>
      <button className="button" onClick={buyGun} disabled={player.money < 5}>
        Buy Gun
      </button>
    </div>
  )
}
