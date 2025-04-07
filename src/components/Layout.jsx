import React from 'react';
import BackgroundPattern from './BackgroundPattern';
import Header from './Header';
import Form from './Form';

function Layout() {
    return (<>
        <div className='relative min-h-full overflow-x-hidden'>
            <BackgroundPattern />
            <main className='mx-5'>
                <Header> 
                    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <h2>Secure your spot at next year's biggest coding conference.</h2>
                </Header>
                <Form />
            </main>
        </div>
    </>);
}

export default Layout;