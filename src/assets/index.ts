// Imagens
import headerImage from './images/header.PNG';
import whatsappIcon from './icons/icon-whatsapp.png';
import economizaAi1 from './economiza-ai-1.svg';
import economizaAi2 from './economiza-ai-2.svg';
import economizaAi3 from './economiza-ai-3.svg';
import pedro from './pedro.png';
import julia from './julia.png';
import joao from './joao.png';

export const Images = {
  header: headerImage,
  whatsapp: whatsappIcon,
  economizaAi: {
    painel: economizaAi1,
    correcao: economizaAi2,
    transacoes: economizaAi3
  },
  testimonials: {
    pedro,
    julia,
    joao
  }
} as const; 