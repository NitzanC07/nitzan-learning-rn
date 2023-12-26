import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredItemText, setEnteredItemText] = useState("");
  const [items, setItems] = useState([]);
  const itemInputHandler = (enteredText) => {
    setEnteredItemText(enteredText);
  };

  const addItem = () => {
    setItems((currentItems) => [...currentItems, {text: enteredItemText, key: Math.random().toString()}]);
    setEnteredItemText("");
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="הכנס פריט..."
          onChangeText={itemInputHandler}
          value={enteredItemText}
        />
        <Button title="הוסף פריט" onPress={addItem} />
      </View>

      <View style={styles.itemsContainer}>
        {/** כדי לתת אפשרות של גלילת המסך אם כמות הפריטים חורגת מגודל המסך */}
        {/* <ScrollView>
          {items.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
        {/** אם יש לנו כמות גדולה מאוד של פריטים, למשל 1000 פריטים, זה יכול להכביד מאוד
         * על הריצה של האפליקציה, לכן כדאי לעשות מיטוב (אופטימיזציה) ולרנדר למסך רק את
         * הפריטים שמוצגים באותו רגע.
         */}
        <FlatList
          data={items}
          renderItem={(itemData) => {

            return (
              <View key={itemData.item.key} style={styles.item}>
                <Text style={styles.itemText}>{itemData.item.text}</Text>
              </View>
            )}
          }
        />
      </View>

      {
        // * Exmaple for flexBox.
      }
      {/* <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <Text>1</Text>
        </View>
        <View style={styles.box2}>
          <Text>2</Text>
        </View>
        <View style={styles.box3}>
          <Text>3</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
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
  itemsContainer: {
    flex: 9,
    marginTop: 10,
    backgroundColor: "#eee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#999",
    width: "75%",
    height: 40,
  },
  item: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  itemText: {
    color: "white",
  },

  // * Exmaple of flexBox.
  boxContainer: {
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-between",
    alignItems: "stretch",
    borderWidth: 2,
    marginTop: 25,
  },

  box1: {
    backgroundColor: "#f00",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    backgroundColor: "#0f0",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    backgroundColor: "#00f",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
