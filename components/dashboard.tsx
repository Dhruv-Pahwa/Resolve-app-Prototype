"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Flame,
  TreePine,
  Target,
  Users,
  Award,
  Brain,
  Heart,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Settings,
  LifeBuoy,
  Star,
} from "lucide-react"
import { CheckInModal } from "@/components/check-in-modal"
import { LifeTree } from "@/components/life-tree"
import { CommunityFeed } from "@/components/community-feed"
import { ProgressAnalytics } from "@/components/progress-analytics"
import { AchievementsPage } from "@/components/achievements-page"
import { EmergencySupport } from "@/components/emergency-support"

export default function Dashboard() {
  const [showCheckIn, setShowCheckIn] = useState(false)
  const [showEmergencySupport, setShowEmergencySupport] = useState(false)
  const [currentView, setCurrentView] = useState("dashboard") // dashboard, community, progress, achievements
  const [streakDays, setStreakDays] = useState(7)
  const [treeGrowth, setTreeGrowth] = useState(35) // Percentage of tree growth
  const [userName] = useState("Alex") // This would come from user data

  // Show check-in modal on first load (simulate daily check-in)
  useEffect(() => {
    const timer = setTimeout(() => setShowCheckIn(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleCheckInComplete = (mood: string) => {
    setShowCheckIn(false)
    // Handle check-in data
    console.log("Check-in completed with mood:", mood)
  }

  const handleNavigation = (view: string) => {
    setCurrentView(view)
  }

  const handleEmergencySupport = () => {
    setShowEmergencySupport(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-foreground">Welcome back, {userName}</h1>
                <p className="text-sm text-muted-foreground">Your healing journey continues</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {currentView === "community" ? (
        <CommunityFeed onBack={() => setCurrentView("dashboard")} />
      ) : currentView === "progress" ? (
        <ProgressAnalytics onBack={() => setCurrentView("dashboard")} />
      ) : currentView === "achievements" ? (
        <AchievementsPage onBack={() => setCurrentView("dashboard")} />
      ) : (
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          {/* Streak and Tree Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Streak Counter */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Flame className="w-5 h-5" />
                  <span>Clean Streak</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold font-poppins text-primary">{streakDays}</div>
                  <p className="text-muted-foreground">days strong</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < streakDays ? "bg-primary" : "bg-muted"
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">This week's progress</p>
                </div>
              </CardContent>
            </Card>

            {/* Life Tree */}
            <Card className="bg-gradient-to-br from-accent/5 to-secondary/10 border-accent/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-accent">
                  <TreePine className="w-5 h-5" />
                  <span>Life Tree</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <LifeTree growth={treeGrowth} />
                  <div className="space-y-1">
                    <Progress value={treeGrowth} className="h-2" />
                    <p className="text-sm text-muted-foreground">{treeGrowth}% grown</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Your progress nurtures growth</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleNavigation("progress")}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Progress</p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleNavigation("achievements")}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium">Achievements</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Brain className="w-6 h-6 text-secondary-foreground" />
                </div>
                <p className="text-sm font-medium">Exercises</p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleNavigation("community")}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-chart-4/20 rounded-full flex items-center justify-center group-hover:bg-chart-4/30 transition-colors">
                  <Users className="w-6 h-6 text-chart-4" />
                </div>
                <p className="text-sm font-medium">Community</p>
              </CardContent>
            </Card>
          </div>

          {/* Today's Focus */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span>Today's Focus</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Practice Self-Compassion</p>
                  <p className="text-sm text-muted-foreground">Remember: healing isn't linear</p>
                </div>
                <Button size="sm" variant="outline">
                  Start
                </Button>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Mindfulness Check-in</p>
                  <p className="text-sm text-muted-foreground">5-minute breathing exercise</p>
                </div>
                <Button size="sm" variant="outline">
                  Begin
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Recent Wins</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">First Week Complete!</p>
                    <p className="text-sm text-muted-foreground">You've built a solid foundation</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Community Helper</p>
                    <p className="text-sm text-muted-foreground">Supported 3 community members</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Panic Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          onClick={handleEmergencySupport}
        >
          <LifeBuoy className="w-6 h-6" />
        </Button>
      </div>

      {/* Check-in Modal */}
      {showCheckIn && <CheckInModal onComplete={handleCheckInComplete} onClose={() => setShowCheckIn(false)} />}

      {showEmergencySupport && <EmergencySupport onClose={() => setShowEmergencySupport(false)} />}
    </div>
  )
}
