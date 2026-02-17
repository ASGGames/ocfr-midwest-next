import { Phone, MapPin, Youtube, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (573) 435-4243',
    description: 'Call us Monday-Friday, 9 AM - 5 PM CST',
    href: 'tel:+15734354243',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Youtube,
    title: 'YouTube',
    value: '@OCFRPhoenixDevelopment',
    description: 'Watch our development content and tutorials',
    href: 'https://www.youtube.com/@OCFRPhoenixDevelopment',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: ExternalLink,
    title: 'Twitch',
    value: 'absolutegaming328',
    description: 'Join our live development streams',
    href: 'https://www.twitch.tv/absolutegaming328',
    color: 'from-purple-500 to-violet-500'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your project? Reach out and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => window.open(method.href, '_blank')}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{method.value}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start Your Project Today
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Whether you need a custom Discord bot, a Roblox game system, or a complete web application, 
              we're ready to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold glow-blue"
                onClick={() => window.open('tel:+15734354243', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => window.open('https://www.youtube.com/@OCFRPhoenixDevelopment', '_blank')}
              >
                <Youtube className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Serving clients across the Midwest and beyond</span>
          </div>
        </div>
      </div>
    </section>
  );
}
