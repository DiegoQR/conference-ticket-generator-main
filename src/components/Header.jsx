import React from 'react';

function Header({children}) {
    return (<>
        <header className='py-15 flex flex-col items-center text-center gap-10'>
            <img id='logo-full' 
                src='./assets/images/logo-full.svg'
                alt='logo-full' 
            />
            {children}
        </header>
    </>);
}

export default Header;