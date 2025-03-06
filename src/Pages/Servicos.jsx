import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Header from '../Legos/Header'
import BrickImage from '../assets/Brick.avif'
import TalkIcon from '../assets/Talk.png'
import CleanIcon from '../assets/Clean.png'
import ToolsIcon from '../assets/Tools.png'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`

const PageWrapper = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  left: 0;
`

const ServiceSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  width: 100%;
  box-sizing: border-box;

  h2 {
    font-size: 2.4rem;
    color: #ff6f61;
    margin-bottom: 2rem;
    font-family: 'Rozha One', serif;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666666;
    max-width: 800px;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Avenir Light', 'Avenir', sans-serif;
    font-weight: 300;
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
  }
`

const BrickDivider = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${BrickImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`

function Servicos() {
  const services = [
    {
      title: "Comunicação com hóspedes",
      description: "Nossa equipe especializada gerencia toda a comunicação com os hóspedes, desde o primeiro contato até o check-out. Garantimos uma experiência excepcional e respostas rápidas a qualquer necessidade durante a estadia.",
      icon: TalkIcon
    },
    {
      title: "Limpeza e lavanderia", 
      description: "Mantemos os mais altos padrões de limpeza e higienização. Nossa equipe profissional realiza uma limpeza completa entre as estadias, incluindo troca de roupas de cama e banho, garantindo que cada hóspede encontre um ambiente impecável.",
      icon: CleanIcon
    },
    {
      title: "Manutenção",
      description: "Em caso de manutenção, apontamos nossa equipe conhecida e confiável para as manutenções necessárias, garantindo que seu imóvel esteja sempre em perfeitas condições para receber os hóspedes.",
      icon: ToolsIcon
    }
  ]

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: '100%' }}
        >
          <Header />
          <AnimatePresence mode="wait">
            {services.map((service, index) => (
              <>
                <ServiceSection
                  as={motion.section}
                  key={`service-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={service.icon} alt={service.title} />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </ServiceSection>
                
                {index < services.length - 1 && <BrickDivider />}
              </>
            ))}
          </AnimatePresence>
        </motion.div>
      </PageWrapper>
    </>
  )
}

export default Servicos