import React from "react";
import { Text, Image, View } from 'react-native';

import styles from './styles';
import {Song} from "../../types";

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    return (
        <View style={styles.container}>
            {/*Image cover*/}
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                {/*Title*/}
                <Text style={styles.title}>{song.title}</Text>

                {/*Artist*/}
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>
    )
}

export default SongListItem;
