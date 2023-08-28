//Styled
import {
  Container,
  Content,
  Text,
  Mission,
  Item,
  Number,
  Medics,
  BoxMedic,
  ImageDoctor,
  Box,
} from './styles'
import Image from 'next/image';

//Components
import SubTitle from '../SubTitle';


const AboutSimple = ({}) => {
  return (
    <Container>
      <Content className='container'>
        <Text>
          <SubTitle title="O NDMCI"/>
          <p>
            O Núcleo de Desenvolvimento em Medicina Canabinóide e Integrativa (NDMCI), é um programa, formado por um grupo de médicos de diversas especialidades, voltado para o estudo, pesquisa, desenvolvimento e aprimoramento das práticas clínicas de Cannabis medicinal e Medicina Integrativa.
          </p>
        </Text>
      </Content>
      <Content className='container'>
        <Mission>
          <SubTitle title="NOSSA MISSÃO"/>
          <Item>
            <Number>
              1
            </Number>
            <p>
              Ser a fonte aceleradora da pesquisa e do desenvolvimento da Medicina Canabinóide e Integrativa no país, promovendo a geração de dados pelo estudo de casos reais, com observação dos possíveis efeitos farmacodinâmicos e farmacológicos, além das doses terapêuticas e reações adversas.
            </p>
          </Item>

          <Item>
            <Number>
              2
            </Number>
            <p>
              Promover educação continuada e capacitação profissional para os médicos, além de educação para a população, com o intuito de desmistificar e conscientizar a sociedade sobre os inúmeros benefícios da Cannabis Medicinal e da Medicina Integrativa.
            </p>
          </Item>

          <Item>
            <Number>
              3
            </Number>
            <p>
              Garantir aos pacientes acesso ao tratamento com Cannabis Medicinal e Medicina Integrativa a preços acessíveis e populares, bem como o acompanhamento e monitoramento de forma criteriosa, através de protocolos clínicos consistentes e seguros.
            </p>
          </Item>

        </Mission>
      </Content>
      <Content className='container'>
        <Medics>
          <BoxMedic>
            <ImageDoctor>
              <Image
                src='/assets/images/ailane.jpeg'
                layout="fixed"
                alt="Ailane"
                width={150}
                height={150}
                className='img'
                objectFit='cover'
                objectPosition={'top'}
              />
            </ImageDoctor>
            <h4> <span> Dra. Ailane Araujo </span> </h4>
            <Box>
              <h5> Idealizadora e Presidenta NDMCI </h5>
              <p>
                Médica, pós-graduada em Pediatra, Nutrologia,
                Psicologia Positiva e Coaching com
                certificação internacional.
              </p>
              <p>
                Idealizadora e Presidente do NDMCI, consultora técnica
                em Terapia Canabinóide.Professora de
                Pós-graduação no Curso de Atualização em
                Cannabis Medicinal, na UNIFESP.
              </p>
              <p>
                Palestrante nacional e nternacional de
                Cannabis Medicinal e Medicina Integrativa.
              </p>
            </Box>
          </BoxMedic>
          <BoxMedic>
            <ImageDoctor>
              <Image
                src='/assets/images/dr_jimmy.jpeg'
                layout="fixed"
                alt="Dr. Jimmy Fardin Rocha"
                width={150}
                height={150}
                className='img'
                objectFit='cover'
                objectPosition={'top'}
              />
            </ImageDoctor>
            <h4> <span> Dr. Jimmy Fardin Rocha </span> </h4>
            <Box>
              <h5> Vice Presidente NDMCI </h5>
              <p>
                Médico, formado em medicina com especialização
                em cirurgia do joelho. Médico da Força Aérea Brasileira,
                com especialização em medicina esportiva.
              </p>
              <p>
                Atuou nos jogos mundiais militares e nas olimpíadas
                e Paralimpíadas de 2016. Certificado em
                medicina canabinóide em 2018, pela Unifesp
                e Cannabis Academy, e é prescritor desde então.
              </p>
              <p>
                Palestrante em congressos canábicos. Ministrou cursos
                on-line e presenciais, nas faculdades de Ilhéus e Itacaré,
                sobre cannabis no esporte.
              </p>
              <p>
                Atende pacientes nacionais e internacionais.
              </p>
            </Box>
          </BoxMedic>
          <BoxMedic>
            <ImageDoctor>
              <Image
                src='/assets/images/rafa.jpg'
                layout="fixed"
                alt="Dr. Rafael Vieira"
                width={150}
                height={150}
                className='img'
                objectFit='cover'
                objectPosition={'top'}
              />
            </ImageDoctor>
            <h4> <span> Dr. Rafael Vieira </span> </h4>
            <Box>
              <h5> Diretor do Comitê Jurídico NDMCI </h5>
              <p>
                O advogado, Dr. Rafael Vieira, responsável pelo
                comitê jurídico do NDMCI, é especialista em Direito a
                Saúde, com atuação de maneira consultiva,
                preventiva e contenciosa.
              </p>
              <p>
                Como resultado desse trabalho desempenhado por
                longos anos na área do Direito a saúde,
                apresenta um trabalho qualificado e eficaz,
                sobretudo com planos de saúde, bem como o próprio
                Estado a viabilizar tratamentos médicos,
                inclusive a base de Canabidiol.
              </p>
            </Box>
          </BoxMedic>

          <BoxMedic>
            <ImageDoctor>
              <Image
                src='/assets/images/Emílio.jpeg'
                layout="fixed"
                alt="Dr. Emílio Figueiredo"
                width={150}
                height={150}
                className='img'
                objectFit='cover'
                objectPosition={'top'}
              />
            </ImageDoctor>
            <h4> <span> Dr. Emílio Figueiredo </span> </h4>
            <Box>
              <h5> Diretor do Comitê Jurídico NDMCI </h5>
              <p>
                O advogado,Dr. Emílio Figueiredo, especializado em Direito e Cannabis com responsabilidade social no Brasil.
                É fundador da Rede Jurídica pela Reforma da Política de Drogas, um coletivo de juristas dispostos a construir uma nova realidade a partir da política de drogas.
              </p>
            </Box>
          </BoxMedic>
        </Medics>
      </Content>
    </Container>
  )
}

export default AboutSimple;