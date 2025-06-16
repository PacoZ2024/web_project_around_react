import CloseButton from "../../../../../../assets/images/Close_button.svg";

export default function EditAvatar() {
  return (
    <form
      className="form"
      id="form__edit-image-profile"
      name="formEditImageProfile"
      noValidate
    >
      <div className="form__close-button">
        <img
          className="form__label-close-button"
          src={CloseButton}
          alt="Botón cerrar formulario para editar imagen de perfil"
        />
      </div>
      <fieldset className="form__content">
        <legend className="form__title">Cambiar foto de perfil</legend>
        <input
          id="link-image-profile"
          className="form__field form__field-link-image-profile"
          type="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="link-image-profile-error form__field-error"></span>
        <button className="form__button" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
