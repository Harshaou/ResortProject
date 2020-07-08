import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from './Services';


class Home extends Component {
    render() {
        return (
            <>
            <Hero>
                <Banner title='luxurious room' subtitle='deluxe rooms starting from at $299'>
                <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            </>
        );
    }
}

export default Home;
