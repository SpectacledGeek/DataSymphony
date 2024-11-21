import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { action: "New enrollment", course: "Advanced Web Development", time: "2 hours ago" },
  { action: "Course completed", course: "Data Science Fundamentals", time: "5 hours ago" },
  { action: "New review", course: "Mobile App Development", time: "1 day ago" },
  { action: "Quiz submitted", course: "UI/UX Design Masterclass", time: "2 days ago" },
]

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.course}</p>
              </div>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}