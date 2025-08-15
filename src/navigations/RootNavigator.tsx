import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import AppNavigator from "./AppNavigator"
import AuthNavigator from "./AuthNavigator"

const RootNavigator = () =>{

   return(
    <NavigationContainer>
         <AppNavigator />
    </NavigationContainer>
   )
}
export default RootNavigator