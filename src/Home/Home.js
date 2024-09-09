import { Text, StyleSheet, View } from 'react-native';
function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'red' }}>Home Page123</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F7FF', // Thay đổi màu nền của screen
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }
});
export default App;
