import React from 'react';
import Room from './Room'

const RoomsList = ({rooms}) => {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortuntely no rooms matched your searched parameters</h3>
            </div>
        );
    } else return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} rooms={item}/>
                })}
            </div>
        </section>
    )
    
}

export default RoomsList;
