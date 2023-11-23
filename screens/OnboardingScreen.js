import { View, Text } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { StyleSheet } from 'react-native';

const OnboardingScreen = () => {
    return (
        <View style={styles.container} >

            <Onboarding pages={[
                {
                    backgroundColor: '#fff',
                    image: (<View>
                        <Text>Hello World</Text>
                    </View>),
                    title: 'Boost your Productivity',
                    subtitle: 'Increase and boost your producitvity levels',
                },
                {
                    backgroundColor: '#fff',
                    image: (<View>
                        <Text>Hello World</Text>
                    </View>),
                    title: 'Boost your Productivity',
                    subtitle: 'Increase and boost your producitvity levels',
                }
            ]}>

            </Onboarding>
        </View>
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  