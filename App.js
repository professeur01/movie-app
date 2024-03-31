import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Button,
  Modal,
  StyleSheet
} from "react-native";
const imgAvatar = require("./assets/img/Learning.gif");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: "1",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        padding: 40,
      }}
    >
      <Image source={imgAvatar} style={{ width: 350, height: 350 }}></Image>
      <Button
        title="Click to continue"
        onPress={() => setIsModalVisible(true)}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalSyle}>
          <Text>This is a modal!</Text>
        </View>
        <Button title="Close Modal" onPress={() => setIsModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalSyle: {
   flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 60,
  },
 
});
