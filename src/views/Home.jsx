import React from "react";
import { useNavigation } from "@react-navigation/native";
import Title from '../components/Title'
import Container from "../components/Container";
import MyButton from "../components/MyButtom";
import useAuth from "../hooks/auth";


function Home() {
  const navigation = useNavigation()

  const { fazerLogout } = useAuth()
  
  function consultaRepetidora() {
    navigation.navigate('ConsultaRep')
  }

  return(
    <Container centerScreen>

          <Title text='Menu' />
          <MyButton text="Consulta Repetidora" onPress={consultaRepetidora}></MyButton>
          <MyButton text="Sair" onPress={fazerLogout}></MyButton>
          

     </Container>
  )
}



export default Home