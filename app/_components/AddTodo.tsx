"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

const AddTodo = (props: Props) => {
  return (
    <div className="flex gap-2 max-w-[700px] m-auto mb-[40px]">
      <Input type="text" placeholder="Todo Title" />
      <Button variant={"outline"}>Add</Button>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Team" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">My-1</SelectItem>
            <SelectItem value="dark">My-2</SelectItem>
            <SelectItem value="system">My-3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AddTodo;
