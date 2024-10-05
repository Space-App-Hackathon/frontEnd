import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AuthEntryQuestion,
  CusRegister,
  BusRegister,
  VerificationCode,
  Login,
  RenewPassword,
  Entry,
} from "../screens/index";

const AuthRouter = () => {
  const Stack = createStackNavigator();

  const AuthNavigator = () => (
    <Stack.Navigator
    initialRouteName="Entry"
      screenOptions={{
        headerShown: false,
        // geçiş animasyonu
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
      }}
    >
      <Stack.Screen name="AuthEntryQuestion" component={AuthEntryQuestion} />
      <Stack.Screen name="CusRegister" component={CusRegister} />
      <Stack.Screen name="BusRegister" component={BusRegister} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RenewPassword" component={RenewPassword} />
      <Stack.Screen name="Entry" component={Entry} />
    </Stack.Navigator>
  );

  return <AuthNavigator />;
};

export default AuthRouter;
