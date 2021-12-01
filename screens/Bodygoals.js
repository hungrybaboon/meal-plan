import { Button } from 'react-native-elements';
import React from "react";
import { View } from "react-native";

export default function BodyGoals({route,navigation}){
    const {tdee} = route.params;
    let lose = tdee-0.2*tdee;
    let gain = parseFloat(tdee)+300.0;
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Lose Weight' raised type="outline"onPress={()=>{navigation.navigate('Macrodetails', {value:`${lose}`,goal:"lose"})}} />
        <Button title='Gain Weight' raised type="outline"onPress={()=>{navigation.navigate('Macrodetails',{value: `${gain}`,goal:"gain"})}} />
        <Button title='Maintain Weight' raised type="outline"onPress={()=>{navigation.navigate('Macrodetails',{value: `${tdee}`,goal:"maintain"})}} />
        </View>
    );
}