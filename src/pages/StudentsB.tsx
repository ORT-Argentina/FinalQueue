import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useScrollToTop, useTheme } from '@react-navigation/native';
import axios from 'axios';
import api from '../services/api';

type Item = { name: number; number: number, topic: String, course: String };
let CONTACTS: Item[] = [];

let r = axios.get(api.url.concat('/final/PR2/B')).then(
    function (res) {
        if (res.data.data) {
            let students = [];
            res.data.data.forEach(el => { 
                students.push({ name: el.dni, number: el.order, topic: el.topic, course: el.course });
            });
            CONTACTS = students;
        }
    }).catch(function (err) { 
        
    });

const ContactItem = React.memo(
    ({ item }: { item: { name: string; number: number } }) => {
        const { colors } = useTheme();

        return (
            <View style={[styles.item, { backgroundColor: colors.card }]}>
                <View style={styles.avatar}>
                    <Text style={styles.letter}>
                        {item.number}
                    </Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
                    <Text style={[styles.number, { color: colors.text, opacity: 0.5 }]}>
                        {item.course}
                    </Text>
                </View>
            </View>
        );
    }
);

const ItemSeparator = () => {
    const { colors } = useTheme();

    return (
        <View style={[styles.separator, { backgroundColor: colors.border }]} />
    );
};

export default function Contacts() {
    const ref = React.useRef<FlatList<Item>>(null);

    useScrollToTop(ref);

    const renderItem = ({ item }: { item: Item }) => <ContactItem item={item} />;    

    return (
        <FlatList
            ref={ref}
            data={CONTACTS}
            keyExtractor={(_, i) => String(i)}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        color: 'white',
        fontWeight: 'bold',
    },
    details: {
        margin: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    number: {
        fontSize: 12,
    },
    separator: {
        height: StyleSheet.hairlineWidth,
    },
});
