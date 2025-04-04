import React from 'react';

function ImputDragAndDrop({children, ...rest}) {
    return (<>
        <label className='flex flex-col gap-5 text-2xl font-bold'>
            <span>{children}</span>
            <div id="drag-and-drop-zone" className='w-full h-64 border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center 
            bg-neutral-300/20 hover:bg-neutral-300/40'>
                <img src='./assets/images/icon-upload.svg' alt='Upload Icon' 
                    className='p-2 w-16 aspect-square border-neutral-500 border-2 rounded-lg bg-neutral-300/20'/>
            </div>
        </label>
    </>);
}

export default ImputDragAndDrop;