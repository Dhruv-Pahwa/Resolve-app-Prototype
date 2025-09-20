"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Heart, Sparkles } from "lucide-react"

interface CheckInModalProps {
  onComplete: (mood: string) => void
  onClose: () => void
}

export function CheckInModal({ onComplete, onClose }: CheckInModalProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const moods = [
    { emoji: "😊", label: "Amazing", value: "amazing" },
    { emoji: "😌", label: "Good", value: "good" },
    { emoji: "😐", label: "Okay", value: "okay" },
    { emoji: "😔", label: "Struggling", value: "struggling" },
    { emoji: "😢", label: "Really tough", value: "tough" },
  ]

  const handleComplete = () => {
    if (selectedMood) {
      onComplete(selectedMood)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardTitle className="text-2xl font-poppins">How are you feeling today?</CardTitle>
          <p className="text-muted-foreground leading-relaxed">
            Your daily check-in helps us understand your journey better
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Mood Selection */}
          <div className="grid grid-cols-5 gap-3">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-3 rounded-xl text-center transition-all duration-300 ${
                  selectedMood === mood.value
                    ? "bg-primary/20 border-2 border-primary scale-105"
                    : "bg-muted/30 border-2 border-transparent hover:bg-muted/50"
                }`}
              >
                <div className="text-2xl mb-1">{mood.emoji}</div>
                <div className="text-xs font-medium">{mood.label}</div>
              </button>
            ))}
          </div>

          {/* Motivational Quote */}
          <div className="text-center p-4 bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Today's Reminder</span>
            </div>
            <p className="text-sm text-foreground/80 italic">
              "Progress isn't about perfection—it's about showing up for yourself, one day at a time."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleComplete}
              disabled={!selectedMood}
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Check-in
            </Button>

            <Button onClick={onClose} variant="ghost" className="w-full">
              Maybe later
            </Button>
          </div>

          {/* Streak Celebration */}
          {selectedMood && ["amazing", "good", "okay"].includes(selectedMood) && (
            <div className="text-center p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg animate-in fade-in duration-300">
              <div className="text-lg">🎉</div>
              <p className="text-sm text-primary font-medium">Keep up the amazing work!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
