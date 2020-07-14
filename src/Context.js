import React, { Component } from 'react';
import items from './utill/data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount = () => {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({sortedRooms: rooms, featuredRooms, rooms, loading: false, price: maxPrice, maxPrice, maxSize})
        
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id 
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images,id}
            return room
        })
        return tempItems
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms]
        const singleRoom = tempRooms.find(room => room.slug === slug)
        return singleRoom
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name
        this.setState({[name]: value}, this.filterRoom)
        
    }
    // type
    filterRoom = () => {
        let {rooms,type,price,capacity,minSize,maxSize,breakfast,pets} = this.state
        
        let tempRooms = [...rooms]
        capacity = parseInt(capacity)
        price = parseInt(price)

        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
         }
         
        //capacity
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity  >= capacity)}

        //price
        tempRooms = tempRooms.filter(item => item.price <= price)

        //size
        tempRooms = tempRooms.filter(item => item.size >= minSize && item.size <= maxSize);

        //filter by breakfast
        if (breakfast) {
        tempRooms = tempRooms.filter(item => item.breakfast === true )
        
}

        //filter by pets
        if (pets) {
        tempRooms = tempRooms.filter(item => item.pets === true);}

        this.setState({sortedRooms: tempRooms})
    }


    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange
                 }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer
export {RoomContext, RoomConsumer}

export default RoomProvider;
