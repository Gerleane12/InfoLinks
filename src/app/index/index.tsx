import { View, Text } from "react-native";
import {styles} from "./styles"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
 

    return (
        // Componente Text sendo usando para Renderizar um texto na tela.

        <View style={styles.container}>
            
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
    
