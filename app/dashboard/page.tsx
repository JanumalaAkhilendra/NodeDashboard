"use client";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { ActivityChart } from "@/components/dashboard/activity-chart";
// import { TopicsList } from "@/components/dashboard/topics-list";
import { Leaderboard } from "@/components/dashboard/leaderboard";
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <DashboardHeader />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <DashboardStats />
        <ActivityChart />
        {/* <TopicsList title="weakest" /> */}
        {/* <TopicsList title="strongest" /> */}
        <Leaderboard title="User Leaderboard"  />
        <Leaderboard title="Groups Leaderboard" />
      </div>
    </div>
  );
}