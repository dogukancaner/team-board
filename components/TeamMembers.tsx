import React from "react";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import MemberCard from "./MemberCard";
import { users } from "../store/tasksSlice"; // Ensure correct import

export function TeamMembers() {
  return (
    <Card className="border-0 bg-transparent">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Takım Üyeleri
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <MemberCard key={user.id} user={user} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
