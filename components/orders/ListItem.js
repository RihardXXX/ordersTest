import { Pressable, Image, View, Text, StyleSheet } from "react-native";


const ListItem = ({order: { title, imageUri, address }, onSelect}) => {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: imageUri }} />
            <View>
                <Text>
                    { title }
                </Text>
                <Text>
                    { address }
                </Text>
            </View>
        </Pressable>
    ) 
}

export default ListItem;

const styles = StyleSheet.create({

});