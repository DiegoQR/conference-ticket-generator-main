import React, { useState, useCallback, useRef } from 'react';

function ImputDragAndDrop({children, accept, name, onFileUpdate, ...rest}) {
    const [isDragging, setIsDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const MAX_FILE_SIZE = 500 * 1024; // 500KB in bytes
    const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const handleFileInput = useCallback((e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const triggerFileInput = useCallback(() => {
        fileInputRef.current.click();
    }, []);

    const handleFile = useCallback((file) => {
        setError(null);
        setPreviewUrl(null);
    
        if (!ACCEPTED_TYPES.includes(file.type)) {
          setError('Only JPG/PNG images are allowed.');
          return;
        }
    
        if (file.size > MAX_FILE_SIZE) {
          setError('File size exceeds 500KB limit.');
          return;
        }
    
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
    
        if (onFileUpdate) {
            onFileUpdate(file);
        }
      }, [onFileUpdate]);

    return (<>
        <label htmlFor={name} className='flex flex-col gap-5 text-2xl font-bold'>
            <span>{children}</span>
            <div id="drag-and-drop-zone" 
                className={`w-full h-50 border-2 border-dashed border-neutral-600 rounded-lg flex flex-col gap-3 text-center items-center justify-center bg-neutral-300/20 hover:bg-neutral-300/40 ${isDragging ? 'bg-neutral-300/40' : ''}`}
                onDragEnter={handleDragEnter} 
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop} 
            >
                {
                    previewUrl ? 
                    <>
                        <img src={previewUrl} alt="Preview" className='w-20 aspect-square rounded-lg border-2 border-neutral-500 mb-5'/>
                        <div className='flex gap-5'>
                            <button className='bg-neutral-300/10 rounded-xl text-lg underline font-light px-3 py-1' onClick={() => setPreviewUrl(null)}>Remove Image</button>
                            <button className='bg-neutral-300/10 rounded-xl text-lg font-light px-3 py-1' onClick={triggerFileInput}>Change Image</button>
                        </div>
                    </>
                    :
                    <>
                        <img src='./assets/images/icon-upload.svg' alt='Upload Icon' 
                        className='p-2 w-16 aspect-square rounded-xl bg-neutral-300/20'/>
                        <span className='text-xl text-neutral-400'>Drag and drop or click to upload</span>
                        <input type="file" className='hidden' id={name} name={name} ref={fileInputRef} onChange={handleFileInput} onClick={triggerFileInput} accept={accept}/>
                    </>   
                }
            </div>
        </label>
        <output className='text-neutral-600 text-sm font-bold flex items-center gap-2'>
            <img src="./assets/images/icon-info.svg" alt="Info Icon" className='inline-block w-5 h-5 mr-2'/>
            <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </output>
    </>);
}

export default ImputDragAndDrop;