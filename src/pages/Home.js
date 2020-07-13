import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from './Services';
import FeaturedRoom from '../components/FeaturedRoom';


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
            <FeaturedRoom />
            </>
        );
    }
}

export default Home;
