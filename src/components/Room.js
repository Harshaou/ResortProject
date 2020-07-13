import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Room = ({rooms}) => {
    const {name,slug,images,price} = rooms
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0]} alt='room' />
            <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
            </div>
            <Link className='btn-primary room-link' to={`/rooms/${slug}`} >
                Features
            </Link>
            <div className="room-info">{name}</div>
            </div>
        </article>
    );
}

Room.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  };

export default Room;
