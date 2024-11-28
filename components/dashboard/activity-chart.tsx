"use client";
import data1 from "@/task-data.json";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const datas = data1.activity.monthly;

export function ActivityChart() {
  return (
    <Card className="p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-0">Activity</h3>
        <select className="text-xs sm:text-sm w-full sm:w-auto">
          <option>Month</option>
          <option>Week</option>
          <option>Day</option>
        </select>
      </div>
      <div className="h-[250px] sm:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={datas} 
            margin={{ 
              top: 10, 
              right: 10, 
              left: -20, 
              bottom: 0 
            }}
          >
            <XAxis
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              height={30}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              width={40}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0,0,0,0.1)' }}
              contentStyle={{ 
                fontSize: '12px', 
                borderRadius: '8px' 
              }}
            />
            <Bar
              dataKey="value"
              fill="darkblue"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}