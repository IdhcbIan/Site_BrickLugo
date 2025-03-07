import { motion } from 'framer-motion'
import styled from 'styled-components'
import Header from '../Legos/Header'
import GlobalStyles from '../styles/GlobalStyles'

const PageWrapper = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  left: 0;
`

const TestimonialsSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  h1 {
    font-size: 2.8rem;
    color: #404040;
    margin-bottom: 3rem;
    font-family: 'Rozha One', serif;
    text-align: center;
  }
`

const TestimonialsTrack = styled(motion.div)`
  display: flex;
  width: max-content;
  gap: 2rem;
  padding: 1rem 0;
`

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 200px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    flex-grow: 1;
    font-family: 'Avenir Light', sans-serif;
    font-weight: 360;
    font-style: italic;
  }
`

function Depoimentos() {
  const testimonials = [
    {
      id: 1,
      text: "Extremamente novo, aconchegante, lugar tranquilo, perto do BH shopping, fui a trabalho e me senti em casa."
    },
    {
      id: 2,
      text: "Me senti em casa, agradeço a todos pela gentileza e profissionalismo"
    },
    {
      id: 3,
      text: "O local é ótimo, a comunicação foi muito boa e o apartamento estava impecável, super recomendo!"
    },
    {
      id: 4,
      text: "O Lugar era lindo e muito bem equipado, a decoração muito bem feita e o lugar estava muito limpo e cheiroso, a localidade é ótima. O Atendimento foi ótimo e super rápido, todas as mensagens e solicitações foram respondidas em tempo recorde, meus parabéns. Recomendo!"
    },
    {
      id: 5,
      text: "O apartamento é impecável, confortável, organizado, bem equipado. Ficamos encantados com o cuidado em todos os detalhes. A Anfitriã foi solicita, muito eficiente e ágil."
    },
    {
      id: 6,
      text: "Atendimento nota 10! Local super limpo e confortável. Indico com certeza!"
    },
    {
      id: 7,
      text: "Apartamento aconchegante, limpo e oferece todas as comodidades descritas. Os anfitriões foram muito gentis, responderam sempre muito rápido todas as dúvidas Além disso os funcionários do prédio foram muito queridos. Foi uma experiência maravilhosa!"
    },
    {
      id: 8,
      text: "Apartamento super aconchegante, completo, extremamente limpo e com uma ótima localização"
    }
  ];

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: '100%' }}
        >
          <Header />
          
          <TestimonialsSection>
            <h1>Depoimentos de quem escolheu a Brick Lugo</h1>
            
            <TestimonialsTrack
              animate={{ x: [0, -2000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <p>"{testimonial.text}"</p>
                </TestimonialCard>
              ))}
            </TestimonialsTrack>
          </TestimonialsSection>
        </motion.div>
      </PageWrapper>
    </>
  );
}

export default Depoimentos
