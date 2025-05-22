import Link from 'next/link'
import React from 'react'
import "../style/navbar.css"
function navbar() {
    return (
        <div className='navbarMain'>
            <Link href="/">Home</Link>
        </div>
    )
}

export default navbar