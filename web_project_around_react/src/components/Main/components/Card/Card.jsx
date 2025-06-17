import DeleteImageButton from "../../../../assets/images/Delete_button.svg";
import LikeButton from "../../../../assets/images/Like.svg";

export default function (props) {
  const { name, link, isLiked } = props.card;
  return (
    <div className="content__card">
      <div className="content__image-card">
        <img className="content__image" src={link} alt={name} />
      </div>
      <div className="content__delete-button">
        <img
          className="content__delete-button-label"
          src={DeleteImageButton}
          alt="Botón borrar imagen"
        />
      </div>
      <div className="content__image-tag">
        <p className="content__image-title">{name}</p>
        <div className="content__like-button">
          <img
            className="content__like-button-label"
            src={LikeButton}
            alt="Botón me gusta"
          />
        </div>
      </div>
    </div>
  );
}
