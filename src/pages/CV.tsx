import React from 'react';
import Layout from '@/components/Layout';

const CV = () => {
  return (
    <Layout>
      <main className="p-6 mx-auto max-w-4xl leading-relaxed">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Kashyap Karthik</h1>
          <p className="text-sm text-muted-foreground">
            <a href="mailto:kck25@ic.ac.uk" className="hover:text-foreground hover:underline">kck25@ic.ac.uk</a>
            {' | '}
            <a href="tel:07577063863" className="whitespace-nowrap hover:text-foreground hover:underline">07577 063863</a>
            {' | '}
            <a href="https://www.linkedin.com/in/kashyap-karthik-328678283" className="break-words hover:text-foreground hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/kashyap-karthik-328678283</a>
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Education</h2>
          <div className="mb-6">
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto] mb-2">
              <h3 className="font-bold">Imperial College London</h3>
              <p className="text-sm text-muted-foreground sm:text-right">Sep. 2025 – Jun. 2029 (expected)</p>
              <p className="text-sm italic text-muted-foreground">MSci Mathematics</p>
              <p className="text-sm italic text-muted-foreground sm:text-right">London, UK</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>First-year average: <strong>67%</strong>.</li>
              <li>Selected first-year modules: Introduction to Computation: <strong>85%</strong>; Introduction to Applied Mathematics: <strong>84%</strong>.</li>
              <li>Selected second-year modules: Probability for Statistics; Principles of Programming; Statistical Modelling; Lebesgue Measure and Integration.</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4 mb-2">
              <h3 className="font-bold">Bristol Grammar School</h3>
              <p className="text-sm text-muted-foreground">Bristol, UK</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>A-levels: Mathematics <strong>A*</strong>, Further Mathematics <strong>A*</strong>, Physics <strong>A*</strong>, Computer Science <strong>A</strong>; STEP II: <strong>Grade 2</strong>.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Research &amp; Projects</h2>
          <div className="mb-6">
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto] mb-2">
              <h3 className="font-bold">Cricket Performance Forecasting: Signal and Noise</h3>
              <p className="text-sm text-muted-foreground sm:text-right">Sep. – Oct. 2026</p>
              <p className="text-sm italic text-muted-foreground">
                Independent project using sports data as an analogue for financial forecasting | <a href="https://github.com/kashyapkarthik/ipl-form-forecasting" className="inline-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
              <p className="text-sm italic text-muted-foreground sm:text-right">Python</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Built a Python/pandas pipeline for <strong>1,243 IPL matches</strong>; analysed <strong>267,994 eligible deliveries across 495 players</strong> to model six-hitting probabilities and investigate whether recent performance predicts future outcomes.</li>
              <li><strong>Adapted Brown's (2008)</strong> baseball forecasting framework using <strong>empirical Bayes (Beta-binomial) shrinkage</strong>; benchmarked early-to-late-season predictions against raw player rates and batting-position baselines using <strong>log loss and Brier score.</strong></li>
              <li>Compared expanding, rolling and exponentially weighted histories through <strong>chronological validation</strong>; selected a <strong>300-ball rolling shrinkage model</strong> on 2024 data, reducing next-innings <strong>log loss by 1.03%</strong> versus the batting-position population baseline.</li>
              <li>Quantified forecast uncertainty using both <strong>date and player clustered bootstrap</strong>; tested recency effects with context-adjusted regression and published <strong>110 conditional forecasts for 2027</strong>.</li>
            </ul>
          </div>
          <div>
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,1fr)_auto] mb-2">
              <h3 className="font-bold">Context-Dependent Clustering of Poker Starting Hands</h3>
              <p className="text-sm text-muted-foreground sm:text-right">June 2026</p>
              <p className="text-sm italic text-muted-foreground">Individual first-year research project, Imperial College London</p>
              <p className="text-sm italic text-muted-foreground sm:text-right">Python, R</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generated datasets for <strong>169 Texas Hold'em starting-hand classes</strong> using Python and eval7; estimated equity using <strong>Monte-Carlo</strong> simulation with <strong>10,000 simulations per hand</strong> in heads-up and six-player scenarios.</li>
              <li>Constructed scenario-specific numerical features and processed data frames in R; standardised features before applying <strong>Partitioning Around Medoids (PAM)</strong> to compare starting-hand profiles.</li>
              <li>Used <strong>silhouette analysis</strong> to assess cluster counts and selected eight clusters per scenario; retained representative hands as medoids to make the classifications interpretable.</li>
              <li>Visualised the clusters through <strong>principal component analysis (PCA)</strong> and presented a research poster comparing how hand groupings changed with playing scenario and feature selection.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Technical Skills</h2>
          <div className="space-y-2">
            <p><strong>Python:</strong> pandas, NumPy, SciPy, scikit-learn, Matplotlib, pytest, eval7; data pipelines, numerical methods and Monte Carlo simulation.</p>
            <p><strong>R &amp; statistics:</strong> Hypothesis testing, linear regression, feature standardisation, PAM clustering, silhouette analysis and PCA.</p>
            <p><strong>Forecasting &amp; tools:</strong> Empirical Bayes, chronological validation, bootstrap uncertainty; Git, GitHub and Jupyter notebooks.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Tutoring &amp; Volunteering</h2>
          <div className="mb-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4 mb-2">
              <h3 className="font-bold">Private Tutor</h3>
              <p className="text-sm text-muted-foreground">3+ years</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivered <strong>150+ hours of tutoring</strong> over more than three years, communicating effectively with parents and children.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Community Volunteering &amp; Fundraising</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Helped organise and run a community fair and fundraiser; supported the preparation and delivery of the event.</li>
              <li>Cycled <strong>1,200+ km to Munich</strong>, raising <strong>£1,500+ for Save Soil</strong> and awareness of soil conservation.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Societies &amp; Hobbies</h2>
          <p className="mb-2"><strong>Cricket Society</strong> | Imperial Third XI player; scored <strong>93 not out</strong> in a T20 against LSE.</p>
          <p>Squash Society | MathSoc | AlgoSoc | PokerSoc</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Awards</h2>
          <p><strong>H.J. Godwin Prize in Mathematics</strong> | Maths Scholar | Headmaster's Scholar</p>
        </section>
      </main>
    </Layout>
  );
};

export default CV;
