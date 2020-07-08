import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from '../components/Title';


class Services extends React.Component {
    state = {
        services: [
        {icon: <FaCocktail />, title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quod.'},
        {icon: <FaHiking />, title: 'Endless hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quod.'},
        {icon: <FaShuttleVan />, title: 'free shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quod.'},
        {icon: <FaBeer />, title: 'strongest beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quod.'}
    ]
}

    render() {
        return (
            <section className='services'>
            <Title title='Services' />
            <div className="services-center">
                {this.state.services.map((item, index) => {
                    return (
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    )
                })}
            </div>
        </section>
        );
    }
}

export default Services;

