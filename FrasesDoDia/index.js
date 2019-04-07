import React from 'react';
import {Alert,Text, AppRegistry, View, Image, TouchableOpacity} from 'react-native';


const Estilos = {
	principal:{
		flex:1,
		justifyContent:'center',
		alignItems: 'center'
	},
	botao:{
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal:30,
		marginTop:20
	},
	textoBotao:{
		color: '#FFF',
		fontSize:16,
		fontWeight:'bold'
	}

}

const gerarNovaFrase = () =>{
	var numeroAleatorio = Math.random();
	numeroAleatorio = Math.floor(numeroAleatorio * 5);//arredonda numero


	var frases = Array();
	frases[0] = 'Que sua fé na vida seja maior que seus medos.';
	frases[1] = 'Quem tem a alma carregada de fé é invencível.';
	frases[2] = 'Cada dia é uma chance para ser melhor que ontem.';
	frases[3] = 'Nada é tão nosso, quanto nossos sonhos.';
	frases[4] = 'Dedique seu tempo com quem te faz bem.';

	var fraseEscolhida = frases[numeroAleatorio];

	Alert.alert(fraseEscolhida);
}


const App = () =>{

  return(
  	<View style={Estilos.principal}>
  		<Image source={require('./imagens/logo.png')}>
  		</Image>

  		<TouchableOpacity 
  			onPress={() =>{
  				gerarNovaFrase();
  			}}
  			style={Estilos.botao}>

  			<Text style={Estilos.textoBotao}>Nova frase</Text>
  		
  		</TouchableOpacity>
    </View>
    );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);


