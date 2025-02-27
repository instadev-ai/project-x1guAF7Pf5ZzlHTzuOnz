import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="font-bold text-xl">TechInsider</div>
        <Button variant="ghost">About</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Stay Ahead of the Tech Curve
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
          Get the latest tech insights, trends, and innovations delivered straight to your inbox weekly.
        </p>

        {/* Newsletter Signup */}
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base"
            />
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Signing up..." : "Subscribe Now"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Subscribe?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Cutting-Edge Insights" 
            description="Get exclusive analysis on emerging technologies and industry trends."
            icon="💡"
          />
          <FeatureCard 
            title="Weekly Curated Content" 
            description="Carefully selected articles, tutorials, and resources delivered weekly."
            icon="📚"
          />
          <FeatureCard 
            title="Tech Community" 
            description="Join thousands of tech enthusiasts and professionals."
            icon="🌐"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Subscribers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="This newsletter has become my go-to source for staying updated with tech trends. Highly recommended!"
              author="Alex Johnson"
              role="Software Engineer"
            />
            <TestimonialCard 
              quote="The insights I get from this newsletter have been invaluable for my career growth in tech."
              author="Sarah Chen"
              role="Product Manager"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stay Informed?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of tech professionals who get our weekly insights.
        </p>
        <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Subscribe Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl mb-2">TechInsider</div>
              <p className="text-slate-400">Your weekly dose of tech insights</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} TechInsider. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <p className="italic mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default Index;