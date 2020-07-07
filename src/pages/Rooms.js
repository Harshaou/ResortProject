import React, { Component } from 'react';
import Hero from '../components/Hero';

class Rooms extends Component {
    render() {
        return (
            <div>
                Rooms
                <Hero hero={'roomsHero'} />
            </div>
        );
    }
}

export default Rooms;
