import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Gym = () => {
  const { player, setPlayer } = usePlayer()

  const training = () => {
    if (player.money > 0) {
      setPlayer({
        ...player,
        strength: player.strength + 1,
        money: player.money - 1
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1 className="title" >GYM</h1>
      <button
        className="button"
        onClick={training}
        disabled={player.money <= 0}
      >
        Training
      </button>
    </div>
  )
}
