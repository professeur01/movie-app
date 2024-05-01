import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Modal,
} from "react-native";
const chat_haut_wp = require("./assets/chat_haut_wp.jpeg");
export default function App() {
  const [isVisibleModal, setisVisibleModal] = useState(false);
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
      <Modal
        visible={isVisibleModal}
        onRequestClose={() => setisVisibleModal(false)}
        
      ><View style={styles.modalView}>
        <Text>Le contenue du modal</Text>
        <Button
          title="Close modal"
          color="red"
          onPress={() => setisVisibleModal(false)}
        />
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
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
  },
});
