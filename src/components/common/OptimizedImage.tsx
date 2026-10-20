import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | 'auto';
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  fallbackText?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'auto',
  priority = false,
  objectFit = 'cover',
  fallbackText
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '3/2'
      ? 'aspect-[3/2]'
      : '';

  return (
    <div
      className={`relative overflow-hidden bg-[var(--bg-surface-elevated)] ${aspectClass} ${containerClassName}`}
    >
      {/* Skeleton / Shimmer background before loaded */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[var(--bg-surface-subtle)] animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[var(--bg-surface-elevated)] text-[var(--text-muted)] text-center">
          <ImageOff className="w-8 h-8 mb-2 opacity-50 text-[#821828]" />
          <span className="text-xs font-medium">
            {fallbackText || 'Ressource visuelle en cours d\'actualisation'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full transition-opacity duration-300 ${
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        />
      )}
    </div>
  );
};
