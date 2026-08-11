import { FormEvent, useMemo, useState } from 'react';
import { CalendarDays, Check, ChevronRight, Clock3, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/Layout';
import { onboardingAvailability, onboardingCallLength, tutoringContact } from '@/data/tutoring';

type CallSlot = {
  id: string;
  display: string;
  date: string;
  time: string;
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

  for (let offset = 1; offset <= 14; offset += 1) {
    const date = new Date(ukToday);
    date.setUTCDate(ukToday.getUTCDate() + offset);
    const day = onboardingAvailability.find((item) => item.day === date.getUTCDay());
    if (!day) continue;
    day.times.forEach((time) => {
      slots.push({
        id: `${date.toISOString().slice(0, 10)}-${time}`,
        display: `${formatDate(date)} · ${time}`,
        date: formatDate(date),
        time,
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
      'I would like to arrange a 20-minute onboarding call about maths tutoring.',
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
            <h1 className="page-title">Maths tutoring that makes the next step feel manageable.</h1>
            <p className="page-intro">
              I teach maths as a conversation: we work out what is unclear, build the method together, and leave enough time for it to stick.
            </p>
            <a className="primary-action" href="#enquire">
              Arrange an onboarding call <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
          <aside className="workspace-panel proof-panel">
            <p className="panel-label">A quick introduction</p>
            <dl>
              <div><dt>150+</dt><dd>hours taught</dd></div>
              <div><dt>Imperial</dt><dd>Mathematics student</dd></div>
              <div><dt>A* A* A* A</dt><dd>A-level results</dd></div>
            </dl>
          </aside>
        </section>

        <section className="tutoring-grid" aria-label="Tutoring details">
          <article className="workspace-panel">
            <h2>How lessons work</h2>
            <ol className="process-list">
              <li><span>01</span><div><strong>Find the gap</strong><p>We begin with the exact point where the question stopped making sense.</p></div></li>
              <li><span>02</span><div><strong>Build the method</strong><p>I explain the idea clearly, then we practise until it feels familiar.</p></div></li>
              <li><span>03</span><div><strong>Leave with a plan</strong><p>Every lesson ends with a small, achievable next step.</p></div></li>
            </ol>
          </article>
          <article className="workspace-panel">
            <h2>What I can help with</h2>
            <ul className="feature-list">
              <li>GCSE and A-level Mathematics</li>
              <li>A-level Further Mathematics</li>
              <li>Exam technique, revision planning, and confidence</li>
              <li>Stretching strong students without skipping the foundations</li>
            </ul>
            <p className="panel-note">Lessons can be online or in person by arrangement. We can discuss the best format during the call.</p>
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
            <p>Choose an available 20-minute slot, then tell me a little about what would help. I’ll reply to confirm it.</p>
          </div>

          <div className="booking-layout">
            <div className="slot-picker" aria-label="Available onboarding call slots">
              <div className="slot-picker-heading"><CalendarDays size={18} aria-hidden="true" /><span>Available times — UK time</span></div>
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
              <p className="availability-note">Nothing here works? Add your preferred days and times below instead.</p>
            </div>

            <form className="booking-form" onSubmit={submitBooking}>
              <div className="form-row">
                <label>Parent/guardian name<input name="parentName" required autoComplete="name" /></label>
                <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
              </div>
              <div className="form-row">
                <label>Student’s first name<input name="studentName" required /></label>
                <label>Level<select name="level" defaultValue=""><option value="" disabled>Select level</option><option>GCSE</option><option>A-level Mathematics</option><option>A-level Further Mathematics</option><option>Not sure yet</option></select></label>
              </div>
              <label>Other days or times that work for you<textarea name="alternatives" rows={2} placeholder="For example: Wednesday after 5pm or Sunday morning" /></label>
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
          <AccordionItem value="first-call"><AccordionTrigger>What happens in the onboarding call?</AccordionTrigger><AccordionContent>It is a relaxed 20-minute conversation with a parent or guardian. We will talk through the student’s goals, current experience, and whether I am the right fit.</AccordionContent></AccordionItem>
          <AccordionItem value="prices"><AccordionTrigger>Can we discuss lesson format and pricing?</AccordionTrigger><AccordionContent>Yes. The right lesson length, frequency, format, and price depend on the student’s needs, so we can cover them clearly before anything is booked.</AccordionContent></AccordionItem>
        </Accordion>
      </main>
    </Layout>
  );
};

export default Tutoring;
