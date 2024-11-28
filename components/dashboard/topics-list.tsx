"use client";
import data from "@/task-data.json";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const topics = data.topics;

export function TopicsList({ title }: { title: keyof typeof topics }) {
  return (
    <Card className="p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">{title}</h3>
      <div className="space-y-2 sm:space-y-4">
        {topics[title].map((topic) => (
          <div key={topic.name} className="space-y-1 sm:space-y-2 border-b pb-2 last:border-b-0">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl mr-1">{topic.image}</span>
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
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}