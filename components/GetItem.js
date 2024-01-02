import { Pressable, StyleSheet, Text, View } from "react-native";

function GetItem(props) {
  return (
    <View key={props.id} style={styles.item}>
      <Pressable
        // android_ripple={{ color: "#000" }}
        onPress={() => props.onDeleteItem(props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GetItem;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
},
pressedItem: {
    opacity: 0.5
},
itemText: {
    padding: 8,
    color: "white",
  },
});
