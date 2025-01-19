import { ScrollView, Text, View } from "react-native";
import SummaryChartStyle from "./SummaryChartStyle";
import LinearGradient from "react-native-linear-gradient";
import { iLoanData } from "../pages/creditreports/payments/paymenthistory/PaymentHistoryView";
import FontAwsome from "react-native-vector-icons/FontAwesome";

type SummaryProp = {
    data:iLoanData
}

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const SummaryChart = (props:SummaryProp)=>{
    return(
        <ScrollView style={SummaryChartStyle.mainView}>
            <View style={SummaryChartStyle.chartHeader}>
                <Text style={{fontWeight:'600',fontSize:14}}>Summary</Text>
                <LinearGradient 
                style={SummaryChartStyle.lastupdateText} 
                colors={['white','#fddd7b']}
                start={{ x: 0, y: 0 }} // Top-left corner
                end={{ x: 1, y: 1 }}   // Bottom-right corner
                >
                    <Text style={{color:'grey',fontSize:10}}>Last updated:{props.data.payment_history?props.data.payment_history.last_updated_on:""}</Text>
                </LinearGradient>
            </View>
            <View style={{marginTop:10}}>
                <View style={{display:'flex',flexDirection:'row',flex:1,width:'88%',position:'absolute',right:0}}>
                {months.map((data=>{
                    return(
                        <Text style={{fontSize:10,flex:1/12}}>{data}</Text>
                    )
                }))}
                </View>
                <View style={{marginTop:25}}>
                {props.data.payment_history.payment_summary.length>0?
                props.data.payment_history.payment_summary.map((item)=>{
                    return(
                        <View style={{display:'flex',flexDirection:'row', marginTop:10,width:'100%'}}>
                            <Text style={{width:'10%'}}>{item.year}</Text>
                            <View style={{display:'flex',flexDirection:'row', flex:1, marginLeft:10}}>
                                {item.summary.length>0?
                                item.summary.map((status)=>{
                                    return(
                                        status=='NA'?
                                        <FontAwsome name="circle" color={'lightgrey'} size={8} style={{flex:1/12,verticalAlign:'middle'}}/>
                                        :status=="PAID"?<FontAwsome name="check-circle" color={'green'} size={15} style={{flex:1/12}}/>
                                        :<FontAwsome name="circle" color={'red'} size={14} style={{flex:1/12}}/>
                                    )
                                }):null}
                            </View>
                        </View>
                    )
                }):<View></View>}
                </View>
                <View style={SummaryChartStyle.dottedLine}></View>
                <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
                    <View style={SummaryChartStyle.bottomTextView}>
                        <FontAwsome name="circle" color={'lightgrey'} size={14} />
                        <Text style={SummaryChartStyle.bottomText}>Not Available</Text>
                    </View>
                    <View style={SummaryChartStyle.bottomTextView}>
                        <FontAwsome name="check-circle" color={'green'} size={15} />
                        <Text style={SummaryChartStyle.bottomText}>On Time Payment</Text>
                    </View>
                    <View style={SummaryChartStyle.bottomTextView}>
                        <FontAwsome name="circle" color={'red'} size={14} />
                        <Text style={SummaryChartStyle.bottomText}>Delayed</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}
export default SummaryChart;