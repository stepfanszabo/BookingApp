import React from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    Text
} from 'react-native';
import {Block} from '../components'


function Loading() {    
    return (
        <Block>
            <Block center middle>
                <Text>almafa</Text>
            </Block>
        </Block>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});