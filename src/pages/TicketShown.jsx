import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Ticket from '../components/Ticket';

function TicketShown() {
    return (<>
        <Layout>
            <Header>
                <h1>
                    Congrats, <span className='text-linear-gradient'>Jonatan</span> <span className='text-linear-gradient'>Kristof!</span> Your ticket is ready.
                </h1>
                <h2>We've emailed you ticket to <strong className='text-orange-500'>jonatan@email.com</strong> and will send updates in the run up to the event</h2>
            </Header>
            <Ticket />
        </Layout>
    </>);
}

export default TicketShown;