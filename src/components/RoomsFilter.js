import React, {useContext} from 'react';
import {RoomContext} from '../Context'
import Title from './Title'

const RoomFilter = ({rooms}) => {

    const context = useContext(RoomContext);
    const {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, handleChange } = context
    
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }

    let types = getUnique(rooms, "type")
    types = ['all', ...types]
    types = types.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>
        )
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title='Search rooms' />
            <form className='filter-form'>
                {/* //type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className='form-control' name="type" id="type" value={capacity} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* //type end*/}
                {/* //Guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select className='form-control' name="capacity" id="capacity" value={type} onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* //Guest end */}
                {/* //type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className='form-control' name="type" id="type" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* //type */}
            </form>
        </section>
    );
}

export default RoomFilter;
