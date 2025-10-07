import React from 'react';

interface MovieCardProps {
  title: string;
  posterPath?: string;
  releaseDate?: string;
  rating?: number;
  overview?: string;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  releaseDate,
  rating,
  overview,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
      onClick={onClick}
    >
      {posterPath ? (
        <img
          src={posterPath}
          alt={title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex justify-between items-center mb-2">
          {releaseDate && (
            <span className="text-sm text-gray-600">
              {new Date(releaseDate).getFullYear()}
            </span>
          )}
          
          {rating && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
              ⭐ {rating.toFixed(1)}
            </span>
          )}
        </div>
        
        {overview && (
          <p className="text-sm text-gray-600 line-clamp-3">{overview}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;