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
        <>

            <ReactAudioPlayer
            className='player'
            src={player.player}
            controls
            autoPlay
            style={{width: '100%', position: 'fixed', bottom: 0, marginTop: '5px', zIndex: 1 }}
        />
        </>
    );
};

export default FooterPlayer;