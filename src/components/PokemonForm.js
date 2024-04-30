import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onSubmit}) {
const [formData, setFormData] = useState({
  name: "",
  hp: "",
  sprites: {
    front: "",
    back: ""
  }
})

function handleFormChange(e) {
  let data = {...formData}
const key = e.target.name
const value = e.target.value
if (key === "front" || key === "back"){
  data = {
    ...data,
    sprites: {
      ...data.sprites,
      [key] : value
    }
  }
}
else {
  data = {
    ...data,
    [key] : value
  }
}
setFormData(data)
}

function handleSubmit(e) {
e.preventDefault()
onSubmit(formData)
setFormData({
  name: "",
  hp: "",
  sprites: {
    front: "",
    back: ""
  }
})
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(e) => {handleSubmit(e)}}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name"
          value={formData.name} onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          value={formData.hp} onChange={handleFormChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
