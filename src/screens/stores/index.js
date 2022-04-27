import React, {useEffect,useState,useCallback} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const Stores = props => {

    const allStores = useSelector((state) => state.allStores);
    console.log('NEW STORES: ' + JSON.stringify(allStores));
    console.log('NEW STORES LENGTH: ' + JSON.stringify(allStores.allStores.stores.length));

    return(
        <View>
            {
                allStores.allStores.stores.length > 0 ? (
                    <Text>111</Text>
                ) : (
                    <Text>222</Text>
                )
            }
        </View>
    )
}

export default Stores;