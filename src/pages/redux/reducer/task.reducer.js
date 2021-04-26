

const innital={
    toDoList: [],
}

function taskReducer(state= innital, action){
    switch (action.type) {
        case "ADD":{
            return{
                ...state,
                todolist:[
                    ...state.todolist,
                    action.payload
                ]
            };
        }
        case "Edit":{
            const {index} = action.payload;
            const newTodolist = state.todolist;
            newTodolist.slice(index,1)
            return{
                ...state,
                todolist:[
                    ...newTodolist
                ]

            }
        }
        case "Delete":{
            const {index} = action.payload;
            const newTodolist = state.todolist;
            newTodolist.slice(index,1)
            return{
                ...state,
                todolist:[
                    ...newTodolist
                ]

            }
            
        }
        default: {
            return state;
        
            
         
    }

}
}
export default taskReducer;
