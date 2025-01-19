import { Pressable, Text, View } from "react-native"
import CardStyle from "./CardStyle";
import { iData } from "../pages/creditreports/CreditReportsView";
import { Button, Checkbox, IconButton, MD3Colors, RadioButton } from "react-native-paper";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PageNavigation from "../navigation/PageNavigation";

type cardProps = {
    cardData: iData
}
const Card = (props:cardProps)=>{
    const pageNav = new PageNavigation
    return(
        <Pressable style={CardStyle.cardView} onPress={()=>pageNav.navigate(props.cardData.navigation)}>
            <View style={CardStyle.titleView}>
                <Text style={CardStyle.titleText}>{props.cardData.title}</Text>
                <FontAwesome name="angle-right" size={18}/>
                
            </View>
            <View style={CardStyle.subtitleView}>
                <Text style={CardStyle.subtitleText}>{props.cardData.subTitle}</Text>
            </View>
            <View style={CardStyle.statusView}>
                <MaterialCommunityIcons name="radiobox-marked" color={props.cardData.status=='Excellence'?'green':'red'} size={12}/>
                <Text style={CardStyle.statusText}>Low</Text>
            </View>
        </Pressable>
    )
}
export default Card;