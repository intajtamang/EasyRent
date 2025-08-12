import { useState } from 'react';
import { X, Send, Phone, Mail } from 'lucide-react';
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

  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Inquire About Property</DialogTitle>
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
                <span className="text-lg font-bold price-text">${property.price.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button variant="outline" className="h-12">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
          <Button variant="outline" className="h-12">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </div>

        {/* Contact Form */}
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
              placeholder="+1 (555) 123-4567"
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;