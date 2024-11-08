import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type BottomNavBarProps = {
  selected: string;
  onSelect: (screen: string) => void;
};

const BottomNavBar: React.FC<BottomNavBarProps> = ({ selected, onSelect }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => onSelect("Home")} style={styles.navItem}>
        <Text style={[styles.navText, selected === "Home" && styles.selected]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("Scanner")} style={styles.navItem}>
        <Text style={[styles.navText, selected === "Scanner" && styles.selected]}>Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("Receipts")} style={styles.navItem}>
        <Text style={[styles.navText, selected === "Receipts" && styles.selected]}>Receipts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect("Data")} style={styles.navItem}>
        <Text style={[styles.navText, selected === "Data" && styles.selected]}>My Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    paddingVertical: 15,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "gray",
    fontSize: 16,
  },
  selected: {
    color: "#0E7AFE",
    fontWeight: "bold",
  },
});

export default BottomNavBar;
