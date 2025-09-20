"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Award,
  Star,
  Flame,
  TreePine,
  Heart,
  Users,
  Brain,
  Target,
  Calendar,
  Sparkles,
  Trophy,
  Medal,
  Crown,
  Zap,
} from "lucide-react"

interface AchievementsPageProps {
  onBack: () => void
}

export function AchievementsPage({ onBack }: AchievementsPageProps) {
  const [activeCategory, setActiveCategory] = useState("all") // all, streaks, community, growth, milestones

  const achievements = [
    {
      id: 1,
      title: "First Step",
      description: "Completed your first day",
      icon: Star,
      category: "milestones",
      earned: true,
      earnedDate: "Jan 1, 2024",
      rarity: "common",
      points: 10,
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintained streak for 7 days",
      icon: Flame,
      category: "streaks",
      earned: true,
      earnedDate: "Jan 7, 2024",
      rarity: "common",
      points: 50,
    },
    {
      id: 3,
      title: "Community Helper",
      description: "Supported 5 community members",
      icon: Heart,
      category: "community",
      earned: true,
      earnedDate: "Jan 10, 2024",
      rarity: "uncommon",
      points: 75,
    },
    {
      id: 4,
      title: "Tree Tender",
      description: "Life Tree reached 25% growth",
      icon: TreePine,
      category: "growth",
      earned: true,
      earnedDate: "Jan 12, 2024",
      rarity: "uncommon",
      points: 100,
    },
    {
      id: 5,
      title: "Two Week Champion",
      description: "Maintained streak for 14 days",
      icon: Trophy,
      category: "streaks",
      earned: false,
      progress: 50, // 7/14 days
      rarity: "rare",
      points: 150,
    },
    {
      id: 6,
      title: "Mindful Master",
      description: "Completed 50 mindfulness exercises",
      icon: Brain,
      category: "growth",
      earned: false,
      progress: 80, // 40/50 exercises
      rarity: "rare",
      points: 200,
    },
    {
      id: 7,
      title: "Community Leader",
      description: "Received 100 likes on posts",
      icon: Users,
      category: "community",
      earned: false,
      progress: 30, // 30/100 likes
      rarity: "epic",
      points: 300,
    },
    {
      id: 8,
      title: "Month Milestone",
      description: "Maintained streak for 30 days",
      icon: Medal,
      category: "streaks",
      earned: false,
      progress: 23, // 7/30 days
      rarity: "epic",
      points: 500,
    },
    {
      id: 9,
      title: "Life Tree Master",
      description: "Life Tree reached 100% growth",
      icon: Crown,
      category: "growth",
      earned: false,
      progress: 35, // 35/100%
      rarity: "legendary",
      points: 1000,
    },
  ]

  const categories = [
    { id: "all", label: "All", icon: Award },
    { id: "streaks", label: "Streaks", icon: Flame },
    { id: "community", label: "Community", icon: Users },
    { id: "growth", label: "Growth", icon: TreePine },
    { id: "milestones", label: "Milestones", icon: Target },
  ]

  const filteredAchievements =
    activeCategory === "all" ? achievements : achievements.filter((a) => a.category === activeCategory)

  const earnedAchievements = achievements.filter((a) => a.earned)
  const totalPoints = earnedAchievements.reduce((sum, a) => sum + a.points, 0)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-muted-foreground border-muted"
      case "uncommon":
        return "text-primary border-primary/30"
      case "rare":
        return "text-accent border-accent/30"
      case "epic":
        return "text-secondary-foreground border-secondary/30"
      case "legendary":
        return "text-chart-5 border-chart-5/30"
      default:
        return "text-muted-foreground border-muted"
    }
  }

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-muted/10"
      case "uncommon":
        return "bg-primary/5"
      case "rare":
        return "bg-accent/5"
      case "epic":
        return "bg-secondary/10"
      case "legendary":
        return "bg-chart-5/5"
      default:
        return "bg-muted/10"
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="rounded-full">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold font-poppins text-foreground">Achievements</h1>
          <p className="text-muted-foreground">Celebrate your progress and unlock new milestones</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">{earnedAchievements.length}</div>
            <p className="text-sm text-muted-foreground">Earned</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent">{totalPoints}</div>
            <p className="text-sm text-muted-foreground">Points</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20 border-secondary/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold text-secondary-foreground">
              {achievements.length - earnedAchievements.length}
            </div>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/20 border-chart-4/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-chart-4" />
            </div>
            <div className="text-2xl font-bold text-chart-4">
              {Math.round((earnedAchievements.length / achievements.length) * 100)}%
            </div>
            <p className="text-sm text-muted-foreground">Complete</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="bg-transparent"
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          )
        })}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map((achievement) => {
          const IconComponent = achievement.icon
          const isEarned = achievement.earned

          return (
            <Card
              key={achievement.id}
              className={`transition-all duration-300 hover:shadow-lg ${
                isEarned
                  ? `${getRarityBg(achievement.rarity)} ${getRarityColor(achievement.rarity)} border-2`
                  : "bg-muted/20 border-muted/30"
              }`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon and Title */}
                  <div className="text-center space-y-2">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        isEarned ? getRarityBg(achievement.rarity) : "bg-muted/30"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${
                          isEarned ? getRarityColor(achievement.rarity).split(" ")[0] : "text-muted-foreground"
                        }`}
                      />
                    </div>

                    <div>
                      <h3 className={`font-bold ${isEarned ? "text-foreground" : "text-muted-foreground"}`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${isEarned ? "text-foreground/80" : "text-muted-foreground"}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress or Earned Date */}
                  {isEarned ? (
                    <div className="text-center space-y-2">
                      <div
                        className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getRarityBg(achievement.rarity)} ${getRarityColor(achievement.rarity)}`}
                      >
                        <Star className="w-3 h-3" />
                        <span className="capitalize">{achievement.rarity}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>Earned {achievement.earnedDate}</span>
                      </div>
                      <div className="text-sm font-medium text-primary">+{achievement.points} points</div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {achievement.progress !== undefined && (
                        <>
                          <Progress value={achievement.progress} className="h-2" />
                          <div className="text-center text-xs text-muted-foreground">
                            {achievement.progress}% complete
                          </div>
                        </>
                      )}
                      <div className="text-center">
                        <div
                          className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-muted/30 text-muted-foreground`}
                        >
                          <span className="capitalize">{achievement.rarity}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{achievement.points} points</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Achievement Toolbox */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-primary" />
            <span>Achievement Toolbox</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
              <div className="space-y-1">
                <div className="font-medium">Daily Challenges</div>
                <div className="text-sm text-muted-foreground">Complete special tasks for bonus points</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
              <div className="space-y-1">
                <div className="font-medium">Streak Boosters</div>
                <div className="text-sm text-muted-foreground">Tools to help maintain your progress</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
              <div className="space-y-1">
                <div className="font-medium">Community Badges</div>
                <div className="text-sm text-muted-foreground">Show off your achievements to others</div>
              </div>
            </Button>

            <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
              <div className="space-y-1">
                <div className="font-medium">Progress Rewards</div>
                <div className="text-sm text-muted-foreground">Unlock new features and content</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
