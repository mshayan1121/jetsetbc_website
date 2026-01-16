import * as React from "react"
import { cn } from "../../lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[120px] w-full rounded-md border border-cream-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-navy-900/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 focus-visible:border-gold-500 disabled:cursor-not-allowed disabled:opacity-50 text-navy-900 font-body transition-all duration-200 hover:border-gold-400 resize-y",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }