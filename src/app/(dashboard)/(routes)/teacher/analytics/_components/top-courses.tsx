import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const topCourses = [
  { name: "Advanced Web Development", students: 1250, revenue: 625000 },
  { name: "Data Science Fundamentals", students: 980, revenue: 490000 },
  { name: "Mobile App Development", students: 875, revenue: 437500 },
  { name: "UI/UX Design Masterclass", students: 760, revenue: 380000 },
]

export function TopCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topCourses.map((course, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{course.name}</p>
                <p className="text-sm text-muted-foreground">{course.students} students</p>
              </div>
              <Badge variant="secondary">₹{course.revenue.toLocaleString()}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

