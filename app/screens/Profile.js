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

export default function Profile() {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <View>
            <Image
               style={styles.image}
               source={{
                  uri: "https://images.wikidexcdn.net/mwuploads/wikidex/a/a9/latest/20120802225204/Master_Ball_%28Ilustraci%C3%B3n%29.png",
               }}
            />
         </View>

         <View>
            <Text style={styles.title}>Datos de Entrenador</Text>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Usuario:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Charly"
               />
            </View>


            <View style={styles.inputContainer}>
               <Text style={styles.label}>Correo:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="charly@utma.edu.mx"
                  keyboardType="email-address"
               />
            </View>

            <View style={styles.inputContainer}>
               <Text style={styles.label}>Contraseña:</Text>
               <TextInput
                  style={styles.input}
                  placeholder="********"
                  secureTextEntry
               />
            </View>

            <Pressable style={styles.sendButton} onPress={() => navigation.navigate("Login")}  >
               <Text style={styles.sendButtonText}>Editar Datos</Text>
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
      color: "#5d438d",
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
      backgroundColor: "#5d438d",
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
      color: "#5d438d",
      fontWeight: "600",
      marginHorizontal: 10,
   },
});
