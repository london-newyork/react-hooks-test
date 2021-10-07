import React, { useState, useEffect } from 'react'

function MouseEventEffect(){
    console.log('MouseEventEffectが呼ばれた')
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const getMousePosition = e => {      
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffectが呼ばれた');
        window.addEventListener('mousemove', getMousePosition)
        return () => {
            window.removeEventListener('mousemove',getMousePosition)
        }
    },[])//初回のみで、その後の再レンダー時にスキップしたい場合は[]を第二引数に渡す
    return (
        <div>
            <ul>
                <li>X座標: {x}</li>
                <li>Y座標: {y}</li>
            </ul>
        </div>
    )
}

export default MouseEventEffect;