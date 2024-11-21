"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: "Jan", revenue: 154000 },
  { month: "Feb", revenue: 168000 },
  { month: "Mar", revenue: 187000 },
  { month: "Apr", revenue: 173000 },
  { month: "May", revenue: 192000 },
  { month: "Jun", revenue: 210000 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis 
              tickFormatter={(value) => `₹${value / 1000}k`}
            />
            <Tooltip 
              formatter={(value) => [`₹${value}`, "Revenue"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

