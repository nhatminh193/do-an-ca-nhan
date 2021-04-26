
export const addTaskAction=(parram)=>{
    return{
          type:'ADD',
          payload: parram,
    }
}

export const editTaskAction=(parram)=>{
    return{
        type:'Edit',
        payload: parram,
  }
}
export const deleteTaskAction=(parram)=>{
    return{
        type:'Delete',
        payload: parram,
  }
}