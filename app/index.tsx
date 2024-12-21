import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import image from '../assets/images/image.png';
import BackgroundImage from '../assets/images/image';
import ArrowLeft from '../assets/images/arrowLeft';
import GroupStroke from '../assets/images/groupStroke';


export default function Index() {
    return <>
        <View style={styles.wrapper}>
            <BackgroundImage style={{ width: '100%' }} />
            <View style={styles.info}>
                <Text style={styles.title}>An Evolving</Text>
                <Text style={styles.title}>collection of treatments</Text>
                <Text style={styles.text}>
                    The Ordinary is born to disallow commodity to be disguised as ingenuity. The Ordinary is "Clinical formulations with integrity".
                </Text>
                <GroupStroke />
                <Link href={'/categories'}>
                    <TouchableOpacity style={styles.btn}>
                        <ArrowLeft />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: '#ECEADE',
        flex: 1
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 325,
        gap: 20,
    },
    title: {
        fontFamily: 'CircularXX',
        fontSize: 26,
        fontWeight: 500,
        color: '#181717',
        textAlign: 'center',
    },
    text: {
        fontFamily: 'CircularXX',
        fontSize: 18,
        fontWeight: 400,
        color: '#5F6750',
        textAlign: 'center',
    },
    btn: {
        width: 72,
        height: 68,
        backgroundColor: '#A2AA7B',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})