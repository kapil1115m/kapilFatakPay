import { NavigationContainerRef, StackActions, useNavigation } from "@react-navigation/native";

let navigation:NavigationContainerRef<ReactNavigation.RootParamList> | null
export default class PageNavigation{

    setTopLevelNavigator(navigationRef:NavigationContainerRef<ReactNavigation.RootParamList> | null){
        navigation = navigationRef
    }

    navigate(screenName:string){
        navigation?.navigate(screenName,{})
    }

    pop(){
        navigation?.goBack()
    }
}