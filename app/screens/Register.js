import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
   Image,
   Pressable,
   StyleSheet,
   Text,
   TextInput,
   View,
} from "react-native";

export default function Register() {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <View>
            <Image
               style={styles.image}
               source={{
                  uri: "https://images.wikidexcdn.net/mwuploads/wikidex/5/57/latest/20231226203004/Super_Ball_%28Ilustraci%C3%B3n%29.png",
               }}
            />
         </View>

         <View>
            <Text style={styles.title}>Registrate</Text>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Usuario:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Nombre de Usuario"
               />
            </View>


            <View style={styles.inputContainer}>
               <Text style={styles.label}>Correo:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Correo electrónico"
                  keyboardType="email-address"
               />
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Contraseña:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  secureTextEntry
               />
            </View>

            <Pressable style={styles.sendButton} onPress={() => navigation.navigate("Profile")}  >
               <Text style={styles.sendButtonText}>Registrarse</Text>
            </Pressable>
         </View>

         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      padding: 20,
   },
   image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: 20,
   },
   title: {
      fontSize: 30,
      color: "#0079a7",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
   },
   inputContainer: {
      marginBottom: 15,
      width: "100%",
   },
   label: {
      fontSize: 16,
      fontWeight: "600",
      alignSelf: "flex-start",
      marginLeft: 10,
      marginBottom: 5,
      color: "#555",
   },
   input: {
      borderColor: "#ccc",
      padding: 12,
      borderWidth: 1,
      borderRadius: 10,
      fontSize: 16,
      width: "100%",
      height: 50,
      backgroundColor: "#f9f9f9",
   },
   sendButton: {
      backgroundColor: "#0079a7",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      marginVertical: 15,
      alignItems: "center",
      justifyContent: "center",
   },
   sendButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
   },
   footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 20,
   },
   footerText: {
      fontSize: 16,
      color: "#0079a7",
      fontWeight: "600",
      marginHorizontal: 10,
   },
});
