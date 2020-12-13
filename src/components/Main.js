import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState()
    const [userDescription , setUserDescription ] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()

    const [cards, setCards] = React.useState([])

    React.useEffect(()=>{
        api.getUserProfile()
        .then((info)=>{
                setUserName(info.name)
                setUserDescription(info.about)
                setUserAvatar(info.avatar)
            })
            .catch((err)=>{
                console.log(err)
            })
        }, [])

    React.useEffect(()=>{
        api.getInitialCards()
        .then((data)=>{
            setCards(data)
            })
            .catch((err)=>{
            console.log(err)
            })
    }, [])

    return(
        <>
        <main className="content">
            <section className="profile page__section">   
                <div className="profile__avatar">     
                    <img src={userAvatar} alt="Аватарка" className="profile__photo"/>
                    <button type="button" className="profile__avatar-button"  onClick={props.onEditAvatar}></button>
                </div>    
                        <div className="profile__info">
                            <div className="profile__name"
                            ><h1 className="profile__title">{userName}</h1>
                                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                            </div>
                            <p className="profile__job">{userDescription}</p>          
                        </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>    
        </main>

        <div className="elements page__section">
            <div className="grid-elements">
                {cards.map((card)=> (
                <Card key={card._id} cardData={card} onCardClick={props.onCardClick}/>
                )
                )}
            </div>
        </div> 
        </>
    ) 
}

export default Main;