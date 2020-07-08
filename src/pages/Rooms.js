import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

class Rooms extends Component {
    render() {
        return (
            <div>
                <Hero hero={'roomsHero'}>
                    <Banner title='Our rooms'>
                    <Link to='/' className='btn-primary'>return home</Link>
                    </Banner>
                </Hero>
            </div>
        );
    }
}

export default Rooms;
