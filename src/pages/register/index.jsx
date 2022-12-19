import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AiOutlineUser, AiTwotoneMail, AiTwotoneLock } from "react-icons/ai";
import * as SC from './styles' 

import { useForm } from "react-hook-form";
import { Button } from '../../components/Button';



 const Register = () => {
 
  const { control, handleSubmit,  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
});

  return (
  <>
    <Header />
    <SC.Container>
          <SC.Column>
            <SC.Title>A plataforma para você aprender com experts, dominar as 
            principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </SC.Title>
          </SC.Column>
          <SC.Column>
            <SC.Wrapper>
                <SC.TitleRegister>
                Comece agora grátis
                </SC.TitleRegister>
                <SC.SubtitleRegister>
                  Crie sua conta e make the change.
                </SC.SubtitleRegister>
                <form onSubmit={handleSubmit}>
                  <Input placeholder="Nome completo" leftIcon={<AiOutlineUser/>} name="nome" control={control}/>
                  <Input placeholder="E-mail" leftIcon={<AiTwotoneMail/>} name="email" control={control}/>
                  <Input placeholder="Senha" leftIcon={<AiTwotoneLock/>} name="senha" control={control}/>
                </form>
                <SC.Row>
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </SC.Row>
                    <SC.TermoDio>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SC.TermoDio>
                  <SC.TenhoConta>Já tenho conta. <a href="/fazerLogin"> Fazer login</a></SC.TenhoConta>
            </SC.Wrapper>
          </SC.Column>
    </SC.Container>
  </>
  )
}

export { Register }