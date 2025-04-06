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

export default function Login() {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <View>
            <Image
               style={styles.image}
               source={{
                  uri: "https://static.wikia.nocookie.net/espokemon/images/0/02/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png",
               }}
            />
         </View>

         <View>
            <Text style={styles.title}>Iniciar Sesión</Text>

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

            <Pressable
               onPress={() => navigation.navigate("List")}
               style={styles.sendButton}
            >
               <Text style={styles.sendButtonText}>Iniciar Sesión</Text>
            </Pressable>
         </View>

         <View style={styles.footer}>
            <Text
               style={styles.footerText}
               onPress={() => navigation.navigate("RecoverPassword")}
            >
               Recordar Contraseña
            </Text>
            <Text
               style={styles.footerText}
               onPress={() => navigation.navigate("Register")}
            >
               Registrate
            </Text>
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
      color: "red",
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
      backgroundColor: "red",
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
      color: "red",
      fontWeight: "600",
      marginHorizontal: 10,
   },
});
