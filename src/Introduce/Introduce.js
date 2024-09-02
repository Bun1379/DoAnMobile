import { useEffect, useState } from 'react'; //nạp useEffect, useState từ react để lưu trạng thái
import { Text, StyleSheet, View, Image } from 'react-native'; //nạp các component từ react - native
function App({ navigation }) { //hàm chính của component
    // useEffect(() => {
    // const timeoutId = setTimeout(() => {
    // navigation.navigate('Home');
    // }, 10000);
    // return () => clearTimeout(timeoutId);
    // }, []);
    const [countdown, setCountdown] = useState(1); //khai báo các biến lưu trữ
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Home');
        }, countdown * 10000);
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 10000);
        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [countdown, navigation]);
    return (//trả về view
        <View
            style={styles.bg}>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/edit.jpg')} // Replace with your profile
                    picture
                    style={styles.profilePic}
                />
            </View>
            <View>
                <Text style={{ fontSize: 16, alignContent: 'center', textAlign: 'center' }}>
                    Triệu Nhật Nam
                </Text>
                <Text style={{ fontSize: 16 }}>
                    21110251
                </Text>
            </View>
        </View>
    );
}
//định dạng view
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#F2F7FF', // Thay đổi màu nền của screen
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        paddingHorizontal: 40,
    },
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: 150,
        height: 150,
    },
    profilePic: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
});
export default App; //xuất hàm App