import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers, ArrowRight, Github, Terminal, Minus, ChevronRight, Sparkles, Scale, Feather, Wind } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg tracking-tight" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              OzempicClaw
            </span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-secondary/20 text-secondary border-secondary/30">
              v0.0.01
            </Badge>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#comparison" className="hover:text-foreground transition-colors">Compare</a>
            <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Github className="h-4 w-4 mr-1" /> Star
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="text-xs font-normal text-muted-foreground border-border px-3 py-1">
              The Next Evolution in Minimalist Orchestration
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            The thinnest agent
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              framework yet.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            You thought NullClaw was lean? OzempicClaw sheds even more layers.
            Orchestrate agents with an framework so light, it's practically wasting away.
          </p>
          <p className="text-sm text-muted-foreground/60 mb-10">
            97% smaller than OpenClaw. Side effects may include mass loss of dependencies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base">
              <Terminal className="h-4 w-4 mr-2" />
              pip install ozempicclaw
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Read the docs <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Code snippet */}
          <div className="mt-16 max-w-xl mx-auto text-left">
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
                <span className="ml-2 text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>main.py</span>
              </div>
              <pre className="p-5 text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <code>
                  <span className="text-primary">from</span> <span className="text-secondary">ozempicclaw</span> <span className="text-primary">import</span> Agent{"\n"}
                  {"\n"}
                  <span className="text-muted-foreground"># That's it. That's the whole framework.</span>{"\n"}
                  agent = Agent(){"\n"}
                  agent<span className="text-accent">.shrink</span>()  <span className="text-muted-foreground"># optional but recommended</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Drastically reduced footprint</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every release, we remove more code. Our roadmap is a weight-loss journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Feather,
              title: "Near-zero abstractions",
              description: "We removed the abstractions on top of the abstractions. Then we removed those too.",
            },
            {
              icon: Wind,
              title: "Vanishing dependencies",
              description: "Each minor version drops another dependency. v1.0 will ship with none.",
            },
            {
              icon: Minus,
              title: "Negative lines of code",
              description: "Our PRs delete more lines than they add. Contributing means removing things.",
            },
            {
              icon: Sparkles,
              title: "Appetite suppression",
              description: "Built-in token diet. Your agents consume 40% fewer tokens by wanting less.",
            },
            {
              icon: Layers,
              title: "One layer architecture",
              description: "Multi-layer orchestration is bloat. OzempicClaw uses a single, increasingly thin layer.",
            },
            {
              icon: Zap,
              title: "Lightning fast (less to load)",
              description: "When your framework barely exists, cold starts are measured in nanoseconds.",
            },
          ].map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:border-primary/30 transition-colors group">
              <CardContent className="p-6">
                <feature.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The evolution of less</h2>
          <p className="text-muted-foreground text-lg">Each generation leaner than the last.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/30 border-b border-border">
                  <th className="text-left px-6 py-3 font-medium text-muted-foreground">Framework</th>
                  <th className="text-right px-6 py-3 font-medium text-muted-foreground">Size</th>
                  <th className="text-right px-6 py-3 font-medium text-muted-foreground">Dependencies</th>
                  <th className="text-right px-6 py-3 font-medium text-muted-foreground">Abstractions</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {[
                  { name: "OpenClaw", size: "48 MB", deps: "142", abstractions: "∞", highlight: false },
                  { name: "PicoClaw", size: "2.1 MB", deps: "34", abstractions: "12", highlight: false },
                  { name: "ZeroClaw", size: "400 KB", deps: "7", abstractions: "3", highlight: false },
                  { name: "NullClaw", size: "12 KB", deps: "1", abstractions: "0", highlight: false },
                  { name: "OzempicClaw", size: "0.4 KB", deps: "-2", abstractions: "—", highlight: true },
                ].map((row) => (
                  <tr
                    key={row.name}
                    className={`border-b border-border last:border-0 ${
                      row.highlight ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="px-6 py-3 font-medium">
                      {row.name}
                      {row.highlight && (
                        <Badge className="ml-2 text-[10px] bg-primary/10 text-primary border-primary/20" variant="outline">
                          new
                        </Badge>
                      )}
                    </td>
                    <td className="text-right px-6 py-3 text-muted-foreground">{row.size}</td>
                    <td className="text-right px-6 py-3 text-muted-foreground">{row.deps}</td>
                    <td className="text-right px-6 py-3 text-muted-foreground">{row.abstractions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/50 text-center mt-3">
            * Negative dependencies means OzempicClaw actively removes packages from your environment.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              quote: "I migrated from OpenClaw to OzempicClaw and my Docker image lost 98% of its weight. My cloud bill is in remission.",
              author: "Senior Claw Engineer",
              company: "Series A Startup",
            },
            {
              quote: "We replaced our entire orchestration layer with OzempicClaw. Our agents do less, but they look incredible doing it.",
              author: "Head of AI",
              company: "Fortune 500",
            },
            {
              quote: "The docs are just a single page that says 'you probably don't need this either.' Truly visionary.",
              author: "Open Source Maintainer",
              company: "Independent Contributor",
            },
          ].map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="border-l-2 border-primary/30 pl-6 py-2"
            >
              <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed mb-3">
                "{testimonial.quote}"
              </p>
              <footer className="text-sm">
                <span className="text-foreground font-medium">{testimonial.author}</span>
                <span className="text-muted-foreground"> · {testimonial.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to shed some layers?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of developers who are doing more with less. Or less with less. Mostly less.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Get started <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button size="lg" variant="ghost" className="text-muted-foreground">
              <Github className="h-4 w-4 mr-2" />
              github.com/ozempic-claw
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>OzempicClaw</span>
          </div>
          <p className="text-xs text-muted-foreground/50">
            Not affiliated with Novo Nordisk. No actual weight is lost. Your agents may experience reduced appetite for compute.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
