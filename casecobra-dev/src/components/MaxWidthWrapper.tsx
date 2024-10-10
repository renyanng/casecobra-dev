import {cn} from "@/lib/utils"
import {ReactNode} from "react"

// react component that wraps its children in a div with a max width
const MaxWidthWrapper = ({className, children}: 
    {
        className?: string;
        children: ReactNode;
    }
) => {
    // return a div with a max width of 1400px, centered horizontally, and some padding
    return <div className={cn('h mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
        {children}
    </div>
}

export default MaxWidthWrapper;