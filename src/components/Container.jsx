
import { cn } from "@/lib/utils";
const Container = ({ children, className, ...props }) => {
  return (
    <section className={cn(
      "min-h-screen bg-stone-50  text-stone-900  ",
      className
    )} {...props}>
      {children}
    </section>
  )
}

export default Container