import { View, Text, StyleSheet } from "react-native";

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {

    return (
        // Componente Text sendo usando para Renderizar um texto na tela.
        <View>

            <Text style={styles.title}> Eu sou Millior !!!</Text>
            <Text style={styles.title2}> Gerleane</Text>
            <Text style={styles.title3}> 28 anos</Text>
            <Text style={styles.title4}>A vida é um processo!</Text>
            <Text style={styles.title5}> Estudante de Informática</Text>
            <Text style={styles.title6}>Futuro prospero!!</Text>
            <Text style={styles.title7}> espero anciosa pela apresentação do PCCT!!</Text>
        </View>
        
    );
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1, // considera toda a area util da tela para os componentes
        justifyContent: "center",// justifica todos os elementos no centro da tela
        alignItems: "center",// alinha todos os elemntos no centro da tela
        flexDirection: "row",//organiza todos os elemntos dentro do flex em linha (esquerda)

    },
    
    title: {
        color: "red",
        fontSize: 22,
    },

    title2:{
        color:"blue",
        fontSize:22,
    }, 
title3:{
    color:"pink",
    fontSize:22,
},
title4:{
    color:"red",
    fontSize:24,
},
title5:{
    color:"yellow",
    fontSize:22,

},
title6:{
    color:"black",
    fontSize:22,
},
title7:{
    color: "orange",
    fontSize:22,
},
})



 