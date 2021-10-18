import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurantes"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) =>
            screenOptions(route, color, focused),
        })}
        /* screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case "restaurants":
                return (
                  <Icon
                    type="material-community"
                    name="compass-outline"
                    size={22}
                    color={color}
                  />
                );
              case "favorites":
                return (
                  <Icon
                    type="material-community"
                    name="heart-outline"
                    size={22}
                    color={color}
                  />
                );
              case "account":
                return (
                  <Icon
                    type="material-community"
                    name="star-outline"
                    size={22}
                    color={color}
                  />
                );
              case "search":
                return (
                  <Icon
                    type="material-community"
                    name="magnify"
                    size={22}
                    color={color}
                  />
                );
              case "topRestaurants":
                return (
                  <Icon
                    type="material-community"
                    name="home-outline"
                    size={22}
                    color={color}
                  />
                );
              default:
                break;
            }
          },
        })} */
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Busqueda" }}
        />
        <Tab.Screen
          name="topRestaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color, focused) {
  let iconName;

  switch (route.name) {
    case "restaurants":
      iconName = focused ? "compass" : "compass-outline";
      break;

    case "favorites":
      iconName = focused ? "heart" : "heart-outline";
      break;

    case "account":
      iconName = focused ? "star" : "star-outline";
      break;

    case "search":
      iconName = focused ? "magnify-plus" : "magnify";
      break;

    case "topRestaurants":
      iconName = focused ? "home" : "home-outline";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
