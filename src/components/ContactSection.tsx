import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, Building } from 'lucide-react';
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

  // Contact information
  const contactInfo = {
    phone: '+977-1-4XXXXXX',
    whatsapp: '+977-98XXXXXXX',
    email: 'info@easyrentnepal.com',
    address: 'Thamel, Kathmandu, Nepal',
    hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
    website: 'www.easyrentnepal.com'
  };

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

  const handleDirectContact = (method: string, value: string) => {
    switch (method) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'whatsapp':
        const message = `Hi! I'm interested in finding a rental property in Nepal. Can you help me?`;
        window.open(`https://wa.me/${value.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'email':
        const subject = `Inquiry about rental properties in Nepal`;
        const body = `Hi,\n\nI'm interested in finding a rental property in Nepal.\n\nPlease provide more details about available properties.\n\nBest regards,\n[Your Name]`;
        window.open(`mailto:${value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
        break;
      case 'website':
        window.open(`https://${value}`, '_blank');
        break;
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our properties in Nepal? Ready to schedule a viewing? 
              We're here to help you find your perfect rental home in the heart of the Himalayas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleDirectContact('phone', contactInfo.phone)}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">Mon-Sat 9AM-6PM</p>
                  <p className="font-semibold text-lg">{contactInfo.phone}</p>
                  <p className="text-xs text-primary mt-2">Click to call</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleDirectContact('whatsapp', contactInfo.whatsapp)}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">24/7 Support</p>
                  <p className="font-semibold">{contactInfo.whatsapp}</p>
                  <p className="text-xs text-green-600 mt-2">Click to chat</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleDirectContact('email', contactInfo.email)}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">We reply within 24h</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                  <p className="text-xs text-blue-600 mt-2">Click to email</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleDirectContact('website', contactInfo.website)}>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Visit Website</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">More information</p>
                  <p className="font-semibold">{contactInfo.website}</p>
                  <p className="text-xs text-purple-600 mt-2">Click to visit</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">
                    {contactInfo.address}
                  </p>
                  <p className="text-xs text-orange-600 mt-2">Business Hours: {contactInfo.hours}</p>
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
                        placeholder="+977-98XXXXXXX"
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
                        placeholder="Tell us about your housing needs, preferred location in Nepal, budget, move-in date, etc."
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
                <h4 className="font-semibold mb-2">How do I schedule a property viewing in Nepal?</h4>
                <p className="text-muted-foreground text-sm">
                  Contact us through the form above, call us directly, or message us on WhatsApp. We'll arrange a convenient time for you to view the property.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What documents do I need to apply for a rental in Nepal?</h4>
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
                <h4 className="font-semibold mb-2">How quickly can I move into a property in Nepal?</h4>
                <p className="text-muted-foreground text-sm">
                  Once approved, most tenants can move in within 1-2 weeks. Emergency rentals may be accommodated faster.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you offer properties in all major cities in Nepal?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes! We have properties across major cities including Kathmandu, Pokhara, Lalitpur, Bhaktapur, and many more locations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept for rent?</h4>
                <p className="text-muted-foreground text-sm">
                  We accept various payment methods including bank transfers, digital wallets, and cash payments in Nepali Rupees.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is ready to help you find your perfect home in Nepal. 
                Contact us through any of these methods for quick response.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => handleDirectContact('phone', contactInfo.phone)}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => handleDirectContact('whatsapp', contactInfo.whatsapp)}
                  className="bg-green-600 text-white hover:bg-green-700"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => handleDirectContact('email', contactInfo.email)}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Floating Contact Button Component
export const FloatingContactButton = () => {
  const contactInfo = {
    phone: '+977-1-4XXXXXX',
    whatsapp: '+977-98XXXXXXX',
    email: 'info@easyrentnepal.com'
  };

  const handleDirectContact = (method: string, value: string) => {
    switch (method) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'whatsapp':
        const message = `Hi! I'm interested in finding a rental property in Nepal. Can you help me?`;
        window.open(`https://wa.me/${value.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'email':
        const subject = `Inquiry about rental properties in Nepal`;
        const body = `Hi,\n\nI'm interested in finding a rental property in Nepal.\n\nPlease provide more details about available properties.\n\nBest regards,\n[Your Name]`;
        window.open(`mailto:${value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        {/* WhatsApp Button */}
        <Button
          onClick={() => handleDirectContact('whatsapp', contactInfo.whatsapp)}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        {/* Phone Button */}
        <Button
          onClick={() => handleDirectContact('phone', contactInfo.phone)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <Phone className="h-6 w-6" />
        </Button>
        
        {/* Email Button */}
        <Button
          onClick={() => handleDirectContact('email', contactInfo.email)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <Mail className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};