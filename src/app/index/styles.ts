
import { View, Text, StyleSheet } from "react-native";

import { colors } from "@/"
 export const styles = StyleSheet.create({
    container: {
        flex: 1, // considera toda a area util da tela para os componentes
        justifyContent: "center",// justifica todos os elementos no centro da tela
        alignItems: "stretch",// alinha todos os elemntos no centro da tela
        flexDirection: "column",//organiza todos os elemntos dentro do flex box (coluna)
        
        borderColor:"red",
        borderWidth:5,
    },
    
    title: {
        color: colors.green[900],
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



 