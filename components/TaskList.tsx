"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { deleteTask } from "../store/tasksSlice";
import { useState } from "react";
import type { Task } from "../types";
import { TaskTable } from "./TaskTable";
import { EditTaskDialog } from "./EditTaskDialog";
import { DeleteTaskDialog } from "./DeleteTaskDialog";

export function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [deleteTaskId, setDeleteTaskId] = useState<string | null>(null);

  const handleDelete = () => {
    if (deleteTaskId) {
      dispatch(deleteTask(deleteTaskId));
      setDeleteTaskId(null);
    }
  };

  return (
    <div className="rounded-xl border bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm">
      <TaskTable
        tasks={tasks}
        onEdit={setEditTask}
        onDelete={setDeleteTaskId}
      />

      <EditTaskDialog task={editTask} onClose={() => setEditTask(null)} />

      <DeleteTaskDialog
        isOpen={!!deleteTaskId}
        onClose={() => setDeleteTaskId(null)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
