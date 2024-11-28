import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import data from "@/task-data.json";

const leaderboards = data;

export function Leaderboard({ title }: { title: string }) {
  const [sortedLeaderboardData, setSortedLeaderboardData] = useState([]);

  useEffect(() => {
    const relevantData = title === "User Leaderboard" ? leaderboards.user_leaderboard : leaderboards.groups_leaderboard;

    const sortedData = [...relevantData].sort((a, b) => b.accuracy_percentage - a.accuracy_percentage);
    sortedData.forEach((item, index) => {
      item.rank = index + 1; // Assign rank based on sorted order
    });
    setSortedLeaderboardData(sortedData);
  }, [title, leaderboards]);

  const renderLeaderboardItem = (item: any, isUserLeaderboard: boolean) => (
    <div key={isUserLeaderboard ? item.name : item.group_name} className="flex items-center justify-between gap-2 sm:gap-4 py-2 border-b last:border-b-0">
      <div className="flex items-center gap-2 sm:gap-3">
        {isUserLeaderboard && item.name && (
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src={item.avatar} alt={item.name} />
            <AvatarFallback className="text-xs sm:text-sm">
              {item.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
        )}
        <div>
          <p className="font-medium text-xs sm:text-sm">
            {isUserLeaderboard ? item.name : item.group_name}
          </p>
          <p className="text-xs text-muted-foreground">
            {isUserLeaderboard 
              ? `${item.points} Points · ${item.accuracy_percentage}% Correct`
              : `${item.points_per_user} Points · ${item.accuracy_percentage}% Correct`}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <span
          className={`text-xs sm:text-sm font-medium ${item.accuracy_percentage <= 3 ? "text-green-500" : ""}`}
        >
          #{item.rank}
        </span>
        {item.accuracy_percentage <= 3 && (
          <span className="text-sm sm:text-lg">
            {item.rank === 1 ? "" : item.rank === 2 ? "" : ""}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Card className="p-4 sm:p-6">
      <div className="w-full">
        <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">{title}</h3>
        <div className="space-y-2 sm:space-y-4">
          {title === 'User Leaderboard'
            ? leaderboards.user_leaderboard.map(item => renderLeaderboardItem(item, true))
            : leaderboards.groups_leaderboard.map(item => renderLeaderboardItem(item, false))
          }
        </div>
      </div>
    </Card>
  );
}