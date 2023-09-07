import useGameCollection from "./hooks/useGameCollection"
import Game from "./components/Game/Game"
import NewGameForm from "./components/NewGameForm/NewGameForm"

export default function App() {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div>
      <h1>Meus Jogos</h1>
      <NewGameForm
        addGame={addGame}
      />
      <div className="gameContainer">
        {games.map((game) => (
          <Game
            key={game.id}
            cover={game.cover}
            gameRemove={() => removeGame(game.id)}
            title={game.title}
          />
        ))}
      </div>
    </div >
  )
}