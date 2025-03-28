import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Payment Section */}
      <View style={styles.Totalprice}>
        <Text style={styles.greeting}>Checkout 💳</Text>
        <View style={styles.paymentSection}>
          <Text style={styles.totalAmount}>$144</Text>
          <Text style={{marginRight:20,color:'#B1B1B1'}}>including GST (18%)</Text>
        </View>
      </View>
      <View style={styles.paymentoptions}>
          <Text>Credit Card</Text>
          <Text>Apple Pay</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert("Payment Confirmed!")}>
        <Text style={styles.checkoutText}>Confirm Payment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  greeting: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginTop: 50, 
    marginLeft: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  Totalprice:{
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'space-between', // Keep content spaced out horizontally
  },
  backText: {
    fontSize: 40,
    color: "#007AFF",
  },
  paymentSection: {
    flexDirection:'column',// Adjusted to position items at the top
    alignItems: "flex-end",// R
    marginTop: 20,
    paddingHorizontal: 20,
  },
  totalAmount: {
    fontSize: 22,
    color: "#25D482",
    fontWeight: "bold",
    marginTop: 30,
    marginRight:20 // Add alignment to the left
  },
  checkoutButton: {
    marginTop:400,
    backgroundColor: "#25D482",
    padding: 15,
    margin:20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  checkoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  paymentoptions: {
    flexDirection:'row',
    backgroundColor: "#F8F8FB",
    padding: 15,
    margin:20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },

});

export default Payment;