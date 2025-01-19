import { Dimensions, StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
    cardView:{ 
        backgroundColor:'white', 
        borderColor:'black', 
        width:Dimensions.get('screen').width*0.45,
        height:Dimensions.get('screen').height*0.12,
        borderRadius:10,
        marginVertical:10,
        elevation:1,
        padding:5
    },
    titleView:{
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        alignItems:'center',
    },
    titleText:{
        color:'black',
        fontSize:14,
        fontWeight:'600'
    },
    subtitleView:{
        marginLeft:10,
        marginTop:15
    },
    subtitleText:{
        color:'grey',
        fontSize:12,
        // fontWeight:'400'
    },
    statusView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop:5
    },
    statusText:{
        marginLeft:5,
        fontSize:10,
        fontWeight:'600'
    }
})
export default CardStyle;