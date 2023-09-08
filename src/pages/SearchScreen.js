import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"


function SearchScreen() {

    const navigation = useNavigation();

    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center',backgroundColor:"lightblue"}}>

        <Text>SearchScreen</Text>
        <Ionicons name="hand-right" color={"green"} size={250} />
        


      </View>
    );
  }

  


  export default SearchScreen;