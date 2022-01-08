import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Second() {
    return (
        <View style={styles.container}>
        <Text style={styles.textContent}>This is the Second</Text>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContent: {
        fontFamily: "bank-gothic-light"
    }
});