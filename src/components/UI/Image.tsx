import React from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, style }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={style}
        />
    );
};

export default Image;