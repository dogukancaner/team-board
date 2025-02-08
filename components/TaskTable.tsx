"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileEdit,
  Trash2,
  ListTodo,
  FileText,
  Clock,
  User2,
} from "lucide-react";
import type { Task } from "../types";
import { users } from "../store/tasksSlice";

interface TaskTableProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export function TaskTable({ tasks, onEdit, onDelete }: TaskTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 border-b border-gray-200">
          <TableHead className="font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <ListTodo className="h-4 w-4 text-primary" />
              <span>Görev</span>
            </div>
          </TableHead>
          <TableHead className="font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <span>Açıklama</span>
            </div>
          </TableHead>
          <TableHead className="w-[140px] font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Durum</span>
            </div>
          </TableHead>
          <TableHead className="font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <User2 className="h-4 w-4 text-primary" />
              <span>Yetkili</span>
            </div>
          </TableHead>
          <TableHead className="w-[200px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow
            key={task.id}
            className={`
              ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
              hover:bg-gray-100/80 transition-colors
              border-b border-gray-100
            `}
          >
            <TableCell className="font-medium">{task.title}</TableCell>
            <TableCell className="text-gray-600">{task.description}</TableCell>
            <TableCell>
              <Badge
                variant={task.status === "completed" ? "success" : "warning"}
                className={`
                  px-2 py-1 
                  ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                  }
                `}
              >
                {task.status === "completed"
                  ? "✅ Tamamlandı"
                  : "⏳ Devam Ediyor"}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border-2 border-white ring-2 ring-primary/10">
                  <AvatarImage
                    src={users.find((u) => u.id === task.userId)?.avatar}
                    alt={users.find((u) => u.id === task.userId)?.name || ""}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {users.find((u) => u.id === task.userId)?.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {users.find((u) => u.id === task.userId)?.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {users.find((u) => u.id === task.userId)?.role}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(task)}
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 gap-1.5"
                >
                  <FileEdit className="h-3.5 w-3.5" />
                  Düzenle
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(task.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-red-200 gap-1.5"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Sil
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
