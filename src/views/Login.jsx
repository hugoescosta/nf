import React, { useState } from 'react'
import Title from '../components/Title'
import LogoTipo from '../components/Images'
import Input from '../components/Input' 
import Container from '../components/Container'
import MyButton from '../components/MyButtom'
import useAuth from '../hooks/auth'
import { Alert } from 'react-native'


function Login() {

    const [form, setForm] = useState({login:'', senha:''})
    const { fazerLogin } = useAuth()
    return (
        
        <Container centerScreen>
                <LogoTipo></LogoTipo>
                <Title text='Acesse sua conta' />
                <Input
                    label= 'Login'
                    placeholder="Email" 
                    keyboardType='email-address'
                    onChangeText={(text) => setForm({ ...form, login: text })}
                    autoCapitalize='none'
                />
                <Input
                    label= 'Senha'
                    placeholder="Senha" 
                    secureTextEntry
                    onChangeText={(text) => setForm({ ...form, senha: text })}
                    autoCapitalize='none'
                />
                <MyButton text="Entrar" onPress={() => fazerLogin(form)}></MyButton>
        </Container>
    )
}

export default Login
