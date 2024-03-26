import { View, Text,Image, ScrollView, Button } from "react-native";
const imgAdaptive = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: "1", backgroundColor: "plum", padding: 40 }}>
    <Button title="Press" color={"white"} disabled onPress={()=> console.log("Button Pressed")}/>
    </View>
  );
}
