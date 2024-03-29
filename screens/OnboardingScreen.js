import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )



    }


    // useEffect(() => {
    //     if (LottieRef.current !== null) {
    //         LottieRef.current.play(); // it doesn't work
    //     }
    // }, [LottieRef])

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}

                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView
                                    style={{ flex: 1 }}
                                    source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this channel to boost your productivity level',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie
                                    style={{ flex: 1 }}
                                    source={require('../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <Lottie
                                    style={{ flex: 1 }}
                                    source={require('../assets/animations/achieve.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you to achieve higher goals',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})