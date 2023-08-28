//Styled
import {
  Container,
  Content,
  Text,
} from './styles'

//Components
import SubTitle from '../SubTitle';


const AboutMissionSimple = ({}) => {
  return (
    <Container>
      <Content className='container'>
        <Text>
          <SubTitle title="Nossa Missão"/>
          <p>
            Ser a fonte aceleradora da pesquisa e do desenvolvimento da Medicina Canabinóide e Integrativa no país, promovendo a geração de dados pelo estudo de casos reais, com observação dos possíveis efeitos farmacodinâmicos e farmacológicos, além das doses terapêuticas e reações adversas.
          </p>
          <p>
            Promover educação continuada e capacitação profissional para os médicos, além de educação para a população, com o intuito de desmistificar e conscientizar a sociedade sobre os inúmeros benefícios da Cannabis Medicinal e da Medicina Integrativa.
          </p>
          <p>
            Garantir aos pacientes acesso ao tratamento com Cannabis Medicinal e Medicina Integrativa a preços acessíveis e populares, bem como o acompanhamento e monitoramento de forma criteriosa, através de protocolos clínicos consistentes e seguros.
          </p>
        </Text>
      </Content>
    </Container>
  )
}

export default AboutMissionSimple;