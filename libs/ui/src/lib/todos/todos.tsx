import React from 'react';
import { Todo } from '@myorg/data';

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}!!！</li>
      ))}
    </ul>
  );
};

export default Todos;