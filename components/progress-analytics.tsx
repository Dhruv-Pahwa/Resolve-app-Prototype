"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Target,
  Brain,
  Heart,
  Flame,
  TreePine,
  BarChart3,
  LineChart,
  PieChart,
} from "lucide-react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts"

interface ProgressAnalyticsProps {
  onBack: () => void
}

export function ProgressAnalytics({ onBack }: ProgressAnalyticsProps) {
  const [timeRange, setTimeRange] = useState("30d") // 7d, 30d, 90d, 1y

  // Mock data - in real app this would come from user's actual data
  const streakData = [
    { day: "Day 1", streak: 1, mood: 3 },
    { day: "Day 2", streak: 2, mood: 4 },
    { day: "Day 3", streak: 3, mood: 3 },
    { day: "Day 4", streak: 4, mood: 5 },
    { day: "Day 5", streak: 5, mood: 4 },
    { day: "Day 6", streak: 6, mood: 4 },
    { day: "Day 7", streak: 7, mood: 5 },
  ]

  const moodData = [
    { name: "Amazing", value: 15, color: "#10b981" },
    { name: "Good", value: 35, color: "#3b82f6" },
    { name: "Okay", value: 30, color: "#f59e0b" },
    { name: "Struggling", value: 15, color: "#ef4444" },
    { name: "Tough", value: 5, color: "#dc2626" },
  ]

  const weeklyProgress = [
    { week: "Week 1", exercises: 12, checkins: 7, community: 3 },
    { week: "Week 2", exercises: 18, checkins: 7, community: 5 },
    { week: "Week 3", exercises: 15, checkins: 6, community: 8 },
    { week: "Week 4", exercises: 22, checkins: 7, community: 12 },
  ]

  const milestones = [
    { title: "First Day", date: "Jan 1", completed: true },
    { title: "First Week", date: "Jan 7", completed: true },
    { title: "Two Weeks", date: "Jan 14", completed: false },
    { title: "One Month", date: "Jan 31", completed: false },
    { title: "Three Months", date: "Mar 31", completed: false },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="rounded-full">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold font-poppins text-foreground">Progress Analytics</h1>
          <p className="text-muted-foreground">Track your healing journey with data-driven insights</p>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex space-x-2 bg-muted/30 rounded-lg p-1">
        {["7d", "30d", "90d", "1y"].map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? "default" : "ghost"}
            size="sm"
            onClick={() => setTimeRange(range)}
            className="flex-1"
          >
            {range === "7d" && "7 Days"}
            {range === "30d" && "30 Days"}
            {range === "90d" && "90 Days"}
            {range === "1y" && "1 Year"}
          </Button>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">7</div>
            <p className="text-sm text-muted-foreground">Current streak</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TreePine className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent">35%</div>
            <p className="text-sm text-muted-foreground">Tree growth</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20 border-secondary/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Brain className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold text-secondary-foreground">67</div>
            <p className="text-sm text-muted-foreground">Exercises done</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/20 border-chart-4/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-5 h-5 text-chart-4" />
            </div>
            <div className="text-2xl font-bold text-chart-4">4.2</div>
            <p className="text-sm text-muted-foreground">Avg mood</p>
          </CardContent>
        </Card>
      </div>

      {/* Streak Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <LineChart className="w-5 h-5 text-primary" />
            <span>Streak & Mood Tracking</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={streakData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Line
                  type="monotone"
                  dataKey="streak"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 3 }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Streak Days</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm text-muted-foreground">Mood Score</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-accent" />
            <span>Weekly Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" className="text-xs" />
                <YAxis className="text-xs" />
                <Bar dataKey="exercises" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="checkins" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="community" fill="hsl(var(--secondary))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Exercises</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm text-muted-foreground">Check-ins</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Community</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mood Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-chart-4" />
              <span>Mood Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <RechartsPieChart
                    data={moodData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {moodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {moodData.map((mood) => (
                <div key={mood.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mood.color }}></div>
                    <span className="text-sm text-foreground">{mood.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{mood.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Milestones</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      milestone.completed ? "bg-primary border-primary" : "border-muted-foreground bg-transparent"
                    }`}
                  >
                    {milestone.completed && <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5"></div>}
                  </div>
                  <div className="flex-1">
                    <div className={`font-medium ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}>
                      {milestone.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{milestone.date}</div>
                  </div>
                  {milestone.completed && (
                    <div className="text-primary">
                      <Calendar className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Insights & Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-card/50 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Strong Progress Pattern</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your mood scores are consistently improving alongside your streak. This shows your brain is adapting
                  to healthier patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-card/50 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                <Heart className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Community Engagement</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your community participation has increased 300% this month. Social support is a key factor in
                  long-term recovery success.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
