import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

interface Todo {
  title: string;
}

const lngs:any = {
  en: { nativeName: 'English' },
  ja: { nativeName: '日本語' }
};


export const App = () => {
	const { t, i18n } = useTranslation();
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
  }

  return (
    <>
      <h1>{t('Todos')}</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
			{t('Add Todo')}
			</button>
			<br />
			<p>言語切り替えボタン</p>
			{Object.keys(lngs).map((lng) => (
            <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
    </>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import { Todo } from '@myorg/data';
// import { Todos } from '@myorg/ui';

// const App = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     fetch('/api/todos')
//       .then((_) => _.json())
//       .then(setTodos);
//   }, []);

//   function addTodo() {
//     fetch('/api/addTodo', {
//       method: 'POST',
//       body: '',
//     })
//       .then((_) => _.json())
//       .then((newTodo) => {
//         setTodos([...todos, newTodo]);
//       });
//   }

//   return (
//     <>
//       <h1>Todos</h1>
//       <Todos todos={todos} />
//       <button id={'add-todo'} onClick={addTodo}>
//         Add Todo
//       </button>
//     </>
//   );
// };

// export default App;

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