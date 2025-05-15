// Imagens
import headerImage from './images/header.PNG';
import whatsappIcon from './icons/icon-whatsapp.png';
import economizaAi5 from './economiza-ai-5.png';
import economizaAi6 from './economiza-ai-6.png';
import economizaAi3 from './economiza-ai-3.png';
import pedro from './pedro.png';
import julia from './julia.png';
import joao from './joao.png';
// Novos ícones
import creditCard from './icons/credit-card.png';
import crown from './icons/crown.png';
import rocket from './icons/rocket.png';
import shield from './icons/shield.png';

const Images = {
  header: headerImage,
  whatsapp: whatsappIcon,
  economizaAi: {
    painel: economizaAi5,
    correcao: economizaAi6,
    transacoes: economizaAi3
  },
  testimonials: {
    pedro,
    julia,
    joao
  },
  icons: {
    creditCard,
    crown,
    rocket,
    shield
  }
} as const;

export default Images; 