  import { View, Text, Image } from "react-native";
  const imgAdaptive = require ("./assets/adaptive-icon.png");

  export default function App() {
  return <View style={{ flex: "1", backgroundColor: "plum" }}>
  <Text style={{padding: 60}}>Barka da <Text style={{color: "white"}}>zuwa</Text></Text>
  <Image source={imgAdaptive} style={{width:300, height:300}}></Image>
        </View>;
  }
