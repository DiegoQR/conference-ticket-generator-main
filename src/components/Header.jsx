import React from 'react';

function Header() {
    return (<>
        <header className='py-15 flex flex-col items-center text-center gap-10'>
            <img id='logo-full' 
                src='./assets/images/logo-full.svg'
                alt='logo-full' 
            />
            <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <h2>Secure your spot at next year's biggest coding conference.</h2>
        </header>
    </>);
}

export default Header;