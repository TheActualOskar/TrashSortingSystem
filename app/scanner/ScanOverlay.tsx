// ScanOverlay.tsx
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const overlaySize = 250; // Size of the square in the middle

const ScanOverlay = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Outer overlay with transparent center */}
      <View style={styles.overlay}>
        {/* Transparent square for QR alignment */}
        <View style={styles.transparentSquare} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  transparentSquare: {
    width: overlaySize,
    height: overlaySize,
    borderColor: "#00FF00", // Green border color
    borderWidth: 2,
    backgroundColor: "transparent",
  },
});

export default ScanOverlay;


