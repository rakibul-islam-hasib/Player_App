import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Hero = () => {
    const [players , setPlayers] = useState([]); 
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } , []); 
    // console.log(players)
    return (
        <div className='grid grid-cols-6'>
            <div className="grid mt-4 grid-cols-3 gap-5 col-span-4">
            {
                // <Card player={}></Card>
                players.map(player=><Card key={player.id} player={player}></Card>)
            }
            </div>
            <div className="cart col-span-2">
                   <Cart></Cart>
            </div>
        </div>
    );
};

export default Hero;