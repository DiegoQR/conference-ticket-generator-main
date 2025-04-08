import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';

function TicketForm() {
    return (<>
        <Layout>
            <Header> 
                <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <h2>Secure your spot at next year's biggest coding conference.</h2>
            </Header>
            <Form />
        </Layout>
    </>);
}

export default TicketForm;