//Dependencies
import Link from 'next/link'

//Styled
import {
  Container,
  Content,
  Header,
  StepsList,
  Step,
  Number,
  Title
} from './styles'

//Components
import SubTitle from '../SubTitle';


const Steps = ({}) => {
  return (
    <Container>
      <Content className='container'>
        <Header>
          <SubTitle title="O Programa" />
        </Header>

        <StepsList>
          <Step>
            <Link href='#medicos'>
              <a>
                <Number> 1 </Number>
                <Title> Escolha um médico </Title>
                <p>
                  De acordo com a especialidade e patologia a ser tratada.
                </p>
              </a>
            </Link>
          </Step>
          <Step>
            <Link href='https://atendimento.ndmci.com.br/paciente'>
              <a>
                <Number> 2 </Number>
                <Title> Agende uma consulta </Title>
                <p>
                  Agende sua consulta com seu profissional
                </p>
              </a>
            </Link>
          </Step>
          <Step>
            <Link href='https://atendimento.ndmci.com.br/paciente/cadastro'>
              <a>
                <Number> 3 </Number>
                <Title> Faça seu cadastro no ESPAÇO PACIENTE </Title>
                <p>
                  Simples, pratico e rápido!
                </p>
              </a>
            </Link>
          </Step>
          <Step>
            <Link href='#lives'>
              <a>
                <Number> 4 </Number>
                <Title> Caminho de aprendizagem </Title>
                <p>
                Se cadastre e participe do nosso caminho de aprendizagem contínua sobre a Medicina Canabinoide e Integrativa
                </p>
              </a>
            </Link>
          </Step>
          <Step>
            <Link href='#duvida'>
              <a>
                <Number> 5 </Number>
                <Title> Dúvidas </Title>
                <p>
                  Pergunte aos nossos especialistas.
                </p>
              </a>
            </Link>
          </Step>
        </StepsList>

      </Content>
    </Container>
  )
}

export default Steps;