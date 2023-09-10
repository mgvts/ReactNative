import {Button, Text, View} from "react-native";
import {Footer} from "../views/Footer";
import {Body} from "../views/Body";

export const BlancScreen = ( { navigation } ) => {
    return (
        <View style={{flex: 1}}>
            <Body/>
        </View>
    )
}