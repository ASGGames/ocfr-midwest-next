import { ExternalLink, Youtube, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Discord Bot Systems',
    category: 'Automation',
    description: 'Advanced Discord bots with moderation, ticketing, and custom command systems for gaming communities.',
    icon: Gamepad2,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Roblox Game Infrastructure',
    category: 'Game Development',
    description: 'Custom game systems, admin panels, and backend services for popular Roblox experiences.',
    icon: Gamepad2,
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    title: 'Web Dashboard Platform',
    category: 'Web Application',
    description: 'Real-time analytics dashboards with data visualization and user management features.',
    icon: ExternalLink,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI Automation Tools',
    category: 'AI Integration',
    description: 'Intelligent automation solutions that leverage AI to optimize business workflows.',
    icon: ExternalLink,
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-sm text-cyan-300 font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore some of our recent work and see how we help clients achieve their goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white mb-3`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-900/10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Youtube className="w-8 h-8 text-red-500" />
                <span className="text-red-400 font-semibold">@OCFRPhoenixDevelopment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Watch Our Development Process
              </h3>
              <p className="text-gray-400">
                See livestreams, tutorials, and behind-the-scenes content on our YouTube channel.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shrink-0"
              onClick={() => window.open('https://www.youtube.com/@OCFRPhoenixDevelopment', '_blank')}
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
