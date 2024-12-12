import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your AI deployment?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join leading companies using AtomInfra to deploy and scale their AI models.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

