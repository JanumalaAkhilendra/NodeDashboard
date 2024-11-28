"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-col md:items-center md:justify-between w-full pt-10">
      <div className="flex sm:flex-col justify-between gap-4 md:flex-row md:items-center md:justify-between w-full">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full gap-4 text-sm/[10px]">
        <Select defaultValue="all-time">
          <SelectTrigger className="md:w-1/4 sm:1/3">
          Timeframe:
            <SelectValue placeholder="Timeframe px-3" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All</SelectItem>
            <SelectItem value="last-7-days">Last 7 days</SelectItem>
            <SelectItem value="last-30-days">Last 30 days</SelectItem>
            <SelectItem value="last-90-days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="md:w-1/4 sm:1/3">
          People:
            <SelectValue placeholder="People" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="team">Team</SelectItem>
            <SelectItem value="department">Department</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="md:w-1/4 sm:1/3">
          Topic:
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="safety">Safety</SelectItem>
            <SelectItem value="compliance">Compliance</SelectItem>
            <SelectItem value="technical">Technical</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}