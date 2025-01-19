import { Dimensions, Text, View } from "react-native"
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import CreditReportStyle from "./CreditReportsStyle";

export interface iData{
    title:string
    subTitle:string
    status:string
    navigation?:string
}
const CreditReportsView = ()=>{
    const [cardList, setCardList] = useState<iData[]>([])
    const data = [
        {title:'Payments', subTitle:'Timely Payments', status:'Excellence',navigation:'payment'},
        {title:'Limits', subTitle:'Credit limit Used', status:'Excellence',navigation:''},
        {title:'Age', subTitle:'Age of Accounts', status:'Excellence',navigation:''},
        {title:'Accounts', subTitle:'Active Accounts', status:'Excellence',navigation:''},
        {title:'Enquiries', subTitle:'Total Enquiries', status:'Low',navigation:''},
        {title:'Profile', subTitle:'Derogatory marks', status:'Low',navigation:''},
    ]

    useEffect(()=>{
        initialiseCredit()
    },[])

    const initialiseCredit = ()=>{
        setCardList(data)
    }

    return(
        <View style={CreditReportStyle.container}>
           <View>
                <View style={CreditReportStyle.chartTitleView}><Text style={CreditReportStyle.chartTitleText}>Your Credit Score</Text></View>
                <LineChart 
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"],
                        datasets: [
                        {
                            data:[
                                0,750,770,690,0,0,0
                            ]
                        }
                        ],
                        }}
                        fromNumber={650}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#ffffff",
                        backgroundGradientFrom: "white",
                        backgroundGradientTo: "white",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#4d2572",
                            fill:'#4d2572',                        
                        },
                        useShadowColorFromDataset:false
                        }}
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        elevation:1,
                        margin:15
                        }}
                        
                />
           </View>
            <View style={{alignItems:'center',width:'100%',height:'100%'}}>
                <View style={CreditReportStyle.chartTitleView}>
                    <Text style={CreditReportStyle.chartTitleText}>What is impacting your score</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row', flex:1,width:'100%',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                {cardList.length>0? cardList.map((item:iData)=>{
                    return(
                        <Card cardData={item}/>
                    )
                }):null}
                </View>
            </View>
        </View>
    )
}
export default CreditReportsView;