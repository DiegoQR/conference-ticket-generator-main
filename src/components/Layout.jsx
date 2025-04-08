import React from 'react';
import BackgroundPattern from './BackgroundPattern';

function Layout({children}) {
    return (<>
        <div className='relative h-full min-h-screen overflow-x-hidden'>
            <BackgroundPattern />
            <main className='mx-5'>
                {children}
            </main>
        </div>
    </>);
}

export default Layout;