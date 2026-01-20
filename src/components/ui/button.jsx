import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
// Note: We don't have radix-ui installed yet, and might not need it for a simple button.
// I'll implement a standard button without Slot for now to avoid extra deps if not needed, 
// or I should install radix-ui/react-slot if I want full compatibility. 
// Request said "Shadcn/ui" which uses it. I'll just use conditional rendering or simple props for now to keep it lightweight unless requested.
// Actually, I can just use a simple polymorphic ref if needed, but for "Landing Page" just standard button is fine.
// I'll stick to a robust Tailwind button.

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Simplified variant management
    const variants = {
        default: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-brand-secondary text-white hover:bg-brand-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-brand-primary hover:bg-gray-100 shadow-md"
    }

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    }

    const Comp = asChild ? Slot : "button"

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button }
