"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask, updateTask, users } from "../store/tasksSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import type { TaskFormData, Task } from "../types";

export function TaskFormModal({
  onClose,
  mode = "create",
  initialData,
}: {
  onClose: () => void;
  mode?: "create" | "update";
  initialData?: Task;
}) {
  const dispatch = useDispatch();
  const form = useForm<TaskFormData>({
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      status: initialData?.status || "incomplete",
      userId: initialData?.userId || "",
    },
  });

  const onSubmit = (data: TaskFormData) => {
    if (mode === "update" && initialData) {
      dispatch(
        updateTask({
          ...initialData,
          ...data,
          completed: data.status === "completed",
        })
      );
    } else {
      dispatch(addTask(data));
    }
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          rules={{ required: "Başlık alanı zorunludur" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Başlık</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          rules={{ required: "Açıklama alanı zorunludur" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Açıklama</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="userId"
          rules={{ required: "Yetkili seçimi zorunludur" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Yetkili</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Yetkili seç" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem
                      key={user.id}
                      value={user.id}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          rules={{ required: "Durum seçimi zorunludur" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Durum</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Durum seç" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    value="incomplete"
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    Devam Ediyor
                  </SelectItem>
                  <SelectItem
                    value="completed"
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    Tamamlandı
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            İptal
          </Button>
          <Button type="submit">
            {mode === "update" ? "Güncelle" : "Oluştur"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
