import { useState, useEffect } from "react";
import React from "react";
import EditImageProfile from "../../assets/images/Edit_Image_Profile.svg";
import EditProfileButton from "../../assets/images/Edit_button.svg";
import AddNewPlaceButton from "../../assets/images/Add_button.svg";
import NewCard from "./components/Popup/form/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/Popup/form/EditAvatar/EditAvatar.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Card from "./components/Card/Card.jsx";
import { api } from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

export default function Main(props) {
  const [cards, setCards] = useState([]);
  const newCardPopup = { children: <NewCard /> };
  const editProfilePopup = { children: <EditProfile /> };
  const editAvatarPopup = { children: <EditAvatar /> };
  const { currentUser } = React.useContext(CurrentUserContext);

  useEffect(() => {
    (async () => {
      await api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    if (isLiked) {
      await api
        .deleteLiked(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((err) => console.log(err));
    } else {
      await api
        .isLiked(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((err) => console.log(err));
    }
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(
        setCards((state) =>
          state.filter((currentCard) => {
            return currentCard._id != card._id;
          })
        )
      )
      .catch((err) => console.log(err));
  }

  return (
    <main className="content">
      <section className="content__profile">
        <div className="content__image-profile-container">
          <img
            className="content__avatar-image"
            alt="Imagen de perfil"
            src={currentUser.avatar}
          />
          <div
            className="content__icon-edit-image-profile-container"
            onClick={() => {
              props.onOpenPopup(editAvatarPopup);
            }}
          >
            <img
              className="content__icon-edit-image-profile"
              src={EditImageProfile}
              alt="Icono para editar imagen de perfil"
            />
          </div>
        </div>
        <div className="content__profile-info">
          <div className="content__profile-distribution">
            <h1 className="content__profile-name">{currentUser.name}</h1>
            <div
              className="content__profile-edit-button"
              onClick={() => {
                props.onOpenPopup(editProfilePopup);
              }}
            >
              <img
                className="content__edit-profile-button-label"
                src={EditProfileButton}
                alt="Botón de edición de perfil"
              />
            </div>
          </div>
          <p className="content__about-me">{currentUser.about}</p>
        </div>
        <div
          className="content__new-place-add-button"
          onClick={() => {
            props.onOpenPopup(newCardPopup);
          }}
        >
          <img
            className="content__add-new-place-button-label"
            src={AddNewPlaceButton}
            alt="Botón para añadir nuevos lugares"
          />
        </div>
      </section>
      <section className="content__images">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
      {props.popup && (
        <Popup onClose={props.onClosePopup}>{props.popup.children}</Popup>
      )}
    </main>
  );
}
