import React from 'react';
import BackgroundPattern from './BackgroundPattern';
import Header from './Header';
import Form from './Form';

function Layout() {
    return (<>
        <div className='relative min-h-full overflow-x-hidden'>
            <BackgroundPattern />
            <main className='mx-5'>
                <Header />
                <Form />
            </main>
        </div>
    </>);
}

export default Layout;