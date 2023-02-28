import { useState } from 'react'
import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Forest = () => {
  const { player, setPlayer } = usePlayer()

  const [monster, setMonster] = useState(
    JSON.parse(localStorage.getItem('monster')) || {
      strength: 4,
      life: 6,
      number: 10
    }
  )

  function randomNumber(num) {
    return Math.floor(Math.random() * (num - 10) + 10)
  }

  const battle = () => {
    player.life -= monster.strength
    monster.life -= player.strength

    if (player.life <= 0) {
      alert('Lamento, a força do monstro foi maior que sua vida. Você morreu')
      window.location.reload()
      localStorage.clear()
    } else if (monster.life <= 0) {
      alert('Parabéns, você matou o monstro. Um mais forte apareceu!')
      setPlayer({ ...player, money: player.money + 10 })
      setMonster({
        ...monster,
        strength: (monster.strength = randomNumber(monster.number)),
        life: (monster.life = randomNumber(monster.number)),
        number: monster.number * 1.5
      })
      localStorage.setItem('monster', JSON.stringify(monster))
    } else {
      setPlayer({ ...player, life: player.life })
      setMonster({ ...monster, life: monster.life })
      localStorage.setItem('monster', JSON.stringify(monster))
    }
  }

  const usingItemInventory = itemName => {
    const updatedInventory = {
      ...player.inventory,
      [itemName]: {
        ...player.inventory[itemName],
        quantity: player.inventory[itemName].quantity - 1
      }
    }
    setPlayer({
      ...player,
      inventory: updatedInventory
    })
  }

  return (
    <div>
      <Header />
      <h1 className="title">FOREST</h1>
      <p>Monster strength: {monster.strength}</p>
      <button onClick={battle} className="button" disabled={player.money < 10}>
        Batle: 10 gold
      </button>
      <p>Monster Life: {monster.life}</p>
      {
        <div>
          {Object.entries(player.inventory)
            .filter(([itemName, item]) => item.quantity > 0)
            .map(([itemName, item]) => (
              <button
                className="btn"
                onClick={() => usingItemInventory(itemName)}
                key={itemName}
              >
                {itemName}: {item.quantity}
              </button>
            ))}
        </div>
      }
      <hr />
      <p>Sistema de batalhas em desenvolvimento!</p>
    </div>
  )
}
