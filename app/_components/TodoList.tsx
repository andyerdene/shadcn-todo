"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import ListItem from "./ListItem";
import { TodoType } from "@/lib/types";
import { useState } from "react";

const dummyTodos: TodoType[] = [
  {
    id: "INV001",
    title: "Job to do 1",
    status: "PENDING",
    team: "My-1",
  },

  {
    id: "INV001",
    title: "Job to do 2",
    status: "DONE",
    team: "My-1",
  },

  {
    id: "INV001",
    title: "Job to do 3",
    status: "PENDING",
    team: "My-1",
  },

  {
    id: "INV001",
    title: "Job to do 4",
    status: "PENDING",
    team: "My-1",
  },

  {
    id: "INV001",
    title: "Job to do 5",
    status: "PENDING",
    team: "My-1",
  },
];

export function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>(dummyTodos);

  return (
    <Card className="w-[700px] m-auto">
      <Table>
        <TableCaption>A list of todos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
}
