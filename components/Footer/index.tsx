//Dependencies
import Image from 'next/image';
import Link from 'next/link';
import { IconInstagram, IconLinkedin, IconTwitter, IconWhats, IconYoutube } from '../Icons';

//Components
import PlaceholderImage from '../PlaceholderImage/placeholder-blur';

//Styled
import {
  FooterContainer,
  Content,
  Blocks,
  About,
  Sinagure,
  LinkWhats,
  Social
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Content className="container">
        <Blocks>
          <About>
            <Image
              src='/assets/images/logo.png'
              alt="NDMCI - Núcleo de Desenvolvimento em Medicina Canabinóide e Integrativa"
              loading="eager"
              layout="fixed"
              width={141}
              height={38}
              placeholder='blur'
              blurDataURL={PlaceholderImage(120,23)}
              objectPosition="center top"
            />
            <p>
              O NDMCI é um programa composto por um grupo de médicos de diversas especialidades, com cursos de capacitação, mentorias, educação para a população, comissão jurídica e atendimento ao paciente, com protocolos clínicos consistentes, voltados para o levantamento de dados baseados em evidências de casos reais de pacientes em uso de cannabis medicinal
            </p>
            <Social>
              <a target="new" href="https://www.instagram.com/ndmcioficial/">
                <IconInstagram width={21} height={21} />
              </a>
              <a target="new" href="https://api.whatsapp.com/send?phone=5511944771449&text=Ol%C3%A1%2C%20vim%20pelo%20site%20NDMCI%20e%20gostaria%20de%20conversar.">
                <IconWhats width={21} height={21} />
              </a>
              <a target="new" href="https://www.youtube.com/channel/UC0N2rigSZQERO6fWH7ZxDYg">
                <IconYoutube width={23} height={23} />
              </a>
            </Social>
          </About>
        </Blocks>
        <Sinagure>
          © Todos os direitos reservados - 2022
        </Sinagure>
      </Content>

      <LinkWhats href='https://wa.me/5511944771449?text=Ol%C3%A1%2C+quero+conhecer+melhor+a+NDMCI.' target="new">
        <label> Fale conosco </label>
        <Image
          src={'https://cdn-icons-png.flaticon.com/512/5968/5968841.png'}
          width={45}
          height={45}
        />
      </LinkWhats>
    </FooterContainer>
  )
}

export default Footer;