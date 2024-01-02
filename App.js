import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GetItem from "./components/GetItem";
import InputItem from "./components/InputItem";

export default function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (enteredItemText) => {
    setItems((currentItems) => [
      ...currentItems,
      { text: enteredItemText, id: Math.random().toString() },
    ]);
  };

  const handleDeletItem = (id) => {
    console.log("DELETE", id);
    return setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar />

      <InputItem onAddItem={addItemHandler} />

      <View style={styles.itemsContainer}>
        {/** כדי לתת אפשרות של גלילת המסך אם כמות הפריטים חורגת מגודל המסך */}
        {/* <ScrollView>
          {items.map((item) => (
            <View key={item} style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
        {/*
         * אם יש לנו כמות גדולה מאוד של פריטים, למשל 1000 פריטים, זה יכול להכביד מאוד
         * על הריצה של האפליקציה, לכן כדאי לעשות מיטוב (אופטימיזציה) ולרנדר למסך רק את
         * הפריטים שמוצגים באותו רגע.
         */}
        <FlatList
          data={items}
          renderItem={(itemData) => {
            return (
              <GetItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={handleDeletItem}
              />
            );
          }}
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
  itemsContainer: {
    flex: 9,
    marginTop: 10,
    backgroundColor: "#eee",
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
