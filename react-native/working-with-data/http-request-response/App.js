import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(
          'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const Item = ({ name, price }) => (
      <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{'$' + price}</Text>
      </View>
  );

  const renderItem = ({ item }) => (
      <Item name={item.title} price={item.price} />
  );

  return (
      <SafeAreaView style={menuStyles.container}>
        <Text style={menuStyles.headerText}>Little Lemon</Text>
        {isLoading ? (
            <ActivityIndicator />
        ) : (
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
            />
        )}
      </SafeAreaView>
  );
};

export default App;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
});
