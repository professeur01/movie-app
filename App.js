import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  TouchableHighlight,
} from "react-native";
const chat_haut_wp = require("./assets/chat_haut_wp.jpeg");
export default function App() {
  const [isVisibleModal, setisVisibleModal] = useState(false);
  const handleAlert = () => {
    Alert.alert("Bonjour", "Choisissez un endroit", [
      { text: "Vrai", onPress: () => setisVisibleModal(false) },
      { text: "Faux", onPress: () => console.log("Faut, tu n'as pas trouver") },
    ]);
  };
  return (
    <ImageBackground
      source={chat_haut_wp}
      style={styles.background}
      resizeMode="cover"
    >
      <Button
        title="Open modal"
        onPress={() => setisVisibleModal(true)}
        color="#007AFF"
      />
      <ActivityIndicator
        size="large"
        color="#007AFF"
        animating={isVisibleModal}
      />
      <Modal
        visible={isVisibleModal}
        onRequestClose={() => setisVisibleModal(false)}
        animationType={"fade"}
      >
        <View style={styles.modalView}>
        
          <Text>Le contenue du modal</Text>
          <Button title="Alert" onPress={handleAlert} />
          <TouchableHighlight
          activeOpacity={0.70}
          underlayColor="red"
          style={styles.button}
            onPress={() => setisVisibleModal(false)}>
              <Text style={{color: "#fff"}}>Close Modal</Text>
            </TouchableHighlight>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  }
});
