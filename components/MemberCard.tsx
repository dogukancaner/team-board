import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { User } from "../types";
import { Badge } from "@/components/ui/badge";

interface MemberCardProps {
  user: User;
}

export default function MemberCard({ user }: MemberCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <Avatar className="h-12 w-12 border-2 border-white ring-2 ring-primary/10">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="bg-primary/10 text-primary">
          {/* Kullanıcı adının ilk harfini al */}
          {user.name[0]}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <p className="font-medium text-gray-900">{user.name}</p>
        <Badge variant="outline" className="font-normal text-xs">
          {user.role}
        </Badge>
      </div>
    </div>
  );
}
