'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackEvent('submit', 'contact_form', 'backup_contact');

    try {
      // Replace with your form handling service (Formspree, Netlify Forms, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <h3 className="mb-2 text-xl font-bold text-green-800">Message Sent!</h3>
        <p className="text-green-700">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
      />

      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        required
        className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
      >
        <option value="">Select Service</option>
        <option value="haircut">Haircut - £15</option>
        <option value="skin-fade">Skin Fade - £18</option>
        <option value="kids-cut">Kids Cut - £13</option>
        <option value="other">Other</option>
      </select>

      <textarea
        placeholder="Additional Message (Optional)"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={4}
        className="w-full rounded border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center rounded bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" color="white" />
            <span className="ml-2">Sending...</span>
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-gray-500">
        For fastest service, we recommend booking directly through Booksy above.
      </p>
    </form>
  );
}
