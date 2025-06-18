export default function NewCard() {
  return (
    <form className="form" noValidate>
      <fieldset className="form__content">
        <legend className="form__title">Nuevo lugar</legend>
        <input
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
          id="link-image"
          className="form__field form__field-link-image"
          type="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="link-image-error form__field-error"></span>
        <button
          className="form__button form__button-disabled"
          type="submit"
          disabled={true}
        >
          Crear
        </button>
      </fieldset>
    </form>
  );
}
