import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

import { Colors } from 'src/constants';

import { Playlist } from './Playlist';
import { Player } from './Player';
import { Provider } from 'src/provider';

const SearchScreen = ({navigation}) => {
  return (
    <View>
        <Text>SearchScreen</Text>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});


export default SearchScreen;

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { View, StyleSheet, KeyboardAvoidingView, Text, Button, Image } from "react-native";
// //import { Button, Image } from "react-native-elements";
// import { useEffect, useState } from "react";
// import { ResponseType, useAuthRequest } from "expo-auth-session";
// //import { useSelector, useDispatch } from "react-redux";
// //import * as tokenAction from "../store/actions/token";
// import axios from "axios";
// //import * as songAction from "../store/actions/topSongs";

// const discovery = {
//   authorizationEndpoint: "https://accounts.spotify.com/authorize",
//   tokenEndpoint: "https://accounts.spotify.com/api/token",
// };

// const SearchScreen = ({ navigation }) => {
//  // const dispatch = useDispatch();
//   const [token, setToken] = useState("");
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       responseType: ResponseType.Token,
//       clientId: "8babd1f4fda2421daf02272cb0beeecf",
//       scopes: [
//         "user-read-currently-playing",
//         "user-read-recently-played",
//         "user-read-playback-state",
//         "user-top-read",
//         "user-modify-playback-state",
//         "streaming",
//         "user-read-email",
//         "user-read-private",
//       ],
//       // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
//       // this must be set to false
//       usePKCE: false,
//       redirectUri: "https://localhost3000",
//     },
//     discovery
//   );

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { access_token } = response.params;
//       setToken(access_token);
//     }
//   }, [response]);

//   useEffect(() => {
//     if (token) {
//       axios("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       })
//         .then((response) => {
//           // dispatch(songAction.addTopSongs(response));
//           console.log('data');
//           console.log(response);
          
          
//         })
//         .catch((error) => {
//           console.log("error", error.message);
//         });

//       setTimeout(
//         () =>
//           navigation.replace("Home", {
//             token: token,
//             other: "blaaaa",
//           }),
//         500
//       );

//       //dispatch(tokenAction.addToken(token));
//     }
//   });

//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <StatusBar style="light" />
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: "bold",
//           color: "white",
//           marginBottom: "20%",
//         }}
//       >
//         top song player
//       </Text>
//       <Button
//         title="Login with Spotify"
//         style={styles.button}
//         onPress={() => {
//           promptAsync();
//         }}
//       />
//       <View style={{ height: 100 }} />
//     </KeyboardAvoidingView>
//   );
// };

// export default SearchScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "black",
//   },

//   button: {
//     width: 200,
//     marginTop: 50,
//   },
// });