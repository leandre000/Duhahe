import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: '1',
    title: 'T1',
    description: 'This is a longer description that should show properly.',
    image: require('../assets/shema.jpg'),
  },
  {
    id: '2',
    title: 'T2',
    description: 'Another description visible below title.',
    image: require('../assets/shema.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: '2',
              title: 'T2',
              description: 'Another refreshed description.',
              image: require('../assets/shema.jpg'),
            },
          ])
        }
        contentContainerStyle={styles.content}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingTop: 40, 
    paddingHorizontal: 15,
  },
});

export default MessagesScreen;
