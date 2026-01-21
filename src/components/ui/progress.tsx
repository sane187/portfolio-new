"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <motion.div
      className="h-full w-full flex-1 animate-progress-shimmer bg-[linear-gradient(110deg,hsl(var(--primary))_0%,hsl(var(--accent))_50%,hsl(var(--primary))_100%)] bg-[length:200%_100%]"
      initial={{ x: "-100%" }}
      whileInView={{ x: `-${100 - (value || 0)}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
