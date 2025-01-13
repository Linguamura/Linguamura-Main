import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"

interface CoinsCardProps {
  coins: number
  onBuyMore: () => void
}

export function CoinsCard({ coins, onBuyMore }: CoinsCardProps) {
  return (
    <Card className="p-6">
      <p className="mb-4 text-lg">
        You have <span className="font-bold text-[#04E2E2]">{coins}</span> coins.
      </p>
      <Button 
        variant="outline" 
        className="w-full border-[#04E2E2] text-[#04E2E2] hover:bg-[#04E2E2] hover:text-white"
        onClick={onBuyMore}
      >
        Buy more
      </Button>
    </Card>
  )
}

