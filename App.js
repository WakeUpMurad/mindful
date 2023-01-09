import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
    const [courses, setCoursesData] = useState();

    useEffect(() => {
        axios.get('')
            .then()
            .catch(error => {
            console.log(error)
            alert('Ошибка при загрузкке курса валют')
        })
    },[])

    const  handleText = () => {
        alert('You are login')
    }
  return (
      <SafeAreaView style={styles.container}>
        <Text>Sabina djopa</Text>
        <Button title={'Login'} onPress={handleText}/>
        <Text id="USD">Доллар США $ — {courses} руб.</Text>
        <Text id="EUR">Евро € — 00,0000 руб.</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
