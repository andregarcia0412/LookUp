import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import About from "./about";
import { Image } from "expo-image";
import Wallet from "../assets/images/wallet.png";
import React from "react";
import styles from "../assets/styles/auth.styles";
import axios from "axios";
import api from "../service/api.ts";

export default function Index() {
  const [nameText, setNameText] = React.useState("");
  const [inputText, setInputText] = React.useState("");
  const [passwordText, setPasswordText] = React.useState("");

  function handleInputChange(text: any) {
    setInputText(text);
  }

  function handlePasswordChange(text: any) {
    setPasswordText(text);
  }

  function handleNameChange(text: any) {
    setNameText(text);
    console.log(nameText);
  }

  async function submitLogin() {
    const response = await api.post("/user", {
      name: nameText,
      email: inputText,
      password: passwordText,
    });

    console.log(response.data);
  }

  return (
    <View>
      <TextInput
        placeholder="nome"
        onChangeText={handleNameChange}
        value={nameText}
      />

      <TextInput
        placeholder="email"
        onChangeText={handleInputChange}
        value={inputText}
      />

      <TextInput
        placeholder="senha"
        onChangeText={handlePasswordChange}
        value={passwordText}
      />

      <Button title="Enviar" onPress={submitLogin} />
    </View>
  );
}
