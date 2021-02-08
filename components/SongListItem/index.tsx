import React, {useContext} from "react";
import {Text, Image, View, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';

import styles from './styles';
import {Song} from "../../types";
import { AppContext } from '../../AppContext';

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;

    const { setSongId } = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
    }

    return (
        <TouchableOpacity onPress={onPlay}>
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
        </TouchableOpacity>

    )
}

export default SongListItem;
