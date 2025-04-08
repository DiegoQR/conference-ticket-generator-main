import React from 'react';

function Ticket() {
    return (<>
        <article 
            className='bg-[url(./assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat min-w-full aspect-15/7 mt-10
            grid grid-cols-[85%_15%] grid-rows-[repeat(auto)] grid-flow-col p-5'
        >
            <section className='grid grid-cols-[20%_auto] grid-rows-2'>
                <img src='./assets/images/logo-mark.svg' alt='Logo' className='row-span-2 self-center'></img>
                <h3 className='text-xl font-bold'>Coding Conf</h3>
                <span className='text-sm text-neutral-400 font-light'>Jan 31, 2025 / Austin, TX</span>
            </section>
            <section className='grid grid-cols-[20%_auto] grid-rows-2'>
                <img src='./assets/images/image-avatar.jpg' alt='avatar' className='aspect-square w-12 rounded-xl row-span-2 self-center'/>
                <h3 className='text-xl '>Jonatan Kristof</h3>
                <div className='flex gap-2 content-center self-center'>
                    <img src='./assets/images/icon-github.svg' alt='github-logo' className='aspect-square w-5'/>
                    <span className='text-sm text-neutral-400 font-light'>@jonatankristof0101</span>  
                </div>   
            </section>
            <p className='row-span-2 text-2xl text-neutral-400 h-fit place-self-center self-center writing-vertical'>#01609</p>
        </article>
    </>);
}

export default Ticket;