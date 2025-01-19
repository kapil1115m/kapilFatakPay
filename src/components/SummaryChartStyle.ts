import { Dimensions, StyleSheet } from "react-native";

const SummaryChartStyle = StyleSheet.create({
    mainView:{
        margin:10,
        height:Dimensions.get('screen').height*0.25,
        width:Dimensions.get('screen').width*0.9,
        backgroundColor:'#ffffff',
        padding:15,
        elevation:1,
        borderRadius:10
    },
    chartHeader:{
        display:'flex',
        flexDirection:'row',
        width:'100%'
    },
    lastupdateText:{
        position:'absolute',
        right:0,
        padding:2,
        borderRadius:2
    },
    dottedLine: {
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        borderStyle: 'dashed',  // Works on iOS
        marginTop: 30,
      },
      bottomTextView:{
        display:'flex',
        flexDirection:'row',
        marginLeft:20
      },
      bottomText:{
        color:'grey',
        fontSize:10,
        marginLeft:5
      }
})
export default SummaryChartStyle;