import React from 'react'
import "../style/footer.css"
import Link from 'next/link'

function Footer() {
    return (
        <div className='footerMain'>
            <span>© NOOMİM 2025. ALL RIGHTS RESERVED.</span>
            <div className='footerLinks'>
                <Link href="/privacyPolicy">Privacy Policy</Link>
                <Link href="/cookiePolicy">Cookie Policy</Link>
            </div>
        </div>
    )
}

export default Footer