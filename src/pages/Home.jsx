import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Home = () => {
  const { player, setPlayer } = usePlayer()

  const eat = () => {
    if (player.food > 0) {
      setPlayer({
        ...player,
        food: player.food - 1,
        life: player.life + 1
      })
    }
  }

  return (
    <div>
      <Header />
      <h1 className="title">HOME</h1>
      <button className="button" onClick={eat} disabled={player.food <= 0}>
        Eat
      </button>
    </div>
  )
}
