import { FlatList, View, Text, StyleSheet } from "react-native"
import ListItem from "./ListItem";


const OrdersList = ({orders}) => {

    if (!orders || !orders.length) {
        return <View style={styles.containerOrdersList}>
                    <Text>Not order, please add new order</Text>
                </View>
    }

    return <FlatList 
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ListItem order={item} />}
           />
}

export default OrdersList;

const styles = StyleSheet.create({
    containerOrdersList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})