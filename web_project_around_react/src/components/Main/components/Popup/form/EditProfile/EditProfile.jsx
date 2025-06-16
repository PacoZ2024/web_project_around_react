import CloseButton from "../../../../../../assets/images/Close_button.svg";

export default function EditProfile() {
  return (
    <form
      className="form"
      id="form__edit-profile"
      name="formEditProfile"
      noValidate
    >
      <div className="form__close-button">
        <img
          className="form__label-close-button"
          src={CloseButton}
          alt="Botón cerrar formulario para editar perfil"
        />
      </div>
      <fieldset className="form__content">
        <legend className="form__title">Editar perfil</legend>
        <input
          id="name-input"
          className="form__field form__field-name"
          name="fieldName"
          type="text"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error form__field-error"></span>
        <input
          id="about-me-input"
          className="form__field form__field-about-me"
          name="fieldAboutMe"
          type="text"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-me-input-error form__field-error"></span>
        <button className="form__button" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
