import { data } from '@/data/todo';
import { Todo } from '@/types/types';
import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors';
import CreateTodo from '@/components/Create';
import Progress from '@/components/Progress';


const TodoCard = ({ item, onPress }: {
  item: Todo,
  onPress?: () => void
}) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.titleContainer}>

        <TouchableOpacity activeOpacity={0.7}
          onPress={onPress}
        >
          <Feather name={item.completed ? "check-square" : "square"} size={18} color="white" style={{ marginRight: 8 }} />
        </TouchableOpacity>

        <Text style={{ color: "#fff", fontSize: 18, textDecorationLine: item.completed ? "line-through" : "none" }}>{item.title}</Text>
      </View>

      <View>
        <Text style={{ color: "rgba(255,0,0,0.7)" }}>10 Jan 2025</Text>
      </View>
    </View>
  )
}

export default function HomeScreen() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id).slice(0, 5))
  const [text, setText] = useState("")

  const bottomSheetRef = useRef()
  const textInputRef = useRef<TextInput>(null)
  const [openSheet, setOpenSheet] = useState(false)


  const updateTodo = (id: number) => {
    setTimeout(() => {
      setTodos(todos.map((todo: Todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }, 100)
  }

  return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      paddingTop: 20,
      height: "100%",
    }}>
      <View style={{ gap: 30 }}>
        <Progress />


        <Text style={{ color: "orange"}}>Active Todos</Text>
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <TodoCard key={item.id} item={item} onPress={() => updateTodo(item.id)} />
          )}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.addTodoBtn} onPress={() => {
        bottomSheetRef.current.open()
      }}>
        <Feather name="plus" size={30} color="white" style={{ textAlign: "center" }} />
      </TouchableOpacity>

      <CreateTodo
        bottomSheetRef={bottomSheetRef}
      >
        <View style={styles.addTodoContainer}>
        <TextInput placeholder='What would you like to do?' placeholderTextColor={Colors.secondary[200]} multiline={true} style={styles.input} />

        <View><Text>Today</Text></View>
        </View>
      </CreateTodo>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  addTodoBtn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    bottom: 40,
    right: 40,
    backgroundColor: Colors.primary.DEFAULT,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    color: Colors.secondary[200],
    fontSize: 16
  },

  addTodoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    height: 100,
    paddingVertical: 10
  }
});
