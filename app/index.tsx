import { Link } from "expo-router";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import image from '../assets/images/image.png';
import Background from '../assets/images/image';
import arrow from '../assets/images/arrowLeft.png';
import group from '../assets/images/group.png';


export default function Index() {
    return <>
        <View style={styles.wrapper}>
            <Background style={{width: '100%'}}></Background>
            {/* <Image source={image} style={styles.image}></Image> */}
            <View style={styles.info}>
                <Text style={styles.title}>An Evolving</Text>
                <Text style={styles.title}>collection of treatments</Text>
                <Text style={styles.text}>The Ordinary is born to disallow commodity to be disguised as ingenuity. The Ordinary is "Clinical formulations with integrity".</Text>
                <Image source={group}></Image>
                <Link href={'/categories'}>
                    <TouchableOpacity style={styles.btn}>
                        <Image source={arrow}></Image>
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
        flex:1
    },
    // image: {
    //     width: '100%'
    // },
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