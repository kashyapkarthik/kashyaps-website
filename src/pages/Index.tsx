import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="p-6 mx-0 max-w-4xl">
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="mb-3">
            I'm an upcoming first-year maths student at Imperial College London with a passion for adventure and innovation.
          </p>

          <p className="mb-3">
            With over 150 hours taught, I am also highly experienced GCSE and A-Level maths tutor, and am taking new students for the 2025-2026 academic year. 
          </p>
          <p className="mb-3">
            Additionaly, I'm developing LuminaMaths — a comprehensive online tool for GCSE and A-Level maths, designed to be the resource I wish I'd had as both a student and a teacher. LuminaMaths will launch in Autumn 2025.
          </p>
          <p className="mb-3">
            In the summer of 2024, I cycled across Europe to raise awareness for SaveSoil. 
          </p>
          <p className="mb-3">
            In the summer of 2025, I'm setting out to hike the length of Britain with my dog.
          </p>
          <p className="mb-3">
            Welcome!
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
