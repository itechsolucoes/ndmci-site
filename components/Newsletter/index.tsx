//Styled
import {
  Container,
  BoxNewsletter,
  Text,
  H3,
  Form,
  Input,
  Button
} from './styles'

import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { message } from 'antd';
import { sendEmail } from '../../services/users';

const Newsletter = () => {

  const { register, handleSubmit } = useForm();
  const [ submit, setSubmit ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ form, setForm ] = useState({
    email: ''
  });

  const onSubmit = async(data: any) => {
    setSubmit(true);
    setLoading(true)
    if(!!data.email){
      try{
        await sendEmail(
          {
            to: ['dra.ailane@ndmci.com.br'],
            subject: "Contato via site - NDMCI",
            html: setText(data),
          },
        ).then( () => {
          message.success('Contato enviado com sucesso. Em breve entraremos em contato.')
          setLoading(false);
        })
      } catch (e) {
        message.error('Não foi possivel enviar seu contato. Tente novamente mais tarde.')
        setLoading(false);
      }
    }else{
      message.error('Todos os campos são obrigatórios')
    }
  }

  const setText = (data) => {
    return `
      <h2> Novo contato para caminho de aprendizagem - NDMCI </h2>
      <p> E-mail: ${data.email} </p> <br/>
    `
  }


  return (
    <Container className="container">
      <BoxNewsletter>
        <Text>
          <H3> Participe do nosso caminho de aprendizagem contínua! </H3>
          <p>
            Cadastre-se para participar do nosso caminho de aprendizagem contínua sobre a Medicina Canabinoide e Integrativa.
          </p>
        </Text>
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Input {...register("email")} type="text" placeholder="Digite seu melhor e-mail"/>
          <Button>
            {loading ? 'Salvando...' :  'Cadastrar-se'}
          </Button>
        </Form>
      </BoxNewsletter>
    </Container>
  )
}

export default Newsletter;