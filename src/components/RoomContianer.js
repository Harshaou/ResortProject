import React from 'react';
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../Context'
import Loading from './Loading'

const RoomContianer = () => {
    return (
        <div>
            <RoomConsumer>
            {(value) => {
                const {loading, sortedRooms, rooms} = value
                if(loading) {
                    return <Loading />
                } else 
                return (
                    <div>
                     <RoomsFilter rooms={rooms} /> 
                     <RoomsList rooms={sortedRooms}/>
                    </div>
                )
            }} 
            </RoomConsumer>
            
        </div>
    );
}

export default RoomContianer;
