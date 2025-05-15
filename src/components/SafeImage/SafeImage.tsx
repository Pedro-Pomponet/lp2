import React, { useState, ImgHTMLAttributes } from 'react';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  fallback = '', 
  className = '', 
  alt = '', 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallback) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  if (!src && !fallback) return null;

  return (
    <img 
      src={imgSrc} 
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SafeImage; 