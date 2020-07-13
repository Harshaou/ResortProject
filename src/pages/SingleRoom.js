import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {RoomContext} from '../Context' 
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero'


class SingleRoom extends Component {

    static contextType = RoomContext

    state = {slug: this.props.match.params.slug, }

    render() {
        let {getRoom} = this.context
        let room = getRoom(this.state.slug)

        if(!room){
            return (
                <div className="error">
                <h3>No such room could found</h3>
                <h3>No such room could found.....</h3>
                <Link className='btn-primary' to="/rooms">Back to rooms</Link>
                </div>
            )
        }

        const {name, description,capacity,size,price,extras,breakfast,pets,images} = room
        const [mainImg, ...defaultImg] = images

        return (
            <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className="single-room-images">
                    {defaultImg.map((img, index) => (
                        <img key={index} src={img} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <artilcle className="esc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </artilcle>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: ${size} SQFT</h6>
                        <h6>max capacity : {' '} {capacity > 1 ? `${capacity} people`: `${capacity} person `}</h6>
                        <h6>{pets ? 'pets allowed': 'no pets allowed'}</h6>
                    </article>
                </div>
            </section>
            <article className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return (
                            <li key={index}>- {item}</li>
                        )
                    })}
                </ul>
            </article>
            </>
        )
    }
}

export default SingleRoom;
