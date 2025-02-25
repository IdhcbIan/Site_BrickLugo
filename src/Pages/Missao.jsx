import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import Header from '../Legos/Header'
import BrickImage from '../assets/Brick.avif'
import TalkIcon from '../assets/Talk.png'
import CleanIcon from '../assets/Clean.png'
import ToolsIcon from '../assets/Tools.png'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    font-family: 'Unna', serif;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #666666;
    max-width: 800px;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Unna', serif;
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

const MissionSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: white;
  color: #333333;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-family: 'Unna', serif;
    text-align: center;
    color: #ff6f61;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8;
    max-width: 800px;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Unna', serif;
  }
`

const PassiveIncomeSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: #ff6f61;
  color: white;
  width: 100%;
  box-sizing: border-box;

  h2 {
    font-size: 2.6rem;
    margin-bottom: 2rem;
    font-family: 'Unna', serif;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8;
    max-width: 800px;
    text-align: center;
    margin-bottom: 2rem;
    font-family: 'Unna', serif;
  }
`

function Missao() {
  const services = [
    {
      title: "Comunicação com hóspedes",
      description: "Nossa equipe especializada gerencia toda a comunicação com os hóspedes, desde o primeiro contato até o check-out. Oferecemos suporte 24/7, garantindo uma experiência excepcional e respostas rápidas a qualquer necessidade durante a estadia.",
      icon: TalkIcon
    },
    {
      title: "Limpeza e lavanderia", 
      description: "Mantemos os mais altos padrões de limpeza e higienização. Nossa equipe profissional realiza uma limpeza completa entre as estadias, incluindo troca de roupas de cama e banho, garantindo que cada hóspede encontre um ambiente impecável.",
      icon: CleanIcon
    },
    {
      title: "Manutenção e pequenos reparos",
      description: "Realizamos vistorias regulares e manutenção preventiva em seu imóvel. Nossa equipe técnica está sempre pronta para resolver qualquer problema rapidamente, preservando a qualidade e o valor do seu investimento.",
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
          
          <MissionSection
            as={motion.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1>NOSSA MISSÃO</h1>
            <p>
              Somos apaixonados por hospitalidade. A Brick Lugo foi feita para atender proprietários de imóveis em Belo Horizonte, 
              cuidando de todo o trabalho envolvido na locação dos imóveis pelo Airbnb. Somos o parceiro ideal para garantir que 
              seu imóvel seja bem cuidado e rentável, enquanto você desfruta de total tranquilidade. Deixe todo o trabalho por 
              nossa conta e aproveite os benefícios de ter um imóvel no Airbnb.
            </p>
          </MissionSection>
          
          <BrickDivider />
          
          <PassiveIncomeSection
            as={motion.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>RENDA PASSIVA COM IMÓVEIS</h2>
            <p>
              Transforme seu imóvel em uma fonte de renda passiva consistente e lucrativa. Com a Brick Lugo, você maximiza o 
              potencial do seu investimento imobiliário sem precisar se preocupar com a gestão diária. Nossa abordagem 
              profissional garante ocupação otimizada e preços competitivos, resultando em retornos financeiros superiores 
              aos aluguéis tradicionais.
            </p>
          </PassiveIncomeSection>
          
          <BrickDivider />
          
          <PassiveIncomeSection
            as={motion.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ background: "#333333" }}
          >
            <h2>LIBERDADE FINANCEIRA</h2>
            <p>
              Alcance mais liberdade financeira com seu patrimônio imobiliário. Ao confiar a gestão do seu imóvel à Brick Lugo, 
              você não apenas garante uma renda passiva consistente, mas também libera seu tempo para se dedicar a outras 
              atividades e investimentos. Nossa expertise no mercado de aluguel atraves do Airbnb em Belo Horizonte assegura que 
              seu imóvel tenha performance superior, contribuindo significativamente para sua independência financeira.
            </p>
          </PassiveIncomeSection>
        </motion.div>
      </PageWrapper>
    </>
  )
}

export default Missao