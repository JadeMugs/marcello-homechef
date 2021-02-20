import React from 'react';
import Contacts from './Contacts';
import Footer from './Footer';
import Landing from './Landing';
import Menu from './Menu';
import Navbar from './Navbar';

export default function Home() {
  const scrollRef = React.useRef();

  const scrollToRef = () => {
    if (scrollRef.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current.offsetTop,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Landing scrollDown={scrollToRef} />
      <div ref={scrollRef}>
        <Menu />
      </div>
      <Contacts />
      <Footer />
    </div>
  );
}
