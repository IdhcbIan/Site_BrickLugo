import { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

const GlobalFontStyle = createGlobalStyle`
  @import url('https://fontsgeek.com/fonts/avenir-light');
`

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  font-family: 'Avenir Light', sans-serif;
`

const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  }
`

const WhatsappIcon = styled(FaWhatsapp)`
  font-size: 30px;
`

const PulseAnimation = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  opacity: 0.7;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
`

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // Always visible now, but you can add custom logic if needed
      setIsVisible(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      <GlobalFontStyle />
      <FloatingContainer>
        <WhatsappButton 
          href="https://api.whatsapp.com/send?phone=5531995936705&text=Ol%C3%A1%2C%20eu%20vim%20pelo%20site%20da%20Brick%20Lugo%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20administra%C3%A7%C3%A3o%20de%20Airbnb" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <PulseAnimation />
          <WhatsappIcon />
        </WhatsappButton>
      </FloatingContainer>
    </>
  );
}

export default FloatingWhatsApp;
