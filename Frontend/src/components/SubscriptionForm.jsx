import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'basic'
  });

  const navigate = useNavigate(); 


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleBoxClick = () => {
    navigate('/'); 
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl border border-white/20 transition-all duration-300 hover:shadow-3xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Subscription Plans
          </h1>
          <p className="text-lg text-blue-100/90 font-light">
            Get started with our flexible subscription options
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">


          <div className="space-y-3">
            <label className="block text-blue-100 text-lg font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-blue-100 placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>


          <div className="space-y-3">
            <label className="block text-blue-100 text-lg font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-blue-100 placeholder-blue-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-3">
            <label className="block text-blue-100 text-lg font-medium">Select Plan</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['basic', 'premium', 'pro'].map((plan) => (
                <div
                  key={plan}
                  onClick={() => setFormData({ ...formData, plan })}
                  className={`p-4 md:p-6 cursor-pointer rounded-xl border-2 transition-all ${formData.plan === plan
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-white/20 hover:border-cyan-400/40'
                    }`}
                >
                  <h3 className="text-xl font-bold text-blue-100 capitalize">{plan}</h3>
                  <div className="mt-3">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${plan === 'basic' ? 5 : plan === 'premium' ? 10 : 15}
                    </span>
                    <span className="text-blue-200 ml-2">/month</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
            onClick={() => handleBoxClick()}
          >
            Start Free Trial
          </button>
        </form>

        <p className="text-center text-blue-200/80 mt-8 text-sm">
          7-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
}