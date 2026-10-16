"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setSuccessMessage(result.message);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        inquiryType: "General Inquiry",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. You can also email us directly at info@hubani.org."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-10">
      {/* Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-500">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-neutral-900 font-medium">Contact &amp; Inquiries</span>
      </nav>

      {/* Header */}
      <header className="border-b border-neutral-200 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-800">
          <span>Corporate Inquiries · Executive Secretariat</span>
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-neutral-950">
          Contact Hubani Limited
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-neutral-700 leading-relaxed">
          For business partnerships, cinematic synchronization inquiries, data
          telemetry collaborations, tournament operations (BOTYA), or general corporate
          governance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form Container (2 cols) */}
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="rounded border border-neutral-300 bg-white p-5 sm:p-7 shadow-xs space-y-5"
          >
            <div className="border-b border-neutral-200 pb-3">
              <h2 className="text-base font-semibold text-neutral-950">
                Send an Official Inquiry
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                All inquiries receive an automated confirmation receipt and are reviewed by our secretariat.
              </p>
            </div>

            {successMessage && (
              <div className="rounded border border-emerald-300 bg-emerald-50 p-4 text-xs text-emerald-900 space-y-1">
                <p className="font-semibold text-emerald-950 flex items-center gap-1.5">
                  <span>✓</span> {successMessage}
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="rounded border border-red-300 bg-red-50 p-4 text-xs text-red-900">
                <span className="font-semibold">Error:</span> {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Elena Rostova"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Work / Personal Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="organization"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Organization / Company (Optional)
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="e.g. Media Agency or Enterprise"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="inquiryType"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Inquiry Nature / Division <span className="text-red-600">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-black focus:outline-none transition-colors"
                >
                  <option value="General Inquiry">General Corporate Inquiry</option>
                  <option value="Business & Partnerships">Commercial Partnerships</option>
                  <option value="Cinematic Music Publishing">Cinematic Music &amp; Synchronization</option>
                  <option value="Data Telemetry Software">Data Telemetry Software Systems</option>
                  <option value="BOTYA League">BOTYA Tournament Operations</option>
                  <option value="Corporate Governance">Corporate Governance &amp; Legal</option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-neutral-900"
                >
                  Subject Line <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Partnership Opportunity"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-neutral-900"
              >
                Inquiry Details / Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Provide comprehensive details regarding your inquiry, objectives, and any relevant deadlines..."
                className="w-full rounded border border-neutral-300 bg-white p-3 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors leading-relaxed"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded bg-black px-6 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors shadow-xs"
              >
                {isSubmitting ? (
                  <span>Transmitting Inquiry...</span>
                ) : (
                  <span>Submit Inquiry to Hubani</span>
                )}
              </button>

              <span className="text-[11px] text-neutral-500">
                A confirmation email is sent automatically to your inbox.
              </span>
            </div>
          </form>
        </div>

        {/* Sidebar Info (1 col) */}
        <aside className="space-y-4">
          <div className="rounded border border-neutral-200 bg-neutral-50/50 p-4 space-y-3 text-xs text-neutral-600">
            <h3 className="text-xs font-semibold text-neutral-950 uppercase tracking-wider">
              Secretariat Details
            </h3>

            <div className="space-y-1">
              <span className="font-semibold text-neutral-900 block">General Inquiries:</span>
              <a href="mailto:info@hubani.org" className="underline font-mono text-neutral-900">
                info@hubani.org
              </a>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-neutral-900 block">Recruitment &amp; Careers:</span>
              <a href="mailto:careers@hubani.org" className="underline font-mono text-neutral-900">
                careers@hubani.org
              </a>
              <p className="text-[11px] text-neutral-500">
                Looking for open positions? Visit{" "}
                <a href="https://careers.hubani.org" className="underline font-semibold text-black">
                  Careers Hub
                </a>
              </p>
            </div>

            <div className="space-y-1 pt-2 border-t border-neutral-200">
              <span className="font-semibold text-neutral-900 block">Headquarters:</span>
              <span>Mombasa, Kenya</span>
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-neutral-900 block">Turnaround Cadence:</span>
              <span>Inquiries are reviewed within 1-2 corporate business days.</span>
            </div>
          </div>

          <div className="rounded border border-neutral-200 bg-white p-4 text-xs text-neutral-600 space-y-2">
            <h3 className="text-xs font-semibold text-neutral-950">
              Careers Hub
            </h3>
            <p className="text-[11px] leading-relaxed">
              If your message is an application for our open executive or engineering positions, please submit directly on the Careers Hub.
            </p>
            <a
              href="https://careers.hubani.org"
              className="inline-flex items-center gap-1 rounded bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors"
            >
              <span>Go to Careers Hub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
