import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroGrid from '@/components/HeroGrid';
import FeaturedPosts from '@/components/FeaturedPosts';
import MostComments from '@/components/MostComments';
import LatestVideos from '@/components/LatestVideos';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'xnerd - Gaming, Movies, Comics & Tech News';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroGrid />
        <FeaturedPosts />
        <MostComments />
        <LatestVideos />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
