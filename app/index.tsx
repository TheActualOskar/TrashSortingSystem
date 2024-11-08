import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomNavBar from "./BottomNavBar"; // Correct relative path
import ScannerScreen from "./scanner/ScannerScreen"; // Import the ScannerScreen from the scanner folder

const App: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<string>("Home");

  const renderScreenContent = () => {
    switch (selectedScreen) {
      case "Home":
        return <Text style={styles.screenText}>Welcome to Home Screen</Text>;
      case "Scanner":
        return <ScannerScreen />; // This will display the QR scanner screen
      case "Receipts":
        return <Text style={styles.screenText}>Welcome to Receipts Screen</Text>;
      case "Data":
        return <Text style={styles.screenText}>Welcome to My Data Screen</Text>;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>{renderScreenContent()}</View>
      <BottomNavBar selected={selectedScreen} onSelect={setSelectedScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    color: "white",
    fontSize: 24,
  },
});

export default App;
