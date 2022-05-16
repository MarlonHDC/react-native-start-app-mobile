import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9'
const colorDarkFontGitHub = '#4F565E'

const imageProfileGithub =
    'https://avatars.githubusercontent.com/u/94640918?v=4';

const urlToMyGithub = 'https://github.com/MarlonHDC'

const App = () => {

    const handlePressGoToGithub = async ()=>{
       const res = await Linking.canOpenURL(urlToMyGithub);
       if(res){
          await Linking.openURL(urlToMyGithub)
       }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Marlon no quarto com fundo cinza'
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text
                    accessibilityLabel='Nome: Marlon nDias'
                    style={[style.defaultText, style.name]}>
                    Marlon Dias
                </Text>
                <Text
                    accessibilityLabel='Nickname: Marlon H D C'
                    style={[style.defaultText, style.nickName]}>
                    MarlonHDC
                </Text>
                <Text
                    accessibilityLabel='Descrição: Soluções simples para problemas complexos'
                    style={[style.defaultText, style.description]}>
                    Soluções simples para problemas complexos ;)
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        // Column
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',       

    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 175,
        width: 175,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickName: {
        fontSize: 17,
        color: colorDarkFontGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});