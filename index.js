//Import
import React from 'react';
import {View, Text, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

//Formatações
const Estilos = {
   principal:{
        //backgroundColor:'#00cc66',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   },

   botao:{
        backgroundColor:'#339933',
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginTop: 20,        
   },
 
   texto:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
   },
       
};

//Função
const botaoPressionado = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 7);

    //Frases
    var frases = [
        'O sucesso é ir de fracasso em fracasso sem perder entusiasmo. - Winston Churchill',
        'Encare sem medo a face de seus inimigos. Seja bravo e honrado, para que Deus possa amá-lo. Fale a verdade sempre mesmo que isso possa leva ló à morte proteja sempre os indefesos e não cometa erros - Filme a Cruzada', 
        'Treine a si mesmo a deixar partir tudo que teme perder. - Mestre Yoda', 
        'A vida pode até te derrubar, mas é você quem escolhe a hora de se levantar. - Mr. Han - Karate Kid (2010)', 
        'Não viva para que sua presença seja notada, mas para que sua falta seja sentida. - Bob Marley',
        'Passamos a vida procurando em pessoas o que só podemos encontrar em Deus.',
        'Deus nos concede, a cada dia, uma página de vida nova no livro do tempo. Aquilo que colocarmos nela, corre por nossa conta.' 
    ];

    var fraseEscolhida = frases[numeroAleatorio];
    alert(fraseEscolhida);

};

//Criar o componente
const App = () =>{

    const {principal, botao, texto, texto2 , footer} = Estilos;

    return(              
        <View style={principal}>
            <Image source={require('./images/logo.png')}/>
            <TouchableOpacity 
            onPress={botaoPressionado}
            style={botao}>
                <Text style={texto}>Nova frase</Text>
            </TouchableOpacity>     
        </View>  
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDias', () => App);