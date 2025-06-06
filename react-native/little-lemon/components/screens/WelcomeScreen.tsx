import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

interface WelcomeScreenProps {
  navigation: NavigationProp<any>;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('@/assets/images/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Pressable>
        <Text>Login</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
