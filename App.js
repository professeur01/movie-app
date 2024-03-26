import { View, Text,Image, ScrollView, Pressable, Button } from "react-native";
const imgAvatar = require("./assets/img/Learning.gif");

export default function App() {
  return (
    <View style={{ flex: "1",justifyContent:"space-around",alignItems:"center", backgroundColor: "white", padding: 40 }}>
   <Image source={imgAvatar} style={{width:350, height:350}}></Image>
   <Button title="Click to continue" onPress={()=>console.log("my first welcome page in mobile developement")}/>
    </View>
  );
}
