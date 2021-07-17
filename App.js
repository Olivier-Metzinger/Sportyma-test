import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import { Clubs, ClubInfo, Profil } from "./Screens";
import { Store } from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {});
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Clubs"}
        >
          <Stack.Screen name="Clubs" component={Clubs} />
          <Stack.Screen name="ClubInfo" component={ClubInfo} />
          <Stack.Screen name="Profil" component={Profil} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
