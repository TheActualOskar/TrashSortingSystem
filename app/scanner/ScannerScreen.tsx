import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import { CameraView } from "expo-camera";
import { Stack } from "expo-router";
import ScanOverlay from "./ScanOverlay"; // Import the ScanOverlay component

export default function Home() {
  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      {Platform.OS === "android" && <StatusBar hidden />}
      
      {/* Camera View */}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          console.log("data", data);
        }}
      />

      {/* Scanning overlay for the square guide */}
      <ScanOverlay />
    </SafeAreaView>
  );
}
