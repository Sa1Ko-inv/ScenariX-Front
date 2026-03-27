import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ScenariX</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Dashboard
          </a>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
            Getting Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Automate Your Content <br />
          <span className="text-indigo-600">With AI Intelligence</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          The all-in-one platform for professional content creators. Scraping, AI analysis, and automated posting in one seamless workflow.
        </p>

        {/* URL Input Area */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col md:flex-row gap-3 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl">
            <input 
              type="text" 
              placeholder="Paste a link to generate content..." 
              className="flex-1 px-6 py-4 rounded-xl text-lg outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-[0.98]">
              Generate
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Powered by ScenariX Engine. Supports YouTube, Articles, and Blogs.
          </p>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 py-12">
        {['Smart Scraping', 'AI Content DNA', 'Seamless Multi-Post', 'Deep Analytics'].map((feature) => (
          <div key={feature} className="flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 font-medium text-sm">
            {feature}
          </div>
        ))}
      </div>
    </main>
  );
}
