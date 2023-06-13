import React from 'react';
import Main from '../layout/Main';
import SliderSection from '../section/SliderSection';
import PortsSection from '../section/PortsSection';
import IntroSection from '../section/IntroSection';
import MembersSection from '../section/MembersSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MoviesSection from '../section/MoviesSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr="slider__wrap section bg-gradient NanumM" />
        <PortsSection attr={['ports__wrap', 'section', 'center', 'bg-blue', 'NanumM']} />
        <IntroSection attr={['intro__wrap', 'section', 'SCoreDream']} />
        <MembersSection attr={['members__wrap', 'center', 'section', 'bg-blue', 'NanumM']} />
        <YoutubeSection attr={['youtube__wrap', 'section', 'NanumM']} />
        <UnsplashSection attr={['unsplash__wrap', 'section', 'bg-blue', 'NanumM']} />
        <MoviesSection attr={['movies__wrap', 'section', 'NanumM']} />
      </Main>
    </>
  );
}

export default Home;