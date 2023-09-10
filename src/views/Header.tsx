import {Button, Text} from 'react-native'
import {Header as RHeader} from 'react-native-elements'

export const Header = ({navigation}) => {
    return (
        <RHeader>
            <Text color="white">This is the header</Text>
            <Button title={'go Back'} onPress={() => navigation.goBack()}/>
        </RHeader>
    )
}