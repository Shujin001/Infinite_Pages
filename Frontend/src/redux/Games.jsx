import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
    const GameStore = useSelector(store => store.gameStore)
    const game = GameStore.game
    const player = GameStore.player

    let [gameName, setGame] = useState('')
    let [playerName, setPlayer] = useState('')


    const dispatch =  useDispatch()

    return (
        <div className='flex justify-center items-center flex-col h-[80vh] text-2xl'>
            Game: {game}
            <div className='flex'>  
                <input type="text" className='form-control'
                onChange={e=>setGame(e.target.value)}
                />
                <button className='btn'
                onClick={()=>{
                    dispatch({type: "UPDATE_GAME", payload:gameName})
                }}
                >UPDATE GAME</button>
            </div>

            Player: {player}
            <div className='flex'>  
                <input type="text" className='form-control'
                onChange={e=>setPlayer(e.target.value)}
                />
                <button className='btn'
                onClick={()=>{
                    dispatch({type: "UPDATE_PLAYER", payload:playerName})
                }}
                >UPDATE PLAYER</button>
            </div>
        </div>
    )
}

export default Games