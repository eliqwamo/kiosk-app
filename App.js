import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "./src/navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

import reducers from "./store/reducer";
const rootReducer = combineReducers({
  allStores: reducers,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
