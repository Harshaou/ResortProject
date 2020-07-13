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
                    <select className='form-control' name="type" id="type" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* //type end*/}

                {/* //Guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select className='form-control' name="capacity" id="capacity" value={capacity} onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* //Guest end */}

                {/* //price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input className='form-control' type='range' max={maxPrice}  min={minPrice} 
                     name="price" id="price" value={price} onChange={handleChange} />
                </div>
                {/* //price end */}

                {/* //size */}
                <div className="form-group">
                    <label htmlFor="price">room size</label>
                    <input className='size-input' type='number' name="minSize"
                     id="size" value={minSize} onChange={handleChange} />

                     <input className='size-input' type='number' name="maxSize"
                     id="size" value={maxSize} onChange={handleChange} />
                </div>

                {/* //extras */}
                <div className="form-group">
                <div className='single-extra'>
                    <input type='checkbox' name="breakfast"
                    id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                
                <div className='single-extra'>
                    <input type='checkbox' name="pets"
                    id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">pet</label>
                </div>
                </div>
                {/* //extras end */}
            </form>
        </section>
    );
}

export default RoomFilter;
