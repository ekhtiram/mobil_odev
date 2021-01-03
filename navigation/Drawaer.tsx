import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./BottomTabNavigator";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;