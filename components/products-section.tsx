import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsSection() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Products</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle>AtomDeploy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Streamlined AI model deployment platform</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle>AtomScale</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Intelligent auto-scaling for AI workloads</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle>AtomMonitor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Real-time monitoring and analytics for AI systems</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

