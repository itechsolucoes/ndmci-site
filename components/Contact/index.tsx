//Styled
import SubTitle from '../SubTitle';
import {
  Container,
  BoxContact,
  Text,
  Form,
  BoxInput,
  Label,
  Input,
  Double,
  One,
  Textarea,
  Button,
  LabelError
} from './styles'

import { sendEmail } from '../../services/users';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { message } from 'antd';

const Contact = () => {

  const { register, handleSubmit } = useForm();
  const [ showError, setShowError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ submit, setSubmit ] = useState(false);
  const [ form, setForm ] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const onSubmit = async(data: any) => {

    setSubmit(true);
    setLoading(true);
    if(!!data.name &&  !!data.email && !!data.phone && !!data.subject && !!data.subject){
      try{
        await sendEmail(
          {
            to: 'dra.ailane@ndmci.com.br',
            // to: ['edwinreule@gmail.com'],
            cc: 'edwinreule@gmail.com',
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
      setShowError(true);
      setLoading(false);
      message.error('Todos os campos são obrigatórios')
    }
  }

  const setText = (data) => {
    return `
      <h2> Contato via site - NDMCI </h2>
      <p> Nome: ${data.name} ${data.lastName} </p>
      <p> E-mail: ${data.email} </p>
      <p> Telefone: ${data.phone} </p>
      <p> Assunto: ${data.subject} </p>
      <p> Mensagem: <br/> </p>
      <p>${data.subject}</p>
    `
  }

  return (
    <Container className="container">
      <BoxContact>
        <Text>
          <SubTitle title="Espaço tira-dúvidas" />
          <p>
            Faça aqui sua pergunta para um especialista.
          </p>
        </Text>
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Double>
            <BoxInput>
                <Label>Nome</Label>
                <Input type="text" {...register("name")}/>
                {/* {!!submit && !form && <LabelError> Campo Obrigatório </LabelError> } */}
            </BoxInput>
            <BoxInput>
                <Label>Sobrenome</Label>
                <Input type="text"  {...register("lastName")}/>
                {/* {!!submit && !form.lastName && <LabelError> Campo Obrigatório </LabelError> } */}
            </BoxInput>
          </Double>
          <Double>
           <BoxInput>
              <Label>Email</Label>
              <Input type="text"  {...register("email")}/>
              {/* {!!submit && !form.email && <LabelError> Campo Obrigatório </LabelError> } */}
           </BoxInput>
           <BoxInput>
              <Label>Telefone</Label>
              <Input type="text"  {...register("phone")}/>
              {/* {!!submit && !form.phone && <LabelError> Campo Obrigatório </LabelError> } */}
           </BoxInput>
          </Double>
          <One>
           <BoxInput>
              <Label>Assunto</Label>
              <Input type="text"  {...register("subject")}/>
              {/* {!!submit && !form.subject && <LabelError> Campo Obrigatório </LabelError> } */}
           </BoxInput>
          </One>
          <One>
            <Label>Mensagem</Label>
            <Textarea rows={3}  {...register("message")}/>
            {/* {!!submit && !form.message && <LabelError> Campo Obrigatório </LabelError> } */}
          </One>
          <One className="justify-end">
            <Button type='submit'>
            {!!loading ? 'Enviando mensagem...' : 'Enviar mensagem'} </Button>
          </One>
          {
            !!showError && <LabelError> Por favor, preencha todos os campos antes de continuar </LabelError>
          }
        </Form>
      </BoxContact>
    </Container>
  )
}

export default Contact;