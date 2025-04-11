import React from 'react';

function Ticket({fullName, username, avatarUrl}) {

    return (<>
        <article 
            className='bg-[url(./assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat w-full max-w-lg mx-auto aspect-15/7 mt-10
            grid grid-cols-[85%_15%] grid-rows-2 grid-flow-col p-5 items-center md:gap-y-10'
        >
            <section className='grid grid-cols-[20%_auto] grid-rows-2'>
                <img src='./assets/images/logo-mark.svg' alt='Logo' className='row-span-2 self-center'></img>
                <h3 className='text-xl font-bold md:text-2xl'>Coding Conf</h3>
                <span className='text-sm text-neutral-400 font-light md:text-lg'>Jan 31, 2025 / Austin, TX</span>
            </section>
            <section className='grid grid-cols-[20%_auto] grid-rows-2'>
                <img src={avatarUrl} alt='avatar' className='aspect-square w-12 md:w-14 rounded-xl row-span-2 self-center'/>
                <h3 className='text-xl md:text-2xl'>{fullName}</h3>
                <div className='flex gap-2 content-center self-center'>
                    <img src='./assets/images/icon-github.svg' alt='github-logo' className='aspect-square w-5'/>
                    <span className='text-sm text-neutral-400 font-light md:text-lg'>{username}</span>  
                </div>   
            </section>
            <p className='row-span-2 text-2xl text-neutral-400 h-fit place-self-center self-center writing-vertical'>#01609</p>
        </article>
    </>);
}

export default Ticket;