import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    life: 10,
    food: 10,
    strength: 5,
    money: 250,
    stamina: 5,
    inventory: {
      knife: { quantity: 5, strength: 5, cost: 5 },
      sword: { quantity: 1, strength: 20, cost: 10 },
      waterGun: { quantity: 0, strength: 1, cost: 100 },
      gun: { quantity: 2, strength: 50, cost: 20 },
      plasma: { quantity: 10, strength: 1000, cost: 1 }
    }
  })

  useEffect(() => {
    const localStoragePlayer = localStorage.getItem('player')
    if (localStoragePlayer) {
      setPlayer(JSON.parse(localStoragePlayer))
    }
  }, [])

  const updatePlayer = useCallback(newPlayer => {
    setPlayer(newPlayer)
    localStorage.setItem('player', JSON.stringify(newPlayer))
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer: updatePlayer
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
  //return { player, setPlayer: updatePlayer }
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used inside its provider')
  }
  return context
}
