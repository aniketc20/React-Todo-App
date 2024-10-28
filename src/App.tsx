import "./App.css"
import "./Styles.css"
import Header from "./Components/Header"
import React from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { GoIssueClosed } from "react-icons/go"
import { RxCrossCircled } from "react-icons/rx"

const App = () => {
  const [todo, setTodo] = React.useState("")
  const [count, setCount] = React.useState(0)
  const [todoItems, setTodoItems] = React.useState<
    [{ id: number; todo: string; completed: boolean; edit: boolean }] | any
  >([])
  return (
    <div className="App">
      <Header />
      <div className="addTodo">
        <input
          type="text"
          placeholder="Enter ToDo"
          className="addTodoInput"
          onChange={(event) => setTodo(event.target.value)}
          autoFocus
        />
        <button
          onClick={() => {
            setTodoItems((todoItems: any) => [
              ...todoItems,
              { id: count, todo: todo, completed: false, edit: true },
            ])
            setCount(count + 1)
          }}
        >
          Add todo
        </button>
      </div>
      <div className="items">
        {todoItems.map(
          (
            item: { todo: string; completed: boolean; edit: boolean },
            index: number
          ) => (
            <div className="item" key={index}>
              <input
                disabled={item.edit}
                defaultValue={item.todo}
                onChange={(e) => console.log(e.target.value)}
                className={item.edit ? "editItem":"editEnabled"}
                id={item.edit.toString()}
              />
              {item.completed && <>&#x2713;</>}
              <div className="todo-actions">
                <GoIssueClosed
                  fill="green"
                  onClick={() => {
                    const copy = [...todoItems]
                    copy[index].completed = true
                    console.log(copy)
                    setTodoItems(copy)
                  }}
                />
                <RxCrossCircled
                  color="red"
                  onClick={() => {
                    const copy = [...todoItems]
                    copy[index].completed = false
                    console.log(copy)
                    setTodoItems(copy)
                  }}
                />
                <AiOutlineEdit onClick={() => {
                  const copy = [...todoItems]
                  copy[index].edit = !copy[index].edit;
                  setTodoItems(copy)}}
                  
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App
