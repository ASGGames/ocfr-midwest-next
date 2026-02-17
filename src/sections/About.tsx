import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every line of code is crafted with attention to detail and best practices.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver modern solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to understand and exceed their expectations.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimized solutions that scale and perform under any load.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <span className="text-sm text-purple-300 font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Building <span className="text-gradient">Digital Excellence</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              OCFR Midwest Technology is a software development company based in the heart of the Midwest. 
              We specialize in creating custom-built systems, automation tools, and internal platforms 
              that help businesses and communities thrive in the digital age.
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our focus is on delivering secure, scalable, and maintainable solutions. Whether you need 
              a Discord bot for your community, a backend service for your application, or AI-assisted 
              tooling to streamline your workflows, we have the expertise to bring your vision to life.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-gray-300">Secure Architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-gray-300">Scalable Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-gray-300">Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <span className="text-gray-300">Ongoing Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
