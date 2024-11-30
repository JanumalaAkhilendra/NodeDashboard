"use client";

import data from "@/public/task-data.json"; // Ensure correct JSON path
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopicsData = data.topics;

export function TopicsList({ title }: { title: string }) {
  const [sortedTopics, setSortedTopics] = useState<any[]>([]);

  useEffect(() => {
    // Select the appropriate leaderboard data
    const data =
      title === "User Leaderboard"
        ? TopicsData.weakest
        : TopicsData.strongest;
  }, [title]);

  const renderLeaderboardItem = (TopicsData :any , isUserLeaderboard: boolean) => (
    <div
      key={isUserLeaderboard ? TopicsData.name : TopicsData.group_name}
      className="flex items-center justify-between gap-2 sm:gap-4 py-2 border-b last:border-b-0"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        {isUserLeaderboard && TopicsData.name && (
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src={TopicsData.image} alt={TopicsData.name} />
          </Avatar>
        )}
        <div>
          <p className="font-medium text-xs sm:text-sm">
            {isUserLeaderboard ? TopicsData.name : TopicsData.group_name}
          </p>
          <p className="text-xs text-muted-foreground">
            {isUserLeaderboard
              ? `${TopicsData.points} Points · ${TopicsData.accuracy_percentage}% Correct`
              : `${TopicsData.points_per_user} Points · ${TopicsData.accuracy_percentage}% Correct`}
          </p>
        </div>
      </div>
    </div>
  );


  return (
    <Card className="p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">{title}</h3>
      <div className="space-y-2 sm:space-y-4">
        {sortedTopics.map((topic, index) => (
          <div
            key={topic.name}
            className="space-y-1 sm:space-y-2 border-b pb-2 last:border-b-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl mr-1">
                {topic.image || "🌟"}
              </span>
              <span className="text-xs sm:text-sm font-medium">{topic.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={topic.correct_percentage}
                className="flex-1 h-2 sm:h-3"
              />
              <span className="text-xs text-muted-foreground">
                {topic.correct_percentage}% Correct
              </span>
              <span className="text-xs sm:text-sm font-medium text-green-500">
                #{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
