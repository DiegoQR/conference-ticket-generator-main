import React from 'react';

function ImputDragAndDrop({children, ...rest}) {
    return (<>
        <label className='flex flex-col gap-5 text-2xl font-bold'>
            <span>{children}</span>
            <input className='h-50 bg-neutral-100/20 rounded-xl w-full hover:cursor-pointer border-3 border-neutral-500
            border-dashed placeholder:hidden' {...rest}/>
        </label>
    </>);
}

export default ImputDragAndDrop;