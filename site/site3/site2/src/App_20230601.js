import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';
import SliderSection from './components/section/SliderSection.jsx';
import PortsSection from './components/section/PortsSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MembersSection from './components/section/MembersSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MoviesSection from './components/section/MoviesSection.jsx';

function App() {
  return (
    <>
      <Header attr={['header__wrap', 'bg-blue', 'NanumM']} />
      <Main>
        <SliderSection attr="slider__wrap section bg-gradient NanumM" />
        <PortsSection attr={['ports__wrap', 'section', 'center', 'bg-blue', 'NanumM']} />
        <IntroSection attr={['intro__wrap', 'section', 'SCoreDream']} />
        <MembersSection attr={['members__wrap', 'center', 'section', 'bg-blue', 'NanumM']} />
        <YoutubeSection attr={['youtube__wrap', 'section', 'NanumM']} />
        <UnsplashSection attr={['unsplash__wrap', 'section', 'bg-blue', 'NanumM']} />
        <MoviesSection attr={['movies__wrap', 'section', 'NanumM']} />
      </Main>
      <Footer attr={['footer__wrap', 'section', 'bg-blue', 'NanumM']} />
    </>
  );
}

export default App;
