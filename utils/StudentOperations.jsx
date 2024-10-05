import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { BACKEND_URL } from '../env';
import {  updateToken, updateUser } from '../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const studentRegister = async (values,navigation) => {
    const data ={
        name:values.name,
        email:values.email,
        password:values.password
    }
    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/students/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.status == "success"){
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Başarılı',
                textBody: 'Kayıt Başarılı',
              })
            
            navigation.navigate('Login')
        }
        else{
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Hata',
                textBody: 'Kayıt Başarısız',
              })
        }

    }catch(error){
        console.log(error)
    }

}

const studentLogin = async (values,dispatch) => {
    const data ={
        email:values.email,
        password:values.password
    }
    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.success){
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Başarılı',
                textBody: 'Giriş Başarılı',
              })
            
            dispatch(updateUser(result.user))
            dispatch(updateToken(result.accessToken))
            await AsyncStorage.setItem('token', result.accessToken)
            await AsyncStorage.setItem('user', JSON.stringify(result.user))
        }
        else{
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Hata',
                textBody: 'Giriş Başarısız',
              })
        }

    }catch(error){
        console.log(error)
    }
}

export { studentRegister ,studentLogin}