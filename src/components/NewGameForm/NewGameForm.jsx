import { useState } from "react"
import PropType from "prop-types"
import TextInput from "../TextInput/TextInput"

NewGameForm.propType = {
  addGame: PropType.func
}

export default function NewGameForm({ addGame }) {
  const [title, setTitles] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addGame({ title, cover })
    setTitles("")
    setCover("")
  }


  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label={"Titulo:"}
        value={title}
        setValue={setTitles}
      />
      <TextInput
        label={"Imagem:"}
        value={cover}
        setValue={setCover}
      />
      <button>Adicionar a Biblioteca</button>
    </form>
  )
}