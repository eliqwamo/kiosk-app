import React, {useEffect,useState,useCallback} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import StoreItem from '../../components/StoreItem';


const Stores = props => {

    const allStores = useSelector((state) => state.allStores);

    return(
        <View style={{padding:20}}>
            {
                allStores.allStores.stores.length > 0 ? (
                    <FlatList
                        data={allStores.allStores.stores}
                        keyExtractor={item => item._id}
                        renderItem={store => <StoreItem store = {store.item} onClick={() => {props.navigation.navigate("StoreDetails")}} />}
                    />
                ) : (
                    <Text>222</Text>
                )
            }
        </View>
    )
}

export default Stores;