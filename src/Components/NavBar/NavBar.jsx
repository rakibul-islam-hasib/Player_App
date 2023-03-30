import React from 'react';

const NavBar = () => {
    return (
        <div className='w-[90%] py-3 flex justify-between items-center mx-auto'>
            <div className="logo">
                <button className="btn btn-ghost text-warning ">Player Hire</button>
            </div>
            <div className="ex">
                <button className="btn-ghost text-success btn">Buy A Player  </button>
                <button className="btn-ghost text-purple-600 btn">Pricing</button>
                <button className="btn-ghost text-error btn">Free Plan</button>
            </div>
            <div className="links">
                <ul className='flex'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer text-success ml-3'>About</li>
                    <li className='cursor-pointer  ml-3'>Top Player</li>
                    <li className='cursor-pointer  ml-3'>Top Score</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;