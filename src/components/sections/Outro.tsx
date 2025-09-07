import React from 'react';

interface OutroProps {
  className?: string;
}

export default function Outro({ className = '' }: OutroProps) {
  return (
    <section className={`outro ${className}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Start a Project
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
