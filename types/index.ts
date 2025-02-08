// User type
export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

// Task type
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "completed" | "incomplete";
  userId: string;
  completed: boolean;
}

// Form data type for TaskForm
export interface TaskFormData {
  title: string;
  description: string;
  status: "completed" | "incomplete";
  userId: string;
}
