import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [nameMessageError, setNameMessageError] = useState("");
  const [descriptionMessageError, setDescriptionMessageError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.validity.valid);
    setNameMessageError(event.target.validationMessage);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setIsDescriptionValid(event.target.validity.valid);
    setDescriptionMessageError(event.target.validationMessage);
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
        <span className="name-input-error form__field-error">
          {nameMessageError}
        </span>
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
        <span className="about-me-input-error form__field-error">
          {descriptionMessageError}
        </span>
        <button
          className={`form__button ${
            isDescriptionValid && isNameValid ? "" : "form__button-disabled"
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={!(isDescriptionValid && isNameValid)}
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
