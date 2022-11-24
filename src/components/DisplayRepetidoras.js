import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import estilo from './estilo';


export default props => {
  const [ repetidoraEsc, setrepetidoraEsc ] = useState([]);
  const cidade = props.cidade
  const pais = props.pais
  const getRepetidoraData = (cidade) => {
    const endpoint = `https://www.repeaterbook.com/api/exportROW.php?country=${pais}&city=${cidade}`;
    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( ({results}) => {
           setrepetidoraEsc(results);
        })
        .catch(( e ) => {
          Alert.alert('Erro', e.message);
        });
  }

  React.useEffect(() => {
    if (cidade && cidade !== '') { 
      getRepetidoraData(cidade)
    }
  },[cidade])
  
  const encontrados = 0

  return (   
    <ScrollView>
      <SafeAreaView>
        <View>  
          <Text style={[estilo.txtPB,estilo.centro]}>Encontrado: {repetidoraEsc.length -1 === -1 ? 0 : repetidoraEsc.length -1} </Text>
          {repetidoraEsc?.map(rep => (rep.Frequency) &&  rep['Input Freq'] &&  (
            <View style={styles.container}>
              <Text style={estilo.txtPPB} >RX: {rep.Frequency}</Text>
              <Text style={estilo.txtPPB}>TX: {rep['Input Freq']}</Text>            
              <Text style={estilo.txtPP}>Offset: {  parseFloat(rep.Frequency - rep['Input Freq']).toFixed(1)  } </Text>
              <Text style={estilo.txtPP}>Subtom: {rep.PL}</Text>
              <Text style={estilo.txtPP}>Localização: {rep['Nearest City']}</Text>
              <Text style={estilo.txtPP}>Latitude: {rep.Lat}</Text>
              <Text style={estilo.txtPP}>Longitude: {rep.Long}</Text>
              <Text style={estilo.txtPP}>Indicativo: {rep.Callsign}</Text>
              <Text style={estilo.txtPP}>Em uso: {rep.Use}</Text>
              <Text style={estilo.txtPP}>Status: {rep['Operational Status']}</Text>
              {rep['FM Analog'] === "Yes" ? <Text style={estilo.txtPP}>Modo: FM</Text> : <Text style={estilo.txtPP}>Modo:</Text>}
            </View>

          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    //backgroundColor: 'white',
    marginBottom: 15
  }
});
