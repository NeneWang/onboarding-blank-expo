Step by Step

For my youtube tutorial.

## 1. Create a new project

Install Packages
yarn global add expo-cli

```

expo init onboarding-blank-expo
expo start

```


```
npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager
```

```bash
expo init onboarding-expo
npx react-native start
```

## 2. Getting started.

To create a simple React Native app with navigation that connects to a "Home Screen" displaying the text "Home Screen," you can use the `react-navigation` library. Here are the steps to set it up:

1. **Create a New React Native Project:**
   Follow the initial steps mentioned in the previous answer to create a new React Native project.

2. **Install `react-navigation` Dependencies:**
   Install the necessary dependencies for navigation using `npm` or `yarn`:

   ```
   npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager
   ```

   or

   ```
   yarn add @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/viewpager
   ```

3. **Set Up Navigation:**
   Create a new JavaScript file for your navigation. You can name it something like `AppNavigator.js`:

   ```jsx
   // AppNavigator.js
   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createStackNavigator } from '@react-navigation/stack';
   import HomeScreen from './HomeScreen';

   const Stack = createStackNavigator();

   const AppNavigator = () => {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
       </NavigationContainer>
     );
   };

   export default AppNavigator;
   ```

4. **Create the Home Screen:**
   Create a component for your home screen. You can create a file named `HomeScreen.js`:

   ```jsx
   // HomeScreen.js
   import React from 'react';
   import { View, Text } from 'react-native';

   const HomeScreen = () => {
     return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Home Screen</Text>
       </View>
     );
   };

   export default HomeScreen;
   ```

5. **Connect Navigation to Your App:**
   In your main `App.js` file, import and use the `AppNavigator` component:

   ```jsx
   // App.js
   import React from 'react';
   import AppNavigator from './AppNavigator';

   const App = () => {
     return <AppNavigator />;
   };

   export default App;
   ```

6. **Run Your App:**
   Start your development server and run the app on a simulator or device, as described in the previous answer:

   - For iOS: `npx react-native run-ios`
   - For Android: `npx react-native run-android`

You should now have a simple React Native app with navigation that displays a "Home Screen" when you launch the app. The `react-navigation` library is commonly used for more complex navigation structures, so you can extend this basic setup to add more screens and features to your app as needed.


## Setting Up Onboarding.


```bash
yarn add react-native-onboarding-swiper
```


```js
import { View, Text } from 'react-native'
import React from 'react'
// import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
    return (
        <View style={styles.container} >

            {/* <Onboarding page={[
                {
                    backgroundColor: '#fff',
                    image: <View>
                        <Text>Hello World</Text>
                    </View>,
                    title: 'Boost your Productivity',
                    subtitle: 'Increase and boost your producitvity levels',
                },
                {
                    backgroundColor: '#fff',
                    image: <View>
                        <Text>Hello World</Text>
                    </View>,
                    title: 'Work Seameslessly',
                    subtitle: 'Get your work done in a seamless manner',
                }
            ]}>

            </Onboarding> */}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})


export default OnboardingScreen
```


### Adding Lottie.


```js
yarn add lottie-react-native

```








