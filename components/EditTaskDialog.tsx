import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TaskFormModal } from "./TaskFormModal";
import type { Task } from "../types";

interface EditTaskDialogProps {
  task: Task | null;
  onClose: () => void;
}

export function EditTaskDialog({ task, onClose }: EditTaskDialogProps) {
  if (!task) return null;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Görevi Düzenle
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Görev bilgilerini güncellemek için formu düzenleyin
          </DialogDescription>
        </DialogHeader>
        <TaskFormModal mode="update" initialData={task} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
