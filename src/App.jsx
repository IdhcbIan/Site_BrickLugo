import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Legos/Header'
import { motion, AnimatePresence } from 'framer-motion'
import HallImage from './assets/ImagemHome.jpg'
import BrickImage from './assets/Brick.avif'
import CleanIcon from './assets/Clean.png'
import TalkIcon from './assets/Talk.png'
import ToolsIcon from './assets/Tools.png'
import LogoWhite from './assets/Logo1.png'
import FloatingWhatsApp from './Legos/Floating'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
  @import url('https://fontsgeek.com/fonts/avenir-light');
  
  body {
    background-color: #f5f5f5;
    color: #333333;
    margin: 0;
    padding: 0;
    font-family: 'Rozha One', serif;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
`

const Hero = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  position: relative;
  border-bottom: 3px solid #ff6f61;
  box-shadow: 0 4px 30px rgba(255, 111, 97, 0.15);
  background-image: url(${HallImage});
  background-size: cover;
  background-position: center;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 111, 97, 0.3);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 3rem;
    min-height: 80vh;
  }
`

const HeroContent = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 200px;
    height: auto;
  }

  p {
    color: white;
    font-size: 1.4rem;
    margin: 0;
    font-family: 'Avenir Light', sans-serif;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      margin-right: 0.8rem;
    }
  }
`

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  padding: 0 2rem;
  position: relative;
  background-image: url(${BrickImage});
  background-size: cover;
  background-position: center, url(${HallImage}), cover, center;
  background-attachment: fixed, scroll;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const ProjectCard = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(255, 111, 97, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 111, 97, 0.2);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    border-color: #ff6f61;
    box-shadow: 0 15px 35px rgba(255, 111, 97, 0.2);
  }

  h3 {
    color: #333333;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    font-family: 'Rozha One', serif;
  }

  p {
    color: #666666;
    line-height: 1.8;
    font-size: 1.1rem;
    font-family: 'Avenir Light', sans-serif;
  }

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }
`

const BookSection = styled.section`
  padding: 5rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 3px solid #ff6f61;

  .book-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .book-content {
    flex: 1;

    h2 {
      font-size: 2rem;
      color: #ff6f61;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #333333 0%, #ff6f61 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Rozha One', serif;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #666666;
      margin-bottom: 2rem;
      font-family: 'Avenir Light', sans-serif;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      margin-bottom: 2rem;
      
      li {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: #555555;
        font-family: 'Avenir Light', sans-serif;
      }
    }
  }
`

const Footer = styled.footer`
  color: #333333;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-top: 3px solid #ff6f61;
  box-shadow: 0 -4px 30px rgba(255, 111, 97, 0.1);

  p {
    font-size: 1.1rem;
    font-weight: 500;
    font-family: 'Avenir Light', sans-serif;
  }
`

const heroContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.4,
      when: "beforeChildren",
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5
    }
  }
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5
    }
  }
}

function App() {
  const [projects] = useState([
    {
      title: "Comunicação com hóspedes",
      description: "Check-in, check-out e suporte durante a estadia dos hóspedes são feitos por nossa equipe de atendimento",
      icon: TalkIcon
    },
    {
      title: "Limpeza e lavanderia",
      description: "Somos obcecados por limpeza e organização para receber os hóspedes",
      icon: CleanIcon
    },
    {
      title: "Manutenção e pequenos reparos",
      description: "Vistoriamos o imóvel a cada locação para garantir o bom estado do imóvel",
      icon: ToolsIcon
    }
  ])

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key="app-content">
          <motion.main
            key="hero-section"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Hero>
              <HeroContent>
                <img src={LogoWhite} alt="BrickLugo Logo" />
                <p>Nós cuidamos da locação do seu imóvel no Airbnb</p>
              </HeroContent>
            </Hero>
          </motion.main>

          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.icon} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectCard>
            ))}
          </ProjectGrid>

          <BookSection>
            <motion.div 
              className="book-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="book-content">
                <h2>Download Nosso PDF - Benefícios da BrickLugo & Airbnb</h2>
                <p>Descubra as vantagens de alugar seu imóvel através da BrickLugo e Airbnb em comparação com a locação tradicional. Nosso guia completo mostra como você pode maximizar seus rendimentos e ter mais segurança com seu imóvel.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    backgroundColor: '#ff6f61',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontFamily: 'Rozha One, serif'
                  }}
                >
                  <a href="/guide" style={{ color: 'white', textDecoration: 'none' }}>
                    Em breve...
                  </a>
                </motion.button>
              </div>
            </motion.div>
          </BookSection>

          <Footer>
            <p>© 2024 BrickLugo. Todos os direitos reservados.</p>
          </Footer>
          
          <FloatingWhatsApp />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
