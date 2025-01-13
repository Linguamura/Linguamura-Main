"use client"

import { Trophy, X } from 'lucide-react'
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
  onUpgrade: () => void
}

export function PremiumModal({ isOpen, onClose, onUpgrade }: PremiumModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-[#04E2E2]" />
            Unlock Expert Guidance!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            To connect with professional tutors and get personalized learning
            support, upgrade to Premium. Master your subjects with one-on-one
            help and boost your learning journey! 🚀
          </p>
          <div className="flex justify-end gap-4">
            <Button variant="ghost" onClick={onClose}>
              Maybe later
            </Button>
            <Button 
              className="bg-[#04E2E2] hover:bg-[#00BBBB]"
              onClick={onUpgrade}
            >
              Go Premium & Level Up!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

