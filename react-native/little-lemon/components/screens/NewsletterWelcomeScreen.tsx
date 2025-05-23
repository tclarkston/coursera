import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Button from "../ui/Button";
import { NavigationProp } from '@react-navigation/native';

const NewsletterWelcomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        Newsletter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NewsletterWelcomeScreen;
