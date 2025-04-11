import React from 'react';

function BackgroundPattern() {
    return (<>
        <img id='pattern-lines' 
            src='./assets/images/pattern-lines.svg' 
            className='absolute insert-0 -z-10 h-3/4 min-w-full object-cover'
            alt='pattern-lines'
        />
        <img id='squiggly-line'
            src='./assets/images/pattern-squiggly-line-top.svg' 
            className='absolute -z-10 top-10 right-0 object-cover max-w-50 lg:max-w-100'
            alt='squiggly-line'
        />
        <img id='circles-1'
            src='./assets/images/pattern-circle.svg' 
            className='absolute -z-10 -top-5 -left-7 object-cover max-w-40'
            alt='circles-1'
        />
        <img id='circles-2'
            src='./assets/images/pattern-circle.svg' 
            className='absolute -z-10 bottom-50 -right-15 object-cover max-w-30 lg:max-w-500 lg:right-50'
            alt='circles-2'
        />
        <img id='squiggly-line-bot'
            src='./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
            className='absolute -z-10 bottom-0 left-0 object-cover max-w-100 lg:max-w-150 lg:content-[url("./assets/images/pattern-squiggly-line-bottom-desktop.svg")]'
            alt='squiggly-line-bot'
        />
        
    </>);
}

export default BackgroundPattern;