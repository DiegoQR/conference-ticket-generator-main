import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Ticket from '../components/Ticket';
import { useLocation, Link } from 'react-router';

function TicketShown() {
    const { state } = useLocation();
    const { avatar, fullName, emailAddress, githubUsername } = state || {};

    if (!state) {
        return (
            <Layout>
                <Header>
                    <h1>Ticket not found!</h1>
                    <h2>Please go back to the <Link to="/" className='underline text-blue-500 hover:text-blue-300'>ticket form</Link></h2>
                </Header>
            </Layout>
        );
    }

    const [ firstName, lastName ] = fullName.split(' ');
    const avatarUrl = URL.createObjectURL(avatar);

    return (<>
        <Layout>
            <Header>
                <h1>
                    Congrats, <span className='text-linear-gradient'>{firstName}</span> <span className='text-linear-gradient'>{lastName}!</span> Your ticket is ready.
                </h1>
                <h2>We've emailed you ticket to <strong className='text-orange-500'>{emailAddress}</strong> and will send updates in the run up to the event</h2>
            </Header>
            <Ticket fullName={fullName} username={githubUsername} avatarUrl={avatarUrl}/>
        </Layout>
    </>);
}

export default TicketShown;