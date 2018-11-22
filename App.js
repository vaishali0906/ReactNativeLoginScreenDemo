/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <ImageBackground
        source={require("./android/src/Images/Background.png")}
        style={styles.container}
      >
        <View style={{ flex: 3, marginBottom: 10 }}>
          <Image
            source={require("./android/src/Images/LoginScreenIcon.png")}
            style={styles.ImageStyle}
          />
          <Text style={styles.TextInWhite}>
            Dating
            <Text style={styles.TextInYellow}>Match</Text>
          </Text>
          <Text style={styles.TextInRed}>let's choose your match</Text>
        </View>

        <View style={{ flex: 2, marginBottom: 50, alignItems:"center"}}>
         
<View style = {{flexDirection:"row",width:"80%",borderColor: "#D3D3D3", borderRadius:40, borderWidth:1, marginBottom:10, marginTop:10}}>

          <View style={styles.SectionStyle}>

          <Image source={require("./android/src/Images/username_icon.png")} style={{height:25,width:25,top:10,bottom:10,right:0,left:10}}/>
            </View>
            
           <TextInput  onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
          style={styles.TextInput}
          onChangeText={username => this.setState({ username })}
          placeholder={"Username"}
          placeholderTextColor="#FFFFFF"
          />

          </View>
          <View style = {{flexDirection:"row",width:"80%",borderColor: "#D3D3D3", borderRadius:40, borderWidth:1}}>

          <View style={styles.SectionStyle}>

          <Image source={require("./android/src/Images/password_icon.png")} style={{height:25,width:25,top:10,bottom:10,right:0,left:10}}/>
            </View>

           <TextInput ref={input => {
            this.secondTextInput = input;
          }}
          style={styles.TextInput}
          onChangeText={password => this.setState({ password })}
          placeholder={"Password"}
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          />

          </View>

          <TouchableOpacity
            disabled={this.state.username && this.state.password ? false : true}
            style={{
              alignSelf:"stretch",
              color: "white",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"}}
          >
            <Text style={{ fontSize: 18, color: "#FB6E5A",padding:15 }}>
              {"Login".toUpperCase()}
            </Text>
          </TouchableOpacity>

          <Text style={styles.SmallTextInWhite}>
            Don't have an account?
            <Text style={styles.SmallTextInWhiteWithBold}> Sign Up Now</Text>
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.SmallTextInWhiteWithMarginTop}>
            Forgot Password?
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  ImageStyle: {
    width: null,
    height: "60%",
    resizeMode: "contain",
    marginTop: 10
  },
  TextInWhite: {
    fontSize: 35,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  TextInYellow: {
    fontSize: 35,
    textAlign: "center",
    color: "yellow",
    fontWeight: "bold"
  },
  TextInRed: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    color: "#86170f"
  },
  TextInput: {
    width:"100%",
    fontSize: 20,
    color: "white",
    paddingLeft: 60,
    paddingRight:10,
    textAlign:'center'
  },
  TextInputView: {
    flex: 1
  },
  SmallTextInWhite: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    marginTop: 20
  },
  SmallTextInWhiteWithBold: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    fontWeight: "bold"
  },
  SmallTextInWhiteWithMarginTop: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    marginTop: 50,
    fontWeight: "bold"
  },
  ButtonStyle: {
    width:290,
    height: 50,
    color: "white",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  SectionStyle: {
    width:50,
    height:50,
    borderWidth: 1,
    position: "absolute",
    borderColor:"#fff",
    borderRadius: 130,
    backgroundColor: "#fff"
  }
});
