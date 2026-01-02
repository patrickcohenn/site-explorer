import { Play, Video } from 'lucide-react';

import pacificRim from '@/assets/pacific-rim.jpg';
import comicHeroes from '@/assets/comic-heroes.jpg';
import animeTrailer from '@/assets/anime-trailer.jpg';
import vrGaming from '@/assets/vr-gaming.jpg';

const videos = [
  {
    id: 1,
    title: 'Pacific Rim: The Black - Official Trailer',
    duration: '2:45',
    image: pacificRim,
  },
  {
    id: 2,
    title: 'The Marvels - First Look Trailer',
    duration: '3:12',
    image: comicHeroes,
  },
  {
    id: 3,
    title: 'Demon Slayer Season 4 - Official Teaser',
    duration: '1:58',
    image: animeTrailer,
  },
  {
    id: 4,
    title: 'PlayStation VR2 - Features Revealed',
    duration: '4:20',
    image: vrGaming,
  },
];

const LatestVideos = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative">
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-6xl md:text-8xl font-heading font-extrabold text-muted/20 pointer-events-none select-none">
              VIDEO
            </span>
            <h2 className="section-title text-foreground relative z-10">
              LATEST VIDEOS
            </h2>
          </div>

          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Video className="w-4 h-4" />
            ALL VIDEOS
          </button>
        </div>

        {/* Videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className="video-card aspect-video"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play button */}
              <div className="play-button">
                <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
              </div>

              {/* Duration badge */}
              <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-medium bg-background/80 text-foreground rounded z-20">
                {video.duration}
              </span>

              {/* Title overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
