"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskFormModal } from "./TaskFormModal";
import { Plus } from "lucide-react";

export default function AddTaskButton() {
  // Dialog'ın açık olup olmadığını kontrol etmek için state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="font-medium gap-2 bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Yeni Görev Ekle
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Yeni Görev Oluştur
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Yeni bir görev oluşturmak için aşağıdaki formu doldurun
          </DialogDescription>
        </DialogHeader>
        <TaskFormModal mode="create" onClose={() => setIsDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
