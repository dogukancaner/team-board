import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, User, TaskFormData } from "../types";

export const users: User[] = [
  {
    id: "1",
    name: "Ali Caner",
    avatar: "https://github.com/shadcn.png",
    role: "Admin",
  },
  {
    id: "2",
    name: "Ayşe Caner",
    avatar: "https://github.com/shadcn.png",
    role: "User",
  },
  {
    id: "3",
    name: "Mehmet Caner",
    avatar: "https://github.com/shadcn.png",
    role: "Manager",
  },
  {
    id: "4",
    name: "Doğukan Caner",
    avatar: "https://github.com/shadcn.png",
    role: "Developer",
  },
];

const initialState: Task[] = [
  {
    id: "task-1",
    title: "Web Sitesi Tasarımı",
    description: "Şirket web sitesinin yeni tasarımını oluştur",
    status: "incomplete",
    userId: "1",
    completed: false,
  },
  {
    id: "task-2",
    title: "Müşteri Toplantısı",
    description: "Yeni müşteri ile proje başlangıç toplantısı",
    status: "completed",
    userId: "2",
    completed: true,
  },
  {
    id: "task-3",
    title: "Proje Planlaması",
    description: "Q2 projelerinin planlamasını yap ve takvime ekle",
    status: "incomplete",
    userId: "3",
    completed: false,
  },
  {
    id: "task-4",
    title: "Bütçe Raporu",
    description: "Mart ayı bütçe raporunu hazırla ve sunuma hazırla",
    status: "incomplete",
    userId: "1",
    completed: false,
  },
  {
    id: "task-5",
    title: "Ekip Eğitimi",
    description: "Yeni yazılım araçları için ekip eğitimini organize et",
    status: "completed",
    userId: "2",
    completed: true,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFormData>) => {
      state.push({
        ...action.payload,
        id: `task-${Date.now()}`,
        completed: action.payload.status === "completed",
      });
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
