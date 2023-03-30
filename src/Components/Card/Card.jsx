import React from 'react';

const Card = ({ player }) => {
    console.log(player)
    const { picture, name, age, price, about , job} = player;
    return (
        <div className='border'>
            <div className="card-img p-3">
                <img src={picture} className="w-[200px] mx-auto h-[250px]" alt="" />
            </div>
            <div className="text-center">
                <h1 className='text-2xl font-bold p-0'>{name}</h1>
                {/* <h5>Age : {age}</h5> */}
                <h4 className='font-bold'>Price : {price}$</h4>
                <div className="p-3">
                    <p className='font-mono'>{about.slice(0,50)}... <a href="">see more</a></p>
                </div>
                <div className="flex justify-between px-5 py-1">
                    <p>Job : {job}</p>
                    <p>Age : {age}</p>
                </div>
            </div>
            <div className="card-footer bg-slate-400">
                <button className="btn w-full rounded-none btn-secondary">Book Now</button>
            </div>
        </div>
    );
};

export default Card;