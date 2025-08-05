import { Loader, LoaderCircle, LoaderPinwheel } from 'lucide-react'
import { cn } from "@/lib/utils"

interface SpinnerProps {
    className?: string
    size?: "sm" | "md" | "lg"
    type?: "loader" | "circle" | "pinwheel"
}

export function Spinner({ className, size = "md", type = "circle" }: SpinnerProps) {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8"
    }

    return (
        <>
            {type === "loader" ? <Loader className={cn("animate-ping", sizeClasses[size], className)} /> :
            type === "pinwheel" ? <LoaderPinwheel className={cn("animate-spin", sizeClasses[size], className)} /> :
            <LoaderCircle className={cn("animate-spin", sizeClasses[size], className)} />}
        </>
    )
}