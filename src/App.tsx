import React, { useRef, RefObject } from 'react';
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {

  const aboutSectionRef =  useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef(null); 
  const blogSectionRef = useRef(null);

  const scrollToSection = (ref : RefObject<HTMLElement> ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <>
    <Topbar
     aboutSectionRef={aboutSectionRef}
     contactSectionRef={contactSectionRef}
     blogSectionRef = {blogSectionRef}
     scrollToSection={scrollToSection}
    />
    <Home />
    <About aboutSectionRef={aboutSectionRef}/>
    <ContactSection contactSectionRef={contactSectionRef} />
    <Footer blogSectionRef={blogSectionRef} />
   </>
  );
}

export default App;
