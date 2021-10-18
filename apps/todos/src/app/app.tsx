import React, { useEffect, useState } from 'react';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';

// interface Todo {
//   title: string;
// }

// const App = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/list')
//       .then((_) => _.json())
//       .then(setTodos);
//   }, []);

// 	function addTodo() {
// 		const data = { id:5, title: 'tanaka05' };
//     fetch('http://localhost:3000/list', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(data)
//     })
//       .then((_) => _.json())
//       .then((newTodo) => {
//         setTodos([...todos, newTodo]);
//       });
//   }

//   return (
//     <>
//       <h1>Todos</h1>
//       <ul>
//         {todos.map((t) => (
//           <li className={'todo'}>{t.title}</li>
//         ))}
//       </ul>
//       <button id={'add-todo'} onClick={addTodo}>
//         Add Todo
//       </button>
//     </>
//   );
// };

// export default App;