import { FlatList } from "react-native-web"


const OrdersList = ({orders}) => {
    return <FlatList 
                data={orders}
                keyExtractor={item => item.id}
           />
}

export default OrdersList;