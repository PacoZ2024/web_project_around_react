import { useContext, useRef, useState } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext.js";

export default function NewCard() {
  const nameCard = useRef();
  const [link, setLinkCard] = useState("");
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const handleLinkCardChange = (event) => {
    setLinkCard(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlaceSubmit({ name: nameCard.current.value, link });
  };

  return (
    <form className="form" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Nuevo lugar</legend>
        <input
          ref={nameCard}
          id="title-input"
          className="form__field form__field-title"
          type="text"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="title-input-error form__field-error"></span>
        <input
          value={link}
          onChange={handleLinkCardChange}
          id="link-image"
          className="form__field form__field-link-image"
          type="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="link-image-error form__field-error"></span>
        <button className="form__button" type="submit" onClick={handleSubmit}>
          Crear
        </button>
      </fieldset>
    </form>
  );
}
