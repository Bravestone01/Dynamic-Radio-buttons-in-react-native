import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const skills=[
    {
      id:1,
      name:"Java"
    },
    {
      id:2,
      name:"PhP  ",
    },
    {
      id:3,
      name:"C#    "
    },
    {
      id:4,
      name:"C++ "
    }
  ]
  const [radio, setRadio] = useState(0);
  return (
    <>
      <StatusBar />
      <View style={styles.main}>
        {
          skills.map((item,index)=>
          <TouchableOpacity key={index} onPress={() => setRadio(item.id)} >
          <View style={styles.radioWraper}>
            <View style={styles.radio}>
              {radio == item.id ? <View style={styles.radiobg}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>)
        }

        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
  radioWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radiobg: {
    backgroundColor: "blue",
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 4.3,
  },
});
