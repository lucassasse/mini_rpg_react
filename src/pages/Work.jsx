import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Work = () => {
  const { player, setPlayer } = usePlayer()

  const work = () => {
    if (player.life > 1) {
      setPlayer({
        ...player,
        money: player.money + 2,
        life: player.life - 1
      })
    } else {
      alert('Player morto! O game irá ser reiniciado.')
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1 className="title">WORK</h1>
      <button className="button" onClick={work}>
        Work
      </button>
    </div>
  )
}
