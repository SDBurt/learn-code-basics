import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"
import { TooltipProvider } from "@/components/ui/tooltip"

interface InfoTipProps {
  term: string
  children: React.ReactNode
}

function InfoTip({ term, children }: InfoTipProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span className="decoration-wavy underline underline-offset-4 decoration-pink-400 decoration-2 cursor-help hover:decoration-pink-500 transition-colors">
            {term}
          </span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={4}
            className="z-50 max-w-[280px] bg-white text-foreground text-sm border border-sage-200 shadow-lg p-3 rounded-xl animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          >
            {children}
            <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-white fill-white" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  )
}

const InfoTipProvider = TooltipProvider

export { InfoTip, InfoTipProvider }
