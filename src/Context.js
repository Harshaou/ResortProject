import React, { Component } from 'react';
// import item from './utill/data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }


    render() {
        return (
            <RoomContext.Provider value={'jjj'}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer
export {RoomContext, RoomConsumer}

export default RoomProvider;
