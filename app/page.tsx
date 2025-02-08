"use client";

import { TaskList } from "@/components/TaskList";
import { TeamMembers } from "../components/TeamMembers";
import AddTaskButton from "@/components/AddTaskButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Rakamon Görev Yönetimi
          </h1>
          <p className="text-gray-500">
            Takım görevlerini kolayca yönetin ve takip edin
          </p>
        </div>

        {/* Team Members Section */}
        <div className="rounded-xl border bg-white/50 backdrop-blur-sm">
          <TeamMembers />
        </div>

        {/* Task Management Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Görevler
              </h2>
              <p className="text-sm text-gray-500">
                Tüm görevleri görüntüleyin ve yönetin
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <AddTaskButton />
            </div>
          </div>

          <TaskList />
        </div>
      </div>
    </main>
  );
}
