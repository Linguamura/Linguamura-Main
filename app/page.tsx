import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

const cards = [
  {
    title: "Education",
    description: "With Linguamura, you can learn new languages and expand your knowledge with our educational resources and explore scholarship opportunities.",
    image: "/education.jpg",
    action: "Learn",
    href: "/education"
  },
  {
    title: "Health",
    description: "With LinguaMura, you can take control of your health and wellness with personalized advice and tools.",
    image: "/health.jpg",
    action: "Control your health",
    href: "/health"
  },
  {
    title: "Marketplace",
    description: "With LinguaMura, discover new products and services in our marketplace.",
    image: "/marketplace.jpg",
    action: "Shop",
    href: "/marketplace"
  },
  {
    title: "Transport",
    description: "Plan your next trip or commute with our transportation features",
    image: "/transport.jpg",
    action: "Transport",
    href: "/transport"
  },
  {
    title: "Housing",
    description: "Find your dream home with our real estate services.",
    image: "/housing.jpg",
    action: "Housing",
    href: "/housing"
  },
  {
    title: "Entertainment",
    description: "Enjoy your favorite movies, music, and games in our entertainment section.",
    image: "/entertainment.jpg",
    action: "Entertainment",
    href: "/entertainment"
  }
]

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-teal-500 hover:bg-teal-600">
                <a href={card.href}>{card.action}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-amber-50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Connect with others in our chat room and community forums
          </h2>
          <Button variant="outline">Join Forum</Button>
        </div>
      </div>
    </div>
  )
}

