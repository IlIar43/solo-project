import React, { useEffect } from 'react';
import { useContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';


const FooterPlayer = () => {

        const {id} = useParams()
        const {player, getPlayer} = useContext(productContext)
        console.log(player)

        useEffect(() => {
            getPlayer(id)
        }, [id])


    return (
        <div>
            <ReactAudioPlayer
            className='player'
            src={player.player}
            controls
            autoPlay
            style={{position: 'fixed', bottom: 0, width: '100vw', marginTop: '5px'}}
        />
        </div>
    );
};

export default FooterPlayer;