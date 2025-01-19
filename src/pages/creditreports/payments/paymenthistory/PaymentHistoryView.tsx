import { Pressable, Text, View } from "react-native";
import PaymentHistoryStyle from "./PaymentHistoryStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { Button } from "react-native-paper";
import SummaryChart from "../../../../components/SummaryChart";
import PageNavigation from "../../../../navigation/PageNavigation";

export interface iLoanData{
                "bank_name": string
                "type_of_loan": string
                "issued_on": string
                "account_status": string
                "amount_paid": string
                "total_loan_amount": string
                "loan_tenure": string
                "payment_percentage": string
                "payment_history": {
                    "last_updated_on": string
                    "payment_summary": [
                        {
                            "year": string
                            "summary": string[]
                        },
                        {
                            "year": string
                            "summary": string[]
                        }
                    ]
                }
            
}
const PaymantHistoryView = ()=>{

    const pageNav = new PageNavigation

    const jsonData = {
        "record": {
            "data": {
                "bank_name": "HDFC Bank",
                "type_of_loan": "Personal Loan",
                "issued_on": "25 Jan 2025",
                "account_status": "Active",
                "amount_paid": "25,000",
                "total_loan_amount": "50,000",
                "loan_tenure": "12 Month",
                "payment_percentage": "35%",
                "payment_history": {
                    "last_updated_on": "05 May 2024",
                    "payment_summary": [
                        {
                            "year": "2023",
                            "summary": [
                                "NA",
                                "NA",
                                "PAID",
                                "PAID",
                                "PAID",
                                "PAID",
                                "PAID",
                                "PAID",
                                "DELAYED",
                                "DELAYED",
                                "NA",
                                "NA"
                            ]
                        },
                        {
                            "year": "2024",
                            "summary": [
                                "NA",
                                "NA",
                                "NA",
                                "NA",
                                "NA",
                                "PAID",
                                "PAID",
                                "PAID",
                                "DELAYED",
                                "PAID",
                                "PAID",
                                "NA"
                            ]
                        }
                    ]
                }
            }
        },
        "metadata": {
            "id": "6787c565ad19ca34f8ed9333",
            "private": false,
            "createdAt": "2025-01-15T14:25:41.899Z",
            "collectionId": "6784e89ee41b4d34e476a0ee",
            "name": "Screen_two_updated.json"
        }
    }

    const [loanData, setLoanData] = useState<iLoanData>()
    useEffect(()=>{
        if(jsonData.record.data){
            setLoanData(jsonData.record.data)
        }
    },[])

    return(
        <View style={PaymentHistoryStyle.container}>
            <View style={PaymentHistoryStyle.bankLoanView}>
                <View style={PaymentHistoryStyle.loanDetailView}>
                    <View style={PaymentHistoryStyle.bankIcon}><Icon name="bank-outline" size={25} color={'#3f1666'}/></View>
                    <View style={PaymentHistoryStyle.bankNameView}>
                        <Text style={PaymentHistoryStyle.bankNameText}>{loanData?.bank_name}</Text>
                        <Text style={PaymentHistoryStyle.bankNameSubText}>{loanData?.type_of_loan}</Text>
                    </View>
                    <View style={PaymentHistoryStyle.activeDateView}>
                        <Text style={PaymentHistoryStyle.activeText}>{loanData?.account_status}</Text>
                        <Text style={PaymentHistoryStyle.dateIssueText}><Text style={{color:'grey'}}>Issued on: </Text>{loanData?.issued_on}</Text>
                    </View>
                </View>

                <View style={{width:'100%',alignItems:'center',marginTop:50}}>
                    <View style={PaymentHistoryStyle.sliderTopView}>
                        <Text style={PaymentHistoryStyle.sliderText}>{'you have paid(%) : '}{loanData?.payment_percentage}</Text>
                        <Text style={{position:'absolute',right:0,color:'grey'}}>Tenure:{loanData?.loan_tenure}</Text>
                    </View>
                    <Slider
                        style={{width:'90%',height:30}}
                        value={parseInt(loanData?.payment_percentage!)}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="green"
                        maximumTrackTintColor="grey"
                        thumbTintColor="green"
                    />
                    <View style={PaymentHistoryStyle.sliderBottomView}>
                        <Text style={PaymentHistoryStyle.sliderText}>{'Amount Paid: '+'\u20B9'+ loanData?.amount_paid}</Text>
                        <Text style={{position:'absolute',right:0,color:'grey'}}>{'Loan Amount: '+'\u20B9'+ loanData?.total_loan_amount}</Text>
                    </View>
                </View>
            </View>
            <View style={{margin:10}}>
            <View style={{margin:10}}><Text style={PaymentHistoryStyle.paymentHistoryText}>Payment history</Text></View>
                <SummaryChart data={jsonData.record.data}/>
            </View>
            <View style={PaymentHistoryStyle.footer}>
                <Pressable style={PaymentHistoryStyle.button} onPress={()=>pageNav.pop()}>
                    <Text style={PaymentHistoryStyle.buttonText}>Go Back</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default PaymantHistoryView;