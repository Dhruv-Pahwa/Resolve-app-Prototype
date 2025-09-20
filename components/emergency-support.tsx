"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  X,
  Phone,
  MessageCircle,
  Heart,
  LifeBuoy,
  Users,
  Brain,
  Headphones,
  Video,
  AlertTriangle,
  Shield,
  Clock,
} from "lucide-react"

interface EmergencySupportProps {
  onClose: () => void
}

export function EmergencySupport({ onClose }: EmergencySupportProps) {
  const [currentStep, setCurrentStep] = useState("main") // main, breathing, resources, chat
  const [breathingCount, setBreathingCount] = useState(0)
  const [breathingPhase, setBreathingPhase] = useState("inhale") // inhale, hold, exhale

  // Breathing exercise timer
  useEffect(() => {
    if (currentStep === "breathing") {
      const timer = setInterval(() => {
        setBreathingCount((prev) => {
          const newCount = prev + 1
          if (newCount <= 4) {
            setBreathingPhase("inhale")
          } else if (newCount <= 8) {
            setBreathingPhase("hold")
          } else if (newCount <= 12) {
            setBreathingPhase("exhale")
          } else {
            return 0 // Reset cycle
          }
          return newCount
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [currentStep])

  const crisisHotlines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support",
      icon: Phone,
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 crisis counseling",
      icon: MessageCircle,
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral service",
      icon: Headphones,
    },
  ]

  const immediateHelp = [
    {
      title: "Call Emergency Services",
      description: "If you're in immediate danger",
      number: "911",
      icon: AlertTriangle,
      urgent: true,
    },
    {
      title: "Crisis Chat",
      description: "Connect with a counselor now",
      action: "Start Chat",
      icon: MessageCircle,
      urgent: false,
    },
    {
      title: "Video Support",
      description: "Face-to-face crisis counseling",
      action: "Join Session",
      icon: Video,
      urgent: false,
    },
  ]

  const calmingResources = [
    {
      title: "Breathing Exercise",
      description: "4-7-8 breathing technique",
      duration: "5 min",
      icon: Heart,
      action: () => setCurrentStep("breathing"),
    },
    {
      title: "Grounding Exercise",
      description: "5-4-3-2-1 sensory technique",
      duration: "3 min",
      icon: Brain,
      action: () => setCurrentStep("grounding"),
    },
    {
      title: "Calming Sounds",
      description: "Nature sounds and meditation",
      duration: "10 min",
      icon: Headphones,
      action: () => console.log("Play calming sounds"),
    },
    {
      title: "Safe Space Visualization",
      description: "Guided imagery exercise",
      duration: "7 min",
      icon: Shield,
      action: () => console.log("Start visualization"),
    },
  ]

  if (currentStep === "breathing") {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-between mb-4">
              <div></div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep("main")} className="rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardTitle className="text-2xl font-poppins">Breathing Exercise</CardTitle>
            <p className="text-muted-foreground">Follow the rhythm to calm your mind</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Breathing Circle */}
            <div className="flex items-center justify-center">
              <div
                className={`w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center transition-all duration-1000 ${
                  breathingPhase === "inhale"
                    ? "scale-110 bg-primary/10"
                    : breathingPhase === "hold"
                      ? "scale-110 bg-accent/10"
                      : "scale-90 bg-secondary/10"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary capitalize">{breathingPhase}</div>
                  <div className="text-sm text-muted-foreground">{breathingCount % 12 || 12}</div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center space-y-2">
              <p className="text-lg font-medium text-foreground">
                {breathingPhase === "inhale" && "Breathe in slowly..."}
                {breathingPhase === "hold" && "Hold your breath..."}
                {breathingPhase === "exhale" && "Breathe out gently..."}
              </p>
              <p className="text-sm text-muted-foreground">
                {breathingPhase === "inhale" && "Fill your lungs completely"}
                {breathingPhase === "hold" && "Keep the air in your lungs"}
                {breathingPhase === "exhale" && "Release all the tension"}
              </p>
            </div>

            {/* Controls */}
            <div className="flex space-x-3">
              <Button onClick={() => setCurrentStep("main")} variant="outline" className="flex-1">
                Back to Support
              </Button>
              <Button onClick={onClose} className="flex-1">
                I'm Feeling Better
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentStep === "grounding") {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-between mb-4">
              <div></div>
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep("main")} className="rounded-full">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <CardTitle className="text-2xl font-poppins">Grounding Exercise</CardTitle>
            <p className="text-muted-foreground">Connect with your present moment</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* 5-4-3-2-1 Technique */}
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <span className="font-medium">Things you can see</span>
                </div>
                <p className="text-sm text-muted-foreground">Look around and name 5 things you can see</p>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <span className="font-medium">Things you can touch</span>
                </div>
                <p className="text-sm text-muted-foreground">Feel 4 different textures around you</p>
              </div>

              <div className="p-4 bg-secondary/10 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold">3</span>
                  </div>
                  <span className="font-medium">Things you can hear</span>
                </div>
                <p className="text-sm text-muted-foreground">Listen for 3 different sounds</p>
              </div>

              <div className="p-4 bg-chart-4/10 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-chart-4/30 rounded-full flex items-center justify-center">
                    <span className="text-chart-4 font-bold">2</span>
                  </div>
                  <span className="font-medium">Things you can smell</span>
                </div>
                <p className="text-sm text-muted-foreground">Notice 2 different scents</p>
              </div>

              <div className="p-4 bg-chart-5/10 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-chart-5/30 rounded-full flex items-center justify-center">
                    <span className="text-chart-5 font-bold">1</span>
                  </div>
                  <span className="font-medium">Thing you can taste</span>
                </div>
                <p className="text-sm text-muted-foreground">Focus on 1 taste in your mouth</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex space-x-3">
              <Button onClick={() => setCurrentStep("main")} variant="outline" className="flex-1">
                Back to Support
              </Button>
              <Button onClick={onClose} className="flex-1">
                I'm Feeling Better
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-destructive/10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card/95 backdrop-blur border-destructive/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center animate-pulse">
              <LifeBuoy className="w-8 h-8 text-destructive" />
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div>
            <CardTitle className="text-3xl font-poppins text-destructive">Emergency Support</CardTitle>
            <p className="text-muted-foreground text-lg">You're not alone. Help is available right now.</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Immediate Help */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span>Immediate Help</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {immediateHelp.map((help, index) => {
                const IconComponent = help.icon
                return (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      help.urgent
                        ? "bg-destructive/5 border-destructive/30 hover:bg-destructive/10"
                        : "bg-primary/5 border-primary/30 hover:bg-primary/10"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            help.urgent ? "bg-destructive/20" : "bg-primary/20"
                          }`}
                        >
                          <IconComponent className={`w-6 h-6 ${help.urgent ? "text-destructive" : "text-primary"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-foreground">{help.title}</div>
                          <div className="text-sm text-muted-foreground">{help.description}</div>
                        </div>
                        <div className="text-right">
                          {help.number && <div className="text-lg font-bold text-destructive">{help.number}</div>}
                          {help.action && (
                            <Button size="sm" className="bg-primary hover:bg-primary/90">
                              {help.action}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Crisis Hotlines */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>Crisis Hotlines</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {crisisHotlines.map((hotline, index) => {
                const IconComponent = hotline.icon
                return (
                  <Card key={index} className="bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{hotline.name}</div>
                          <div className="text-sm text-muted-foreground">{hotline.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{hotline.number}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Calming Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center space-x-2">
              <Heart className="w-5 h-5 text-accent" />
              <span>Calming Resources</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {calmingResources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card
                    key={index}
                    className="bg-accent/5 border-accent/20 hover:bg-accent/10 transition-colors cursor-pointer"
                    onClick={resource.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{resource.title}</div>
                          <div className="text-sm text-muted-foreground">{resource.description}</div>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{resource.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Safety Reminder */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-primary">You Are Safe</span>
              </div>
              <p className="text-foreground leading-relaxed">
                This moment will pass. You have survived difficult times before, and you will get through this too. Your
                life has value, and there are people who want to help.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Community support available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>24/7 crisis support</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              I'm Feeling Better
            </Button>
            <Button
              onClick={() => console.log("Connect to counselor")}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Connect to Counselor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
