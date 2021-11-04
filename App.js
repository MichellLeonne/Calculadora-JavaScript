import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [valorA, setValorA] = React.useState(0);
  const [valorB, setValorB] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const calcularResultado = (evento) => {
    //alert("A=" + valorA + " B=" + valorB);
    let x = parseInt(valorA) + parseInt(valorB);
    setResultado(x);
  } 
  const SubtrairResultado = (evento) => {
    //alert("A=" - valorA - " B=" - valorB);
    let x = parseInt(valorA) - parseInt(valorB);
    setResultado(x);
  } 
  const MultiplicarResultado = (evento) => {
    //alert("A=" * valorA * " B=" * valorB);
    let x = parseInt(valorA) * parseInt(valorB);
    setResultado(x);
  } 
  const DividirResultado = (evento) => {
    //alert("A=" / valorA / " B=" / valorB);
    let x = parseInt(valorA) / parseInt(valorB);
    setResultado(x);
  } 

  return (
    <View style={styles.container}>
      
      <View style={styles.containerEntrada}>
        <TextInput 
          placeholder="Valor A"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setValorA(valor)}
        />
        
        <TextInput 
          placeholder="Valor B"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setValorB(valor)}
        />
      </View>

      <TouchableOpacity
        style={styles.estiloBotaoCalcular}
        onPress={calcularResultado}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Calcular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estiloBotaoMultiplicar}
        onPress={MultiplicarResultado}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Multiplicar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estiloBotaoSubtrair}
        onPress={SubtrairResultado}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Subtrair
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estiloBotaoDividir}
        onPress={DividirResultado}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Dividir
        </Text>
      </TouchableOpacity>

      <Text style={styles.textoResultado}>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F2EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  }, 
  containerEntrada: {
    flexDirection: "row"
  },
  campoDeEntrada: {
    fontSize: 40,
    width: "50%",
    height: 80,
    paddingLeft: 10,
    textAlign: "center"
  },
  estiloBotaoCalcular: {
    backgroundColor: "#6495ED",
    width: "100%"
  },
  estiloBotaoMultiplicar: {
    backgroundColor: "#40E0D0",
    width: "100%"
  },
  estiloBotaoSubtrair: {
    backgroundColor: "#F4A460",
    width: "100%"
  },
  estiloBotaoDividir: {
    backgroundColor: "#b0c4de",
    width: "100%"
  },
  estiloTextoBotao: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    alignSelf: "center",
  },
  textoResultado: {
    color: 'grey',
    fontSize: 60,
    padding: 15
  }
});
