import { FormEvent, useMemo, useState } from 'react';
import { CalendarDays, Check, ChevronRight, Clock3, Mail, MessageCircle, Phone, Send } from 'lucide-react';
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
      slots.push({
        id: `${date.toISOString().slice(0, 10)}-${time}`,
        display: `${formatDate(date)} · ${time}`,
      });
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
    const requestedSlot = selectedSlot
      ? `${selectedSlot.display} (UK time)`
      : 'No published slot selected — please see the parent’s preferred days/times below.';
    const body = [
      'Hello Kashyap,',
      '',
      `I would like to arrange a ${onboardingCallLength}-minute onboarding call about maths tutoring.`,
      '',
      `Parent/guardian: ${form.get('parentName')}`,
      `Email: ${form.get('email')}`,
      `Student: ${form.get('studentName')}`,
      `Level: ${form.get('level')}`,
      `Requested slot: ${requestedSlot}`,
      `Other days/times that work: ${form.get('alternatives') || 'Not provided'}`,
      `What would be most useful to discuss: ${form.get('message') || 'Not provided'}`,
      '',
      'Please reply to confirm the call.',
    ].join('\n');
    const subject = `Tutoring onboarding call — ${form.get('studentName') || 'new enquiry'}`;
    window.location.href = `mailto:${tutoringContact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Layout>
      <main className="workspace-page tutoring-page">
        <div className="page-kicker">tutoring.md</div>

        <section className="tutoring-hero">
          <div>
            <p className="panel-label">GCSE &amp; A-level maths</p>
            <h1 className="page-title">Maths tutoring built around practice.</h1>
            <p className="page-intro">
              I’m Kashyap, a Mathematics student at Imperial College London. In my experience, the only reliable way to get better at maths is to understand an idea, then practise it properly—until it feels normal in an exam.
            </p>
            <a className="primary-action" href="#enquire">
              Book an onboarding call <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>

          <aside className="workspace-panel proof-panel">
            <p className="panel-label">Why work with me</p>
            <dl>
              <div><dt>150+</dt><dd>hours taught</dd></div>
              <div><dt>Imperial</dt><dd>Mathematics student</dd></div>
              <div><dt>A* A* A* A</dt><dd>A-level results</dd></div>
            </dl>
            <p className="proof-note">I’m close enough to the process to explain things differently from school, but experienced enough to know where students usually get stuck.</p>
          </aside>
        </section>

        <section className="tutoring-grid" aria-label="Tutoring details">
          <article className="workspace-panel">
            <h2>How lessons work</h2>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div><strong>Find the gap</strong><p>We start with the exact step that has stopped making sense, rather than just working through another worksheet.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><strong>Explain, then practise</strong><p>I explain the method clearly and we work through guided examples together until the student can start to own it.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><strong>Leave with practice</strong><p>There is always homework. I set it to reinforce what we have done, expect it to be completed, and mark it before the next lesson.</p></div>
              </li>
            </ol>
          </article>

          <article className="workspace-panel">
            <h2>A proper revision structure</h2>
            <p>I bring a plan, but it is built with the student rather than imposed on them.</p>
            <ul className="feature-list">
              <li>Work through the whole course with a clear sense of what is done and what is next</li>
              <li>Revisit topics so that earlier work is not forgotten</li>
              <li>Spend longer on difficult topics instead of rushing to the next chapter</li>
              <li>Use past-paper questions regularly, not just at the very end</li>
            </ul>
            <p className="panel-note">The aim is simple: by the exam, the student knows they have covered everything properly and has practised the questions that matter.</p>
          </article>
        </section>

        <section id="fees" className="fee-section" aria-labelledby="fee-title">
          <div>
            <p className="panel-label">Fees</p>
            <h2 id="fee-title">You are paying for more than the hour.</h2>
            <p>The lesson is the centre of the work, but it should not be the only work that happens that week.</p>
          </div>
          <div className="fee-cards">
            <article className="workspace-panel fee-card">
              <p className="panel-label">GCSE</p>
              <p className="fee-price">£45 <span>per hour</span></p>
            </article>
            <article className="workspace-panel fee-card">
              <p className="panel-label">A-level</p>
              <p className="fee-price">£50 <span>per hour</span></p>
            </article>
          </div>
          <article className="workspace-panel included-panel">
            <h3>Included in the fee</h3>
            <ul className="feature-list">
              <li>Carefully chosen homework after each lesson, marked with feedback</li>
              <li>Ongoing tracking of progress and a revision plan that changes as needed</li>
              <li>Questions between lessons when a student gets stuck</li>
              <li>Past papers marked whenever a student needs them looked at</li>
            </ul>
          </article>
        </section>

        <blockquote className="testimonial">
          <p>“Kashyap has a relaxed, peer-to-peer approach which has helped our son improve his confidence with the subject. The lessons have translated into better results at school. We would definitely recommend Kashyap.”</p>
          <footer>— Parent of a tutoring student</footer>
        </blockquote>

        <section id="enquire" className="booking-section" aria-labelledby="booking-title">
          <div className="booking-heading">
            <p className="panel-label">Start here</p>
            <h2 id="booking-title">Book a short onboarding call</h2>
            <p>Choose a time that works, then tell me a little about the student. I’ll reply to confirm the call.</p>
          </div>

          <div className="booking-layout">
            <div className="slot-picker" aria-label="Available onboarding call slots">
              <div className="slot-picker-heading"><CalendarDays size={18} aria-hidden="true" /><span>Available over the next week — UK time</span></div>
              <div className="slot-list">
                {slots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`slot-button ${selectedSlot?.id === slot.id ? 'slot-button-selected' : ''}`}
                    aria-pressed={selectedSlot?.id === slot.id}
                  >
                    <Clock3 size={15} aria-hidden="true" />
                    {slot.display}
                    {selectedSlot?.id === slot.id && <Check size={15} aria-label="Selected" />}
                  </button>
                ))}
              </div>
              <p className="availability-note">Weekday calls are at 6pm; weekend calls run through the afternoon. If none of these work, add alternatives below.</p>
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
          <AccordionItem value="fees"><AccordionTrigger>What does the hourly fee include?</AccordionTrigger><AccordionContent>The rates are £45 an hour for GCSE and £50 an hour for A-level. They include the lesson, homework setting and marking, progress tracking, support with questions between lessons, and marking past papers when needed.</AccordionContent></AccordionItem>
          <AccordionItem value="format"><AccordionTrigger>Can we discuss lesson format and frequency?</AccordionTrigger><AccordionContent>Yes. We can talk through online or in-person lessons, frequency, and what a useful revision plan would look like before anything is booked.</AccordionContent></AccordionItem>
        </Accordion>
      </main>
    </Layout>
  );
};

export default Tutoring;
