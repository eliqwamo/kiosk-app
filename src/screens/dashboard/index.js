import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as storeActions from "../../../store/action";
import Colors from "../../utilis/AppColors";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const getAllStores = useCallback(async () => {
    let action = storeActions.get_stores_action();
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, [setIsLoading, dispatch, storeActions.get_stores_action]);

  useEffect(() => {
    getAllStores();
  }, [getAllStores]);

  const allStores = useSelector((state) => state.allStores);



  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.happy_green} />
      ) : (
        <Text>Stores</Text>
      )}
    </View>
  );
};

export default Dashboard;
