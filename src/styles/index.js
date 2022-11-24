import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#902024',
        padding: 100,
        marginTop: 30
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 16,
        fontWeight: 'bold',
    },
    logo: {
        marginVertical: 16,
    },
    input: {
        width: width -32,
        height: 56,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#fff',
    },
    centerScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    button: {
        backgroundColor: "#504054",
        marginVertical: 8,
        height: 56,
        width: width - 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        color: 'white'

    },
    text: {
        fontSize: 16,
        color: 'white',
        //marginVertical: 8,
        width: width - 65 
    }
    
})

export default styles
export { width, height}