import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

function InputItem(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  const itemInputHandler = (enteredText) => {
    setEnteredItemText(enteredText);
  };

  console.log(props);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/dsc_0827.jpg')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Input item..."
          onChangeText={itemInputHandler}
          value={enteredItemText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Item"
              onPress={() => props.onAddItem(enteredItemText)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default InputItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    backgroundColor: "#ddd",
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
    borderRadius: 50
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#999",
    width: "75%",
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: "35%",
    marginHorizontal: 8,
  },
});
