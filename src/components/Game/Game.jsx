import styles from "./styles.module.css"
import PropTypes from "prop-types"

Game.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  gameRemove: PropTypes.func
}

export default function Game({ title, cover, gameRemove }) {
  return (<div className={styles.games}>
    <img src={cover} alt={title} />
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={gameRemove}>Remover</button>
      </div>
    </div>
  </div>
  )
}