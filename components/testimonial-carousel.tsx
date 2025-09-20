"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote, Star, TreePine, Flame } from "lucide-react"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Maria S.",
      avatar: "MS",
      daysClean: 180,
      story:
        "Six months ago, I thought I'd never break free. Resolve didn't just give me tools—it gave me hope. The community here understands in ways others can't. Every day I see my Life Tree grow, I'm reminded that healing is possible.",
      achievement: "6 months clean",
      location: "California",
    },
    {
      id: 2,
      name: "James T.",
      avatar: "JT",
      daysClean: 365,
      story:
        "One year. 365 days. I never thought I'd see this day. The science-based approach helped me understand my brain wasn't broken—it was just learning unhealthy patterns. Now it's learning healthy ones. Thank you, Resolve family.",
      achievement: "1 year milestone",
      location: "New York",
    },
    {
      id: 3,
      name: "Lisa K.",
      avatar: "LK",
      daysClean: 90,
      story:
        "The daily check-ins and Life Tree visualization changed everything for me. Seeing my progress grow day by day, leaf by leaf, gave me something tangible to hold onto during the hardest moments. This app saved my life.",
      achievement: "90 days strong",
      location: "Texas",
    },
    {
      id: 4,
      name: "Robert M.",
      avatar: "RM",
      daysClean: 45,
      story:
        "I was skeptical about another app, but Resolve is different. The community doesn't judge—they lift you up. The panic button has been there when I needed it most. I'm not just surviving anymore; I'm healing.",
      achievement: "45 days of growth",
      location: "Florida",
    },
    {
      id: 5,
      name: "Anna P.",
      avatar: "AP",
      daysClean: 730,
      story:
        "Two years clean and I still use Resolve daily. It's not just about breaking habits—it's about building a life worth living. The neuroscience approach helped me understand myself, and the community helped me love myself again.",
      achievement: "2 years transformed",
      location: "Oregon",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold font-poppins text-foreground">Stories of Hope</h2>
        <p className="text-muted-foreground">Real journeys from our community members</p>
      </div>

      {/* Main Testimonial Card */}
      <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 shadow-xl">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center space-y-4">
              <p className="text-lg text-foreground leading-relaxed italic text-balance">
                "{currentTestimonial.story}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-medium">
                    {currentTestimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-medium text-foreground">{currentTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial.location}</div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                  <Flame className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{currentTestimonial.daysClean} days</span>
                </div>
                <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{currentTestimonial.achievement}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Community Impact Stats */}
      <Card className="bg-gradient-to-r from-accent/5 to-secondary/5 border-accent/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <TreePine className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">Community Impact</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">12,847</div>
                <div className="text-sm text-muted-foreground">Lives changed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.3M</div>
                <div className="text-sm text-muted-foreground">Clean days total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">94%</div>
                <div className="text-sm text-muted-foreground">Success rate</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
