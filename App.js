import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AuthNavigator from "./profile/AuthRouth";
import EducationRouth from "./profile/EducationRouth";
import TeacherRouth from "./profile/TeacherRouth";

import { AlertNotificationRoot } from "react-native-alert-notification";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NativeBaseProvider } from "native-base";

import { loadInitialStateFromStorage } from "./redux/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  //const userRole = useSelector((state) => state.user.user);
  const  userRole = "null"
  console.log("User", userRole);

  console.log("Role", userRole);

  useEffect(() => {
    loadInitialStateFromStorage(dispatch);
  }, [dispatch]);

  const loggedIn = true;


  
  const SelectedNavigator = () => {
    if (loggedIn) {
      switch (userRole) {
        case "teacher":
          return <TeacherRouth />;
        case "student":
          return <EducationRouth />;
        default:
          return <AuthNavigator />;
      }
    }
  };
  return (
    <>
      <StatusBar translucent={false} />
      <NavigationContainer>
        {loggedIn ? <SelectedNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    nunitoBlack: require("./assets/fonts/Nunito-Black.ttf"),
    nunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });

  return (
    <>
      <NativeBaseProvider>
        <AlertNotificationRoot>
          <Provider store={store}>
            <Main/>
          </Provider>
        </AlertNotificationRoot>
      </NativeBaseProvider>
    </>
  );
};

export default App;
