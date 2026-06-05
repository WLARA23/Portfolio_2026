import { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { ContactInfoItem } from '../molecules/SocialIcon';
import { contactSocials } from '../../data';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', lastname: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name:     form.name,
        lastname: form.lastname,
        email:    form.email,
        message:  form.message,
      }).toString(),
    })
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: '', lastname: '', email: '', message: '' });
      })
      .catch(() => setError(true));
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left – Info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-dark text-sm font-bold tracking-[0.2em] uppercase mb-1">
                Get In Touch
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-primary leading-tight">
                Let's Create
                <br />
                Together
              </h2>
            </div>

            <p className="text-body leading-relaxed">
              Are you looking for the ideal collaborator? Reach out to me.
              I'm available for freelance projects and full-time opportunities.
            </p>

            <div className="flex flex-col gap-5">
              {contactSocials.map((s) => (
                <ContactInfoItem key={s.platform} platform={s.platform} url={s.url} label={s.label} />
              ))}
            </div>
          </div>

          {/* Right – Form */}
          <form
            onSubmit={handleSubmit}
            name="contact"
            {...({ netlify: '' } as object)}
            className="bg-surface-alt rounded-2xl p-8 flex flex-col gap-5 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="name"
                name="name"
                label="Name *"
                placeholder="John"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                id="lastname"
                name="lastname"
                label="Lastname *"
                placeholder="Doe"
                value={form.lastname}
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                required
              />
            </div>

            <Input
              id="email"
              name="email"
              label="Email *"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <Textarea
              id="message"
              name="message"
              label="Message *"
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            {error && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <Button type="submit" variant="primary" size="md" fullWidth>
              {sent ? <CheckIcon /> : <SendIcon />}
              {sent ? 'Message Sent!' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
