"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sunrise, Heart, Brain, Users, Target, Sparkles } from "lucide-react"
import Dashboard from "@/components/dashboard"

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState("welcome")

  const handleGetStarted = () => {
    setCurrentStep("signup")
  }

  const handleSignUp = (method: string) => {
    if (method === "skip") {
      setCurrentStep("onboarding")
    } else {
      // Handle actual signup logic here
      setCurrentStep("onboarding")
    }
  }

  const handleOnboardingComplete = () => {
    setCurrentStep("dashboard")
  }

  if (currentStep === "signup") {
    return <SignUpPage onSignUp={handleSignUp} />
  }

  if (currentStep === "onboarding") {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />
  }

  if (currentStep === "dashboard") {
    return <Dashboard />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 flex flex-col items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Logo and sunrise illustration */}
        <div className="space-y-6">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
            <Sunrise className="w-12 h-12 text-primary-foreground" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Resolve
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">Your journey to healing begins with hope</p>
          </div>
        </div>

        {/* Welcome message */}
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Heart className="w-5 h-5" />
              <span className="font-medium">You're not alone in this</span>
            </div>

            <p className="text-foreground/80 leading-relaxed text-balance">
              Breaking free from negative habits isn't about willpower—it's about understanding your brain and giving it
              the tools to heal. We're here to guide you with science, compassion, and hope.
            </p>

            <div className="flex items-center justify-center space-x-6 pt-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Brain className="w-4 h-4 text-primary" />
                <span>Science-based</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                <span>Community support</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to action */}
        <div className="space-y-4">
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-xs text-muted-foreground">Your brain is not broken—it's learning to heal</p>
        </div>
      </div>
    </div>
  )
}

function SignUpPage({ onSignUp }: { onSignUp: (method: string) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 flex flex-col items-center justify-center p-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
            <Target className="w-10 h-10 text-secondary-foreground" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-poppins text-foreground">Let's Get Started</h1>
            <p className="text-muted-foreground leading-relaxed">
              Choose how you'd like to begin your journey to healing
            </p>
          </div>
        </div>

        {/* Sign up options */}
        <div className="space-y-4">
          <Button
            onClick={() => onSignUp("google")}
            variant="outline"
            size="lg"
            className="w-full py-6 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            onClick={() => onSignUp("apple")}
            variant="outline"
            size="lg"
            className="w-full py-6 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continue with Apple
          </Button>

          <Button
            onClick={() => onSignUp("email")}
            variant="outline"
            size="lg"
            className="w-full py-6 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Continue with Email
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Button
            onClick={() => onSignUp("skip")}
            variant="ghost"
            size="lg"
            className="w-full py-6 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            Skip for now
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground leading-relaxed">
          By continuing, you agree to our Terms of Service and Privacy Policy. We're committed to protecting your
          journey and your data.
        </p>
      </div>
    </div>
  )
}

function OnboardingFlow({ onComplete }: { onComplete: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  const totalQuestions = 8 // Simplified from 34 for demo

  const questions = [
    {
      id: 1,
      title: "How are you feeling today?",
      subtitle: "There's no wrong answer—we're here to understand you better",
      type: "mood",
      icon: Heart,
    },
    {
      id: 2,
      title: "What brings you to Resolve?",
      subtitle: "Understanding your motivation helps us personalize your journey",
      type: "motivation",
      icon: Target,
    },
    {
      id: 3,
      title: "How long have you been struggling with this habit?",
      subtitle: "This helps us understand your experience",
      type: "duration",
      icon: Brain,
    },
    {
      id: 4,
      title: "What time of day do you find most challenging?",
      subtitle: "Identifying patterns is the first step to breaking them",
      type: "timing",
      icon: Sunrise,
    },
    {
      id: 5,
      title: "How would you describe your support system?",
      subtitle: "Community and connection are powerful tools for healing",
      type: "support",
      icon: Users,
    },
    {
      id: 6,
      title: "What does success look like to you?",
      subtitle: "Your vision guides our approach",
      type: "goals",
      icon: Sparkles,
    },
    {
      id: 7,
      title: "How do you typically handle stress?",
      subtitle: "Understanding your coping mechanisms helps us build better ones",
      type: "coping",
      icon: Heart,
    },
    {
      id: 8,
      title: "What gives you hope?",
      subtitle: "Hope is the foundation of healing—let's build on yours",
      type: "hope",
      icon: Sunrise,
    },
  ]

  const currentQ = questions[currentQuestion - 1]
  const progress = (currentQuestion / totalQuestions) * 100

  const handleAnswer = (answer: any) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }))

    if (currentQuestion < totalQuestions) {
      setTimeout(() => setCurrentQuestion((prev) => prev + 1), 300)
    } else {
      // Complete onboarding
      setTimeout(() => {
        onComplete()
      }, 300)
    }
  }

  const IconComponent = currentQ.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 flex flex-col">
      {/* Progress bar */}
      <div className="w-full bg-muted/30 h-2">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          {/* Question header */}
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion} of {totalQuestions}
              </p>
              <h2 className="text-2xl font-bold font-poppins text-foreground text-balance">{currentQ.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-balance">{currentQ.subtitle}</p>
            </div>
          </div>

          {/* Answer options */}
          <div className="space-y-3">
            {currentQ.type === "mood" && (
              <>
                {["😊 Great", "😌 Good", "😐 Okay", "😔 Struggling", "😢 Really tough"].map((mood) => (
                  <Button
                    key={mood}
                    onClick={() => handleAnswer(mood)}
                    variant="outline"
                    size="lg"
                    className="w-full py-4 rounded-xl text-left justify-start hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    {mood}
                  </Button>
                ))}
              </>
            )}

            {currentQ.type === "motivation" && (
              <>
                {[
                  "I want to feel better about myself",
                  "I want to improve my relationships",
                  "I want to be healthier",
                  "I want to break a cycle",
                  "Someone I care about is concerned",
                ].map((motivation) => (
                  <Button
                    key={motivation}
                    onClick={() => handleAnswer(motivation)}
                    variant="outline"
                    size="lg"
                    className="w-full py-4 rounded-xl text-left justify-start hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    {motivation}
                  </Button>
                ))}
              </>
            )}

            {/* Add more question types as needed */}
            {!["mood", "motivation"].includes(currentQ.type) && (
              <>
                {["Option A", "Option B", "Option C", "Option D"].map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    size="lg"
                    className="w-full py-4 rounded-xl text-left justify-start hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                  >
                    {option}
                  </Button>
                ))}
              </>
            )}
          </div>

          {/* Skip option */}
          <div className="text-center">
            <Button
              onClick={() => handleAnswer("skipped")}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              I'd rather not answer this
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
