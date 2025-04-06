import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://static.wikia.nocookie.net/espokemon/images/0/02/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png",
            width: 200,
            height: 200,
          }}
        />
      </View>

      <View>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.label}>Correo:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput style={styles.input} />

        <Pressable style={styles.send}>
          <Text style= {styles.send.textSend}>Iniciar Sesión</Text>
        </Pressable>
      </View>

      <View style={styles.containerFooter}>
        <Text style={styles.containerFooter.text} >Recordar Contraseña</Text>
        <Text style={styles.containerFooter.text}>Registrate</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  title: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 15,
    width: "auto",
    height: 45,
    marginBottom: 15,
  },

  send: {
    backgroundColor: 'red',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
    
    textSend: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }
  },

  containerFooter : {
    justifyContent: 'space-between',
    alignItems: 'center',

    text: {
      fontSize: 20,
      margin: 5,
    }
  }

});
