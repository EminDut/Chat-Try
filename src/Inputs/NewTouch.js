import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import KeyboardControl from './KeyboardControl';
import auth from '@react-native-firebase/auth';

export default function NewTouch(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential)
        // Yeni kullanıcı başarıyla kaydedildi
        const user = userCredential.user;
        console.log('Yeni kullanıcı oluşturuldu:', user);
      })
      .catch(error => {
        console.error('Kayıt olma hatası:', error);
      });
  };

  const handleNavigate = () => {
    navigation.navigate('NewAccoundTryScreen');
  };

  return (
    <KeyboardControl>
      <View style={Styles.box}>
        <View style={Styles.main}>
          <Ionicons name="heart" color={'red'} size={50} />
        </View>

        <View>
          <Text style={Styles.case}>Hesap Oluştur</Text>
        </View>

        <Text style={Styles.text}>
          E-posta adresine doğrulama linki göndereceğiz.
        </Text>

        <Text style={Styles.text}>
          Lütfen geçerli bir e-posta adresi yazdığından emin ol!
        </Text>

        <View style={Styles.other}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={Styles.mains}>
            <TextInput
              style={Styles.container}
              placeholder={props.placeholder1}
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <TextInput
              style={Styles.container}
              placeholder={props.placeholder2}
              onChangeText={text => setPassword(text)}
              value={password}
            />

            <TouchableOpacity
              style={{
                marginTop: 40,
                marginLeft: 85,
                width: 85,
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}
              onPress={handleRegister}>
              <Text style={{marginLeft: 10, marginTop: 12}}>
                {props.buttonText}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Styles.viewflex}>
            <Text style={Styles.textnone}>
              E-Posta Adresin Profilinde Gösterilmez.
            </Text>
          </View>

          <View style={Styles.mains}>
            <TouchableOpacity onPress={handleNavigate}>
              <View style={Styles.icon}>
                <Ionicons
                  name="arrow-forward-outline"
                  color={'red'}
                  size={50}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardControl>
  );
}

const Styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 5,
    width: wp(65),
    height: hp(5),
    top: 30,
    paddingLeft: 17,
  },

  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  case: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },

  other: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    left: 10,
  },

  main: {
    marginVertical: 25,
    flexDirection: 'column',
    flex: 0.5,
  },

  mains: {
    flex: 2,
  },
  textnone: {
    left: 30,
    top: 15,
    fontSize: 13,
  },
  viewflex: {
    flex: 6,
  },
});
