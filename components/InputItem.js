import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

function InputItem(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  const itemInputHandler = (enteredText) => {
    setEnteredItemText(enteredText);
  };

  console.log(props);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Input item..."
          onChangeText={itemInputHandler}
          value={enteredItemText}
        />
        <Button title="Add Item" onPress={() => props.onAddItem(enteredItemText)} />
      </View>
    </Modal>
  );
}

export default InputItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    backgroundColor: "#ddd",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#999",
    width: "75%",
    height: 40,
  },
});
