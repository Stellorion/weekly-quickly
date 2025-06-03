"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Input } from "@/src/components/ui/input"
import { Star, Clock, Shield, ChefHat, Smartphone, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Shield,
      title: "Allergy Safe",
      description: "Advanced filtering ensures your safety with detailed allergy information for every dish.",
    },
    {
      icon: ChefHat,
      title: "Personalized Menu",
      description: "Get recommendations based on your preferences and dietary restrictions.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick delivery from your favorite local restaurants in 30 minutes or less.",
    },
    {
      icon: Smartphone,
      title: "Easy Ordering",
      description: "Simple, intuitive interface makes ordering your favorite meals effortless.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Finally an app that takes my nut allergy seriously! I can order with confidence.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "The personalized recommendations are spot on. It knows exactly what I like!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Super fast delivery and the food always arrives hot. Best food app I've used!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Partner Restaurants" },
    { number: "4.9", label: "App Rating" },
    { number: "30min", label: "Avg Delivery" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                🎉 Now serving 50+ cities nationwide
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Safe, Fast &<span className="text-green-600"> Personalized</span> Food Delivery
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Order from your favorite restaurants with confidence. Our advanced allergy filtering and personalized
                recommendations ensure every meal is perfect for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  Start Ordering Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">50K+ happy customers</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9 rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/homepage.svg"
                  alt="Food delivery app interface"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose FoodSafe?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another food delivery app. We prioritize your safety, preferences, and satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Getting your perfect meal is just three simple steps away</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Set Your Preferences",
                description:
                  "Tell us about your allergies, dislikes, and dietary preferences for a personalized experience.",
              },
              {
                step: "2",
                title: "Browse & Order",
                description:
                  "Explore restaurants and dishes filtered specifically for your needs. Order with confidence.",
              },
              {
                step: "3",
                title: "Enjoy Your Meal",
                description: "Fast delivery brings your perfect meal right to your door, safe and delicious.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers who trust FoodSafe</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Order Safely?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of users who trust FoodSafe for their daily meals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
          <p className="text-green-100 text-sm mt-4">Free to download • No credit card required</p>
        </div>
      </section>
    </div>
  )
}
