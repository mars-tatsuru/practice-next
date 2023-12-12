"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  type Todo = {
    id: number;
    title: string;
  };

  type Todos = Todo[];

  const [todos, setTodos] = useState<Todos>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, title: newTodoTitle }]);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [todos]);

  return (
    <main className={styles.main}>
      <div>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button onClick={addTodo}>登録</button>
      </div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
