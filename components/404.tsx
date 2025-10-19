import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="absolute top-4 right-4">
        <Header />
      </div>
      <div className="flex flex-col items-center gap-8 text-center max-w-md">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-foreground tracking-tight">404</h1>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Button asChild size="lg" className="cursor-pointer mt-2">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
