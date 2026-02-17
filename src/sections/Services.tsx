import { 
  Bot, 
  Server, 
  Brain, 
  Monitor, 
  Workflow, 
  Gamepad2, 
  Globe, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Discord Bots',
    description: 'Custom Discord bots with advanced features, moderation tools, automation, and interactive commands tailored to your community needs.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Server,
    title: 'Backend Services',
    description: 'Robust backend architectures, APIs, and database solutions designed for scalability, performance, and security.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI-Assisted Tooling',
    description: 'Intelligent automation tools powered by AI to streamline workflows, analyze data, and enhance productivity.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Cross-platform desktop apps with modern UI/UX, built for Windows, macOS, and Linux using cutting-edge frameworks.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Workflow,
    title: 'Custom Automation',
    description: 'End-to-end automation solutions that eliminate repetitive tasks and optimize your business processes.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Gamepad2,
    title: 'Game Systems (Roblox)',
    description: 'Advanced game systems, plugins, and infrastructure for Roblox with focus on performance and player experience.',
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Full-stack web applications with responsive design, real-time features, and seamless user experiences.',
    color: 'from-sky-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    description: 'Security-first architecture design with encryption, authentication, and best practices for data protection.',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <span className="text-sm text-blue-300 font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to deployment, we deliver comprehensive software solutions 
            tailored to your unique requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
