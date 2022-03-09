import { useState } from 'react';
import Todo from './components/Todo';

let n = 0;

function App() {

  class TodoObj {
    uid: number = n++;
    title: string = "Example";
  }

  const [todoList, setTodoList] = useState<TodoObj[]>([]);

  function deleteTodo(uid: number) {
    setTodoList(todoList.filter((element) => {
      return element.uid !== uid
    }));
  }
  
  function addTodo() {
    const newTodoList = todoList.slice();
    newTodoList.push(new TodoObj());
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>My Todo App</h1>
      <button className='btn' onClick={addTodo}>Add Todo</button>
        {todoList.map((element, index) => 
          <Todo key={index} uid={element.uid} title={element.title} onDelete={deleteTodo}/>
        )}
    </div>
  );
}

export default App;
