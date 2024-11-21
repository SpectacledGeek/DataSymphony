"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { course: "Web Dev", engagement: 89 },
  { course: "Data Science", engagement: 75 },
  { course: "Mobile App", engagement: 82 },
  { course: "UI/UX", engagement: 95 },
  { course: "Python", engagement: 78 },
]

export function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Engagement</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value}%`, "Engagement"]}
              labelFormatter={(label) => `Course: ${label}`}
            />
            <Bar dataKey="engagement" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

