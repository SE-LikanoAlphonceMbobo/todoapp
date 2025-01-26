import React,{useState} from "react";


// styled componenents
import {ListView, TodoText, TodoDate, SwipedTodoText,HeaderButton,  colors, ListViewHidden} from "../styles/appStyles";

import SwipeListView from "react-native-swipe-list-view";
import {Entypo} from "@expo/vector-icons";

// set todos properties as arguments  
const ListItems = ({todos, setTodos}) => {

    // for styling current swiped todo row
    const [swipeRow, setSwipeRow] = useState(null);

    // handle delete todo
    const handleDeleteTodo = (rowMap, rowKey) => {
        // spread operator to spread out all todos
        const newTodos = [...todos];
        // find the index of todo item
        const todoIndex = todos.findIndex((todo) => todo.key == rowKey);
        // use splice to get rid of todo item
        newTodos.splice(todoIndex, 1);
        // reset the value of our todos
        setTodos(newTodos); 
    }
    return(
        <SwipeListView>
            date={todos}
            renderItem={(data) => {
                //
                const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;
                return(
                    <ListView 
                        underlayColor={colors.primary}
                        onPress={() => {

                        }}
                    >
                        <>
                            <RowText>{data.item.title}</RowText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}

            renderHiddenItem={(data, rowMap) => {
                return(    
                    <ListViewHidden>
                        <HiddenButton
                            onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                        >
                            <Entypo name="trash" size={25} color={colors.secondary} />
                        </HiddenButton>
                    </ListViewHidden>
                )
            }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            disableLeftSwipe={true}
            showVerticalScrollIndicator={false}
            style={{
                flex: 1,
                paddingBottom: 30,
                marginBottom: 40
            }}
            onRowOpen={(rowKey) => {
                setSwipeRow(rowKey);
            }}
            onRowClose={() => {
                setSwipeRow(null);
            }}

        </SwipeListView>
    );
}

export default ListItems;