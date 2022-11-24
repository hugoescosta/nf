import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

function useAuth() {
    const navigation = useNavigation()

    function fazerLogin({ login, senha }) {
        if ( login === 'admin' && senha === 'admin') navigation.navigate('Home')
        else Alert.alert('Atenção...', "Usuário ou senha inválidos.")
    }

    function fazerLogout() {
        Alert.alert('Atenção...', 'Deseja realmente sair?',
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Confirmar",
                    onPress: () => {
                        Alert.alert("Aviso...", "Logout realizado com sucesso.")
                        navigation.navigate('Login')
                    }
                }
            ]
        )
    }

    return {
        fazerLogin,
        fazerLogout
    }
}





export default useAuth








