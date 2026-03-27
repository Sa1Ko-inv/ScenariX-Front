import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Dashboard</h1>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-slate-600">
            Welcome to your ScenariX Dashboard. This is the place where your AI-generated content activities will be managed.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h3 className="font-semibold text-blue-900">Scraping</h3>
              <p className="text-sm text-blue-700 mt-1">Configure your content sources.</p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <h3 className="font-semibold text-purple-900">AI Generation</h3>
              <p className="text-sm text-purple-700 mt-1">Manage processing pipeline.</p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <h3 className="font-semibold text-emerald-900">Posting</h3>
              <p className="text-sm text-emerald-700 mt-1">Review and publish content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
