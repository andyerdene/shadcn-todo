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
import { useTodo } from "../_contexts/TodoContext";

export function TodoList() {
  const { todos } = useTodo();
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
          {todos.map((todo, index) => (
            <ListItem key={index} todo={todo} />
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
