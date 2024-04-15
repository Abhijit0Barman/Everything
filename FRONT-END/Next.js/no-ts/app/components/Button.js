"use client"

import React from 'react'

export default function Button() {
    return (
        <button onClick={() => alert(`hello World`)} className='bg-orange-500 rounded-lg m-3 px-6 py-1'>
            Click Me
        </button>
    )
}
