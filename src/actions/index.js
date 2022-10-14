export const addToDo = (data)=>{
    return{
        type: 'ADD_TODO',
        payload: {
            id: Math.floor(Math.random() * 999),
            data: data
        }
    }
}
export const removeToDo = ()=>{
    return{
        type: 'REMOVE_TODO'
    }
}
export const delToDo = (id)=>{
    return{
        type: 'DEL_TODO',
        id:id
    }
}

