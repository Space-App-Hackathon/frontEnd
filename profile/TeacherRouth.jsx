import React from "react";
// screens

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// screens and components
import {
  TeacherBlog,
  TeacherHome,
  TeacherMessages,
  TeacherProfile,
  Category
} from "../screens/index";
import { useSelector } from "react-redux";

const TeacherRouth = () => {
  const userCategories = useSelector((state) => state.user.user).categories
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

          if (route.name === "TeacherBlog") {
            iconName = focused ? "book" : "book-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "TeacherHome") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "TeacherProfile") {
            iconName = focused ? "person" : "person-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "TeacherMessages") {
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
        name="TeacherBlog"
        component={TeacherBlog}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TeacherHome"
        component={TeacherHome}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="TeacherMessages"
        component={TeacherMessages}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TeacherProfile"
        component={TeacherProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  const BusinessNavigator = () => (
    <Stack.Navigator 
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
      {
        userCategories.length === 0 ? (
          <Stack.Screen name="Category" component={Category} />
        ):null
      } 
      <Stack.Screen name="BusinessBottomTab" component={BusinessBottomTab} />
     {/*  <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="BlogRead" component={BlogRead} /> */}
    </Stack.Navigator>
  );

  return <BusinessNavigator />;
};

export default TeacherRouth;
