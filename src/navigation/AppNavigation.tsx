import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreditReportsView from "../pages/creditreports/CreditReportsView";
import PaymantHistoryView from "../pages/creditreports/payments/paymenthistory/PaymentHistoryView";

const Stack = createNativeStackNavigator()

const StackNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name={'creditreports'} component={CreditReportsView} options={{headerTitle:'Credit Report'}}/>
            <Stack.Screen name={'payment'} component={PaymantHistoryView} options={{headerTitle:'Payment History'}}/>
            {/* <Stack.Screen name={'Dashboard'} component={DashboardView}/>
            <Stack.Screen name={'Register'} component={RegisterView}/> */}
        </Stack.Navigator>
    )
}
export default StackNavigator;