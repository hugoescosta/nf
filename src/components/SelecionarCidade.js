import React from 'react'
import { View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import estilo from './estilo'


const SelecionarCidade = ({ setCidade, cidades}) => {

    return(
        <View style={estilo.cor}>
            <SelectList 
                data={cidades}
                defaultOption={{ key:'Acari', value:'Acari' }}
                setSelected={setCidade}
                dropdownStyles={{backgroundColor:'yellow'}}
                dropdownItemStyles={{marginHorizontal:10}}
                dropdownTextStyles={{Color:'yellow'}}
                placeholder="Selecione a Cidade"
                searchPlaceholder="Digite para uma nova pesquisa"
                maxHeigth={100}
            />
        </View>
    )
}    

export default SelecionarCidade

// import SelectList from "react-native-dropdown-select-list"

// function SelecionarCidade({ setCidade, cidades }) {

//     return(
//         <SelectList 
//                 data={cidades}
//                 defaultOption={{ key:'Acari', value:'Acari' }}
//                 setSelected={setCidade}
//                 dropdownStyles={{backgroundColor:'yellow'}}
//                 dropdownItemStyles={{marginHorizontal:10}}
//                 dropdownTextStyles={{Color:'white'}}
//                 placeholder="Selecione a Cidade"
//                 searchPlaceholder="Digite para uma nova pesquisa"
//                 maxHeigth={100}
//            />

//     )

// }

// export default SelecionarCidade