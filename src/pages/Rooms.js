import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RoomsContainer  from '../components/RoomContianer';
import Hero from '../components/Hero';
import Banner from '../components/Banner';


class Rooms extends Component {
    render() {
        return (
            <div>
                <Hero hero={'roomsHero'}>
                    <Banner title='Our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                    </Banner>
                </Hero>
                <RoomsContainer />
            </div>
        );
    }
}

export default Rooms;
