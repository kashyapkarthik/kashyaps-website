import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Image, Video } from 'lucide-react';

interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt?: string;
}

interface MediaSlideshowProps {
  mediaItems: MediaItem[];
  className?: string;
}

const MediaSlideshow: React.FC<MediaSlideshowProps> = ({ mediaItems, className = '' }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Separate photos and videos
  const photos = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');
  
  const currentMedia = activeTab === 'photos' ? photos : videos;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentMedia.length);
    setIsPlaying(false); // Reset playing state when changing slides
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
    setIsPlaying(false); // Reset playing state when changing slides
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false); // Reset playing state when changing slides
  };

  const togglePlay = () => {
    const video = document.querySelector('.current-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const switchTab = (tab: 'photos' | 'videos') => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  if (mediaItems.length === 0) return null;

  const currentItem = currentMedia[currentIndex];

  return (
    <div className={`relative bg-card border border-border rounded-lg overflow-hidden ${className}`}>
      {/* Tab Navigation */}
      <div className="flex border-b border-border bg-secondary">
        <button
          onClick={() => switchTab('photos')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'photos'
              ? 'bg-muted text-foreground border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          <Image size={16} />
          Photos ({photos.length})
        </button>
        <button
          onClick={() => switchTab('videos')}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'videos'
              ? 'bg-muted text-foreground border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          <Video size={16} />
          Videos ({videos.length})
        </button>
      </div>

      {/* Main media display */}
      <div 
        className="relative aspect-[4/3] bg-background"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {currentItem ? (
          <>
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.src}
                alt={currentItem.alt || `Hiking photo ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={currentItem.src}
                className="current-video w-full h-full object-cover"
                controls={false}
                muted
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
            )}

            {/* Navigation arrows */}
            {currentMedia.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground p-2 rounded-full transition-all border border-border"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground p-2 rounded-full transition-all border border-border"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Video play/pause button - shows on hover or when paused */}
            {currentItem.type === 'video' && (isHovering || !isPlaying) && (
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 hover:bg-background text-foreground p-4 rounded-full transition-all border border-border shadow-lg"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-background/80 text-foreground px-3 py-1 rounded-full text-sm border border-border">
              {currentIndex + 1} / {currentMedia.length}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No {activeTab} available
          </div>
        )}
      </div>

      {/* Thumbnail navigation - only show for photos */}
      {currentMedia.length > 0 && activeTab === 'photos' && (
        <div className="p-3 bg-secondary border-t border-border">
          <div className="flex gap-2 overflow-x-auto">
            {currentMedia.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-primary' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <img
                  src={item.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaSlideshow;
