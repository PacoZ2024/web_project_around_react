import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    <form className="form" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Editar perfil</legend>
        <input
          id="name-input"
          className="form__field form__field-name"
          type="text"
          placeholder="Nombre"
          value={name}
          minLength="2"
          maxLength="40"
          required
          onChange={handleNameChange}
        />
        <span className="name-input-error form__field-error"></span>
        <input
          id="about-me-input"
          className="form__field form__field-about-me"
          type="text"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          value={description}
          required
          onChange={handleDescriptionChange}
        />
        <span className="about-me-input-error form__field-error"></span>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
