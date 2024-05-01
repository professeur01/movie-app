import { View, Text, StyleSheet, ImageBackground } from "react-native";
const chat_haut_wp = require("./assets/chat_haut_wp.jpeg");
export default function App() {
  return (
  <ImageBackground
  source={chat_haut_wp}
  style={styles.background}
  resizeMode="cover">

  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    
  }
})


