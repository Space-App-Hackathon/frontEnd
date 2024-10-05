import React from "react";
// screens

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// screens and components
import {
  Ai,
  Blog,
  BlogRead,
  FindTeacher,
  Home,
  Message,
  Profile,
  ABC,
  TeacherDetail,
  Category
} from "../screens/index";
import { useSelector } from "react-redux";

const BusinessRouter = () => {
  //const userCategories = useSelector((state) => state.user.user).categories
  const userCategories = [
    {
      id:"selam"
    }
   
  ]
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BusinessBottomTab = () => (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          height: 60,
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Ai") {
            iconName = focused ? "barcode" : "barcode-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Blog") {
            iconName = focused ? "book" : "book-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "FindTeacher") {
            iconName = focused ? "grid" : "grid-outline";
            color = focused ? "#6CBA0E" : "black";
          }
          if (typeof iconName === "string") {
            return <Ionicons name={iconName} size={size} color={color} />;
          } else {
            return (
              <Image
                source={iconName}
                style={{ width: 60, height: 40 }}
                resizeMode="contain"
              />
            );
          }
        },
      })}
    >

      <Tab.Screen 
        name="FindTeacher"
        component={FindTeacher}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Ai" component={Ai} options={{ headerShown: false ,tabBarHideOnKeyboard:true}} />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  const BusinessNavigator = () => (
    <Stack.Navigator initialRouteName={userCategories.length === 0 ? "Category" : "BusinessBottomTab"}
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

      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="BusinessBottomTab" component={BusinessBottomTab} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="BlogRead" component={BlogRead} />
    </Stack.Navigator>
  );

  return <BusinessNavigator />;
};

export default BusinessRouter;
