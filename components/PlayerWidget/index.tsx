import React from "react";
import { Text, Image, View } from 'react-native';
import { AntDesign, FontAwesome} from "@expo/vector-icons";


import styles from './styles';
import {Song} from "../../types";

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen'
}

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            {/*Image cover*/}
            <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        {/*Title*/}
                        <Text style={styles.title}>{song.title}</Text>

                        {/*Artist*/}
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        {/*Hear Button*/}
                        <AntDesign name="hearto" size={30} color={"white"}/>

                        {/*Play Button*/}
                        <FontAwesome name="play" size={30} color={"white"}/>
                    </View>
                </View>

        </View>
    )
}

export default PlayerWidget;
