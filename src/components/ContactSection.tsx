import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our properties? Ready to schedule a viewing? 
              We're here to help you find your perfect rental home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">Mon-Fri 9AM-6PM</p>
                  <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">We reply within 24h</p>
                  <p className="font-semibold">hello@easyrent.com</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">
                    123 Real Estate Ave<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Tell us about your housing needs, preferred location, budget, move-in date, etc."
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full hover:scale-105 transition-transform"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">How do I schedule a property viewing?</h4>
                <p className="text-muted-foreground text-sm">
                  Contact us through the form above or call us directly. We'll arrange a convenient time for you to view the property.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What documents do I need to apply?</h4>
                <p className="text-muted-foreground text-sm">
                  Typically, you'll need ID, proof of income, references, and a security deposit. We'll provide a complete list when you apply.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Are pets allowed in your properties?</h4>
                <p className="text-muted-foreground text-sm">
                  Many of our properties are pet-friendly! Look for the "Pet Friendly" amenity tag or ask us about specific pet policies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How quickly can I move in?</h4>
                <p className="text-muted-foreground text-sm">
                  Once approved, most tenants can move in within 1-2 weeks. Emergency rentals may be accommodated faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;