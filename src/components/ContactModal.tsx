import { useState } from 'react';
import { X, Send, Phone, Mail, MessageCircle, MapPin, Clock, Globe } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Property } from '@/data/properties';

interface ContactModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ property, isOpen, onClose }: ContactModalProps) => {
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
    
    toast({
      title: "Inquiry Sent!",
      description: `Thank you for your interest in ${property?.title}. We'll contact you within 24 hours.`,
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
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
        const message = `Hi! I'm interested in ${property?.title} at ${property?.address}, ${property?.city}. Can you provide more details?`;
        window.open(`https://wa.me/${value.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'email':
        const subject = `Inquiry about ${property?.title}`;
        const body = `Hi,\n\nI'm interested in ${property?.title} at ${property?.address}, ${property?.city}.\n\nPrice: ₹${property?.price.toLocaleString()}/month\n\nPlease provide more details.\n\nBest regards,\n[Your Name]`;
        window.open(`mailto:${value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
        break;
      case 'website':
        window.open(`https://${value}`, '_blank');
        break;
    }
  };

  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Contact Us About This Property</DialogTitle>
        </DialogHeader>
        
        {/* Property Info */}
        <div className="border rounded-lg p-4 mb-6">
          <div className="flex gap-4">
            <img 
              src={property.imageUrl} 
              alt={property.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p className="text-muted-foreground text-sm">{property.address}, {property.city}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary">{property.type}</Badge>
                <span className="text-lg font-bold price-text">₹{property.price.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Button 
            variant="outline" 
            className="h-12 flex-col"
            onClick={() => handleDirectContact('phone', contactInfo.phone)}
          >
            <Phone className="h-4 w-4 mb-1" />
            <span className="text-xs">Call Now</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-12 flex-col"
            onClick={() => handleDirectContact('whatsapp', contactInfo.whatsapp)}
          >
            <MessageCircle className="h-4 w-4 mb-1" />
            <span className="text-xs">WhatsApp</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-12 flex-col"
            onClick={() => handleDirectContact('email', contactInfo.email)}
          >
            <Mail className="h-4 w-4 mb-1" />
            <span className="text-xs">Email</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-12 flex-col"
            onClick={() => handleDirectContact('website', contactInfo.website)}
          >
            <Globe className="h-4 w-4 mb-1" />
            <span className="text-xs">Website</span>
          </Button>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Column - Contact Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="font-medium">{contactInfo.phone}</p>
                  <p className="text-sm text-muted-foreground">Main Office</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <div>
                  <p className="font-medium">{contactInfo.whatsapp}</p>
                  <p className="text-sm text-muted-foreground">WhatsApp Business</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="font-medium">{contactInfo.email}</p>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-red-600" />
                <div>
                  <p className="font-medium">{contactInfo.address}</p>
                  <p className="text-sm text-muted-foreground">Visit Our Office</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-orange-600" />
                <div>
                  <p className="font-medium">{contactInfo.hours}</p>
                  <p className="text-sm text-muted-foreground">Business Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium mb-1">
                    Name *
                  </label>
                  <Input
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <Input
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input
                  id="modal-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+977-98XXXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <Textarea
                  id="modal-message"
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="I'm interested in this property. Please provide more details..."
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  <Send className="h-4 w-4 mr-2" />
                  Send Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;