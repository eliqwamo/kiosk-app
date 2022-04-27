import {Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import DashboardScreen from "../screens/dashboard";
import CartScreen from "../screens/cart";
import MenuScreen from "../screens/menu";
import StoresScreen from "../screens/stores";
import StoresDetailsScreen from "../screens/stores/storeDetails";

const DashboardStackNavigator = createStackNavigator();
const CartStackNavigator = createStackNavigator();
const MenuStackNavigator = createStackNavigator();
const StoresStackNavigator = createStackNavigator();
const TabsBottomNavigation = createMaterialBottomTabNavigator();

export const DashboardStack = () => {
  return (
    <DashboardStackNavigator.Navigator>
      <DashboardStackNavigator.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
    </DashboardStackNavigator.Navigator>
  );
};

export const CartStack = () => {
  return (
    <CartStackNavigator.Navigator>
      <CartStackNavigator.Screen name="Cart" component={CartScreen} />
    </CartStackNavigator.Navigator>
  );
};

export const MenuStack = () => {
  return (
    <MenuStackNavigator.Navigator>
      <MenuStackNavigator.Screen name="Menu" component={MenuScreen} />
    </MenuStackNavigator.Navigator>
  );
};

export const StoresStack = () => {
  return (
    <StoresStackNavigator.Navigator>
      <StoresStackNavigator.Screen name="Stores" component={StoresScreen} />
      <StoresStackNavigator.Screen name="StoreDetails" component={StoresDetailsScreen} />
    </StoresStackNavigator.Navigator>
  );
};

export const BottomTabs = () => {
  return (
    <TabsBottomNavigation.Navigator>
      <TabsBottomNavigation.Screen
        name="DashBoardTab"
        component={DashboardStack}
        options={{
          tabBarLabel: <Text style={{fontSize:14}}>Home</Text>,
          tabBarIcon: () => (
            <AntDesign name="appstore-o" color="#ffffff" size={26} />
          ),
        }}
      />

      <TabsBottomNavigation.Screen
        name="StoresStack"
        component={StoresStack}
        options={{
          tabBarLabel: <Text style={{fontSize:14}}>Stores</Text>,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="store-outline"
              color="#ffffff"
              size={26}
            />
          ),
        }}
      />

      <TabsBottomNavigation.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: <Text style={{fontSize:14}}>Cart</Text>,
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" color="#ffffff" size={26} />
          ),
        }}
      />

      <TabsBottomNavigation.Screen
        name="MenuStack"
        component={MenuStack}
        options={{
          tabBarLabel: <Text style={{fontSize:14}}>Menu</Text>,
          tabBarIcon: () => (
            <AntDesign name="menuunfold" color="#ffffff" size={26} />
          ),
        }}
      />
    </TabsBottomNavigation.Navigator>
  );
};
