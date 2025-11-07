
import React, { useState } from 'react';

interface ImageWithPlaceholderProps {
    src: string;
    alt: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ src, alt }) => {
    const [error, setError] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    if (error) {
        return (
            <div className='bg-gray-200 text-gray-500 text-center p-8 flex flex-col items-center justify-center h-full'>
                <p className='text-3xl mb-2'>📷</p>
                <p className='text-lg mb-2'>Imagem não disponível</p>
                <p className='text-sm'>Ilustração da história</p>
            </div>
        );
    }

    return (
        <>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover cursor-zoom-in hover:opacity-90 transition"
                onError={() => setError(true)}
                onClick={() => setIsZoomed(true)}
                title="Clique para ampliar"
            />

            {isZoomed && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsZoomed(false)}
                >
                    <div className="relative max-w-7xl max-h-screen">
                        <button
                            onClick={() => setIsZoomed(false)}
                            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg z-10"
                        >
                            ×
                        </button>
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageWithPlaceholder;
