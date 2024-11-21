"use client"

import { BookOpen, IndianRupee, Star, Users } from "lucide-react"
import { EngagementChart } from "./_components/engagement-chart"
import { KPICard } from "./_components/kpi-card"
import { RecentActivities } from "./_components/recent-activities"
import { RevenueChart } from "./_components/revenue-chart"
import { TopCourses } from "./_components/top-courses"

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <KPICard title="Total Students" value="3,865" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <KPICard title="Active Courses" value="12" icon={<BookOpen className="h-4 w-4 text-muted-foreground" />} />
        <KPICard title="Total Revenue" value="₹19,32,500" icon={<IndianRupee className="h-4 w-4 text-muted-foreground" />} />
        <KPICard title="Average Rating" value="4.8" icon={<Star className="h-4 w-4 text-muted-foreground" />} />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <RevenueChart />
        <EngagementChart />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <TopCourses />
        <RecentActivities />
      </div>
    </div>
  )
}