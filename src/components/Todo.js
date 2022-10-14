import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToDo,removeToDo, delToDo} from "../actions/index"

const Todo = ()=>{
    const [inpData,setInpData] = useState('')
    const list = useSelector((state)=> state.todoReducers.list)
    const dispatch = useDispatch();

    return(<>
            <div className="container m-5">
                <div className="row mt-4">
                <div className="col-7 mx-auto">
                    <div className="card shadow">
                    <div className="card-header">Redux ToDoList</div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add Items" value={inpData} onChange={(event)=>setInpData(event.target.value)} aria-label="Add Items" aria-describedby="basic-addon2" />
                            <button className="btn btn-outline-secondary add-btn" type="button" id="button-addon2" onClick={() =>{dispatch(addToDo(inpData), setInpData(''))}}>+</button>
                        </div>
                        <hr></hr>
                        {/* <br></br> */}
                        <div className="showItems">
                            {
                                list.map((elem)=>{
                                    return (
                                        <div className="eachItem mb-2" key={elem.id}>
                                            <ol className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{elem.data}</div>
                                                    </div>
                                                    <button type="button" className="btn btn-danger btn-sm" id={elem.id} onClick={() =>{dispatch(delToDo(elem.id))}}>-</button>
                                                </li>
                                            </ol>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </>)
}
export default Todo;