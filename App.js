import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Button title="Add item" />
        <TextInput style={styles.textInput} placeholder="Enter item..." />
      </View>
      <View>
        <Text>רשימת פריטים...</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text>1</Text>
        </View>
        <View style={styles.box2}>
          <Text>2</Text>
        </View>
        <View style={styles.box3}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#999',
    width: '80%'
  },
  boxContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    borderWidth: 2,
    marginTop: 25
  },
  box1: {
    backgroundColor: '#f00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: '#0f0',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: '#00f',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
