import React from 'react'

export const Star = ({selected=false,onClick=f=>f}) =>(
    <div onClick={onClick}>
        {selected ? 'star selected' : 'star'}
    </div>)