"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Heart, MessageCircle, Share2, Users, Sparkles, HandHeart, Flame, Send } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

interface CommunityFeedProps {
  onBack: () => void
}

export function CommunityFeed({ onBack }: CommunityFeedProps) {
  const [newPost, setNewPost] = useState("")
  const [activeTab, setActiveTab] = useState("feed") // feed, testimonials, support

  const communityPosts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "SM",
      timeAgo: "2 hours ago",
      content:
        "Day 14 and feeling stronger than ever! The mindfulness exercises are really helping me stay centered. Thank you to everyone who's been so supportive. 💚",
      likes: 12,
      comments: 3,
      streak: 14,
      isLiked: false,
    },
    {
      id: 2,
      author: "Mike R.",
      avatar: "MR",
      timeAgo: "4 hours ago",
      content:
        "Had a tough moment today but instead of giving in, I came here and read everyone's stories. This community is my anchor. One day at a time.",
      likes: 18,
      comments: 7,
      streak: 3,
      isLiked: true,
    },
    {
      id: 3,
      author: "Emma L.",
      avatar: "EL",
      timeAgo: "6 hours ago",
      content:
        "Celebrating 30 days! 🎉 To anyone just starting: it gets easier. Your brain is learning new patterns. Trust the process and be kind to yourself.",
      likes: 24,
      comments: 9,
      streak: 30,
      isLiked: false,
    },
    {
      id: 4,
      author: "David K.",
      avatar: "DK",
      timeAgo: "8 hours ago",
      content:
        "The Life Tree visualization is so powerful. Watching it grow as I heal reminds me that recovery is a living, breathing process. Thank you for this beautiful metaphor.",
      likes: 15,
      comments: 5,
      streak: 21,
      isLiked: true,
    },
  ]

  const handleLike = (postId: number) => {
    // Handle like functionality
    console.log("Liked post:", postId)
  }

  const handleComment = (postId: number) => {
    // Handle comment functionality
    console.log("Comment on post:", postId)
  }

  const handleShare = (postId: number) => {
    // Handle share functionality
    console.log("Share post:", postId)
  }

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      // Handle new post submission
      console.log("New post:", newPost)
      setNewPost("")
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
          <h1 className="text-2xl font-bold font-poppins text-foreground">Community</h1>
          <p className="text-muted-foreground">Connect, share, and support each other</p>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">2,847</div>
            <p className="text-sm text-muted-foreground">Active members</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <HandHeart className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold text-accent">15,293</div>
            <p className="text-sm text-muted-foreground">Support given</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20 border-secondary/30">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="text-2xl font-bold text-secondary-foreground">892</div>
            <p className="text-sm text-muted-foreground">Days collective</p>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
        <Button
          variant={activeTab === "feed" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("feed")}
          className="flex-1"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Feed
        </Button>
        <Button
          variant={activeTab === "testimonials" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("testimonials")}
          className="flex-1"
        >
          <Heart className="w-4 h-4 mr-2" />
          Stories
        </Button>
        <Button
          variant={activeTab === "support" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("support")}
          className="flex-1"
        >
          <HandHeart className="w-4 h-4 mr-2" />
          Support
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "feed" && (
        <div className="space-y-6">
          {/* New Post */}
          <Card>
            <CardContent className="p-4">
              <div className="flex space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary">A</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Share your journey, offer support, or celebrate a win..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[80px] resize-none border-muted-foreground/20 focus:border-primary"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Your story matters and can inspire others</p>
                    <Button onClick={handlePostSubmit} disabled={!newPost.trim()} size="sm">
                      <Send className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Posts */}
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{post.author}</span>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Flame className="w-3 h-3 text-primary" />
                            <span>{post.streak} days</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                      </div>

                      <p className="text-foreground leading-relaxed">{post.content}</p>

                      <div className="flex items-center space-x-6 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`text-muted-foreground hover:text-primary ${post.isLiked ? "text-primary" : ""}`}
                        >
                          <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? "fill-current" : ""}`} />
                          {post.likes}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleComment(post.id)}
                          className="text-muted-foreground hover:text-accent"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare(post.id)}
                          className="text-muted-foreground hover:text-secondary-foreground"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "testimonials" && <TestimonialCarousel />}

      {activeTab === "support" && (
        <div className="space-y-6">
          {/* Support Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HandHeart className="w-5 h-5 text-primary" />
                <span>Need Support?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
                  <div className="space-y-1">
                    <div className="font-medium">Crisis Support</div>
                    <div className="text-sm text-muted-foreground">24/7 immediate help</div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
                  <div className="space-y-1">
                    <div className="font-medium">Peer Mentorship</div>
                    <div className="text-sm text-muted-foreground">Connect with experienced members</div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
                  <div className="space-y-1">
                    <div className="font-medium">Group Sessions</div>
                    <div className="text-sm text-muted-foreground">Join virtual support meetings</div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 text-left justify-start bg-transparent">
                  <div className="space-y-1">
                    <div className="font-medium">Resource Library</div>
                    <div className="text-sm text-muted-foreground">Tools and educational content</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Support Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Community Support Requests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-accent/20 text-accent text-xs">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        "Having a really tough day. Could use some encouragement..."
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Button size="sm" variant="outline">
                          <Heart className="w-3 h-3 mr-1" />
                          Send Support
                        </Button>
                        <span className="text-xs text-muted-foreground">5 responses</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary/20 text-primary text-xs">AL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">
                        "Looking for accountability partner for morning check-ins"
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Button size="sm" variant="outline">
                          <Users className="w-3 h-3 mr-1" />
                          Connect
                        </Button>
                        <span className="text-xs text-muted-foreground">3 interested</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
