import { FormEvent, useMemo, useState } from 'react';
import { Award, CalendarDays, Check, ChevronRight, Clock3, Mail, MessageCircle, PencilLine, Phone, RefreshCcw, Search, Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/Layout';
import { onboardingAvailability, onboardingCallLength, tutoringContact } from '@/data/tutoring';

type CallSlot = {
  id: string;
  display: string;
};

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC',
}).format(date);

const getUpcomingSlots = (): CallSlot[] => {
  const slots: CallSlot[] = [];
  const ukParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const part = (type: Intl.DateTimeFormatPartTypes) => Number(ukParts.find((item) => item.type === type)?.value);
  const ukToday = new Date(Date.UTC(part('year'), part('month') - 1, part('day')));

  for (let offset = 1; offset <= 7; offset += 1) {
    const date = new Date(ukToday);
    date.setUTCDate(ukToday.getUTCDate() + offset);
    const day = onboardingAvailability.find((item) => item.day === date.getUTCDay());
    if (!day) continue;
    day.times.forEach((time) => {
      slots.push({ id: `${date.toISOString().slice(0, 10)}-${time}`, display: `${formatDate(date)} · ${time}` });
    });
  }
  return slots;
};

const Tutoring = () => {
  const slots = useMemo(getUpcomingSlots, []);
  const [selectedSlot, setSelectedSlot] = useState<CallSlot | null>(null);
  const [sent, setSent] = useState(false);

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const requestedSlot = selectedSlot ? `${selectedSlot.display} (UK time)` : 'No published slot selected — please see the parent’s preferred days/times below.';
    const body = [
      'Hello Kashyap,', '',
      `I would like to arrange a ${onboardingCallLength}-minute onboarding call about maths tutoring.`, '',
      `Parent/guardian: ${form.get('parentName')}`,
      `Email: ${form.get('email')}`,
      `Student: ${form.get('studentName')}`,
      `Level: ${form.get('level')}`,
      `Requested slot: ${requestedSlot}`,
      `Other days/times that work: ${form.get('alternatives') || 'Not provided'}`,
      `What would be most useful to discuss: ${form.get('message') || 'Not provided'}`,
      '', 'Please reply to confirm the call.',
    ].join('\n');
    const subject = `Tutoring onboarding call — ${form.get('studentName') || 'new enquiry'}`;
    window.location.href = `mailto:${tutoringContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Layout>
      <main className="workspace-page tutoring-page">
        <div className="page-kicker">tutoring.md</div>

        <section className="tutoring-hero tutoring-hero-compact">
          <div>
            <p className="panel-label premium-kicker"><Award size={14} aria-hidden="true" /> GCSE &amp; A-level maths</p>
            <h1 className="page-title">Premium maths tutoring that works.</h1>
            <p className="page-intro">
              I’m Kashyap, an Imperial Mathematics student with 150+ hours of tutoring experience. My tutoring is built around serious practice, with support that continues between lessons.
            </p>
            <div className="action-row">
              <a className="primary-action" href="#enquire">Book a short onboarding call <ChevronRight size={16} aria-hidden="true" /></a>
              <a className="secondary-action" href="#results">See student results</a>
            </div>
          </div>

          <aside className="workspace-panel proof-panel proof-panel-compact">
            <p className="panel-label">At a glance</p>
            <dl>
              <div><dt>150+</dt><dd>hours taught</dd></div>
              <div><dt>Imperial</dt><dd>Mathematics student</dd></div>
              <div><dt>A* A* A* A</dt><dd>A-level results</dd></div>
            </dl>
          </aside>
        </section>

        <section id="results" className="results-section" aria-labelledby="results-title">
          <div className="section-heading">
            <p className="panel-label">Results and references</p>
            <h2 id="results-title">Results that speak for themselves.</h2>
          </div>
          <div className="testimonial-grid">
            <blockquote className="testimonial testimonial-card">
              <p>“Kashyap has greatly improved my confidence with maths. I’ve noticed significant improvement in my ability and a titanic increase in marks from 20/80 to 60/80.”</p>
              <footer>— Oliver, GCSE student <span>Grade 4 → 7 in two months</span></footer>
            </blockquote>
            <blockquote className="testimonial testimonial-card">
              <p>“Kashyap has helped my son fast-track through the GCSE maths curriculum, covering all the topics needed. His exam advice has been invaluable, and he now feels much more confident and well prepared for his final exams.”</p>
              <footer>— Fran, parent</footer>
            </blockquote>
            <blockquote className="testimonial testimonial-card">
              <p>“Kashyap has a relaxed, peer-to-peer approach which has helped our son improve his confidence. The lessons have translated into better results at school. We would definitely recommend Kashyap.”</p>
              <footer>— Payal, parent</footer>
            </blockquote>
          </div>
        </section>

        <section className="how-it-works" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="panel-label">The approach</p>
            <h2 id="approach-title">Simple, structured, and hard to drift away from.</h2>
          </div>
          <ol className="approach-grid">
            <li className="workspace-panel"><span className="approach-icon"><Search size={18} aria-hidden="true" /><span>01</span></span><h3>Find the gap</h3><p>Work out the exact step that is unclear, rather than just doing more of the same worksheet.</p></li>
            <li className="workspace-panel"><span className="approach-icon"><PencilLine size={18} aria-hidden="true" /><span>02</span></span><h3>Learn and practise</h3><p>Explain the method clearly, then use guided questions until it starts to feel natural.</p></li>
            <li className="workspace-panel"><span className="approach-icon"><RefreshCcw size={18} aria-hidden="true" /><span>03</span></span><h3>Keep it moving</h3><p>Homework is marked and revisited so each topic still holds up later in the course.</p></li>
          </ol>
        </section>

        <section id="fees" className="support-section" aria-labelledby="support-title">
          <div className="support-copy">
            <p className="panel-label">Fees and support</p>
            <h2 id="support-title">The fee covers more than the lesson.</h2>
            <p>Each hour comes with the preparation and follow-up needed to make it count.</p>
            <ul className="feature-list">
              <li>Homework set after each lesson and marked with feedback</li>
              <li>Progress tracked against a revision plan, with older topics revisited</li>
              <li>Questions answered between lessons and past papers marked when needed</li>
            </ul>
          </div>
          <div className="fee-cards">
            <article className="workspace-panel fee-card"><p className="panel-label">GCSE</p><p className="fee-price">£45 <span>per hour</span></p></article>
            <article className="workspace-panel fee-card"><p className="panel-label">A-level</p><p className="fee-price">£50 <span>per hour</span></p></article>
          </div>
        </section>

        <section id="enquire" className="booking-section" aria-labelledby="booking-title">
          <div className="booking-heading">
            <p className="panel-label">Next step</p>
            <h2 id="booking-title">Book a short onboarding call</h2>
            <p>Choose a time and share the basics. I’ll reply to confirm.</p>
          </div>

          <div className="booking-layout">
            <div className="slot-picker" aria-label="Available onboarding call slots">
              <div className="slot-picker-heading"><CalendarDays size={18} aria-hidden="true" /><span>Available over the next week — UK time</span></div>
              <div className="slot-list">
                {slots.map((slot) => (
                  <button key={slot.id} type="button" onClick={() => setSelectedSlot(slot)} className={`slot-button ${selectedSlot?.id === slot.id ? 'slot-button-selected' : ''}`} aria-pressed={selectedSlot?.id === slot.id}>
                    <Clock3 size={15} aria-hidden="true" />{slot.display}{selectedSlot?.id === slot.id && <Check size={15} aria-label="Selected" />}
                  </button>
                ))}
              </div>
              <p className="availability-note">Weekday calls are at 6pm; weekend calls run through the afternoon. If none fit, add alternatives below.</p>
            </div>

            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-row">
                <label>Parent/guardian name<input name="parentName" required autoComplete="name" /></label>
                <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
              </div>
              <div className="form-row">
                <label>Student’s first name<input name="studentName" required /></label>
                <label>Level<select name="level" defaultValue="" required><option value="" disabled>Select level</option><option>GCSE</option><option>A-level Mathematics</option><option>A-level Further Mathematics</option><option>Not sure yet</option></select></label>
              </div>
              <label>Other days or times that work for you<textarea name="alternatives" rows={2} placeholder="For example: Tuesday at 6pm, or Sunday after 3pm" /></label>
              <label>Anything useful for me to know?<textarea name="message" rows={3} placeholder="Topics, upcoming exams, or what has been difficult so far" /></label>
              <button className="primary-action submit-action" type="submit"><Send size={15} aria-hidden="true" /> Send booking request</button>
              {sent && <p className="form-success" role="status">Your email app should now be open with the request filled in. Send it, and I’ll confirm the call by reply.</p>}
            </form>
          </div>
        </section>

        <section className="contact-strip" aria-label="Contact Kashyap">
          <div><Mail size={18} aria-hidden="true" /><a href={`mailto:${tutoringContact.email}`}>{tutoringContact.email}</a></div>
          <div><Phone size={18} aria-hidden="true" /><a href={tutoringContact.phoneHref}>{tutoringContact.phoneDisplay}</a></div>
          <div><MessageCircle size={18} aria-hidden="true" /><span>Prefer a message? Email is the quickest way to get started.</span></div>
        </section>

        <Accordion type="single" collapsible className="faq-list">
          <AccordionItem value="first-call"><AccordionTrigger>What happens in the onboarding call?</AccordionTrigger><AccordionContent>It is a relaxed {onboardingCallLength}-minute conversation with a parent or guardian. We will talk through the student’s goals, current experience, and whether I am the right fit.</AccordionContent></AccordionItem>
          <AccordionItem value="format"><AccordionTrigger>Can we discuss lesson format and frequency?</AccordionTrigger><AccordionContent>Yes. We can talk through online or in-person lessons, frequency, and what a useful revision plan would look like before anything is booked.</AccordionContent></AccordionItem>
        </Accordion>
      </main>
    </Layout>
  );
};

export default Tutoring;
