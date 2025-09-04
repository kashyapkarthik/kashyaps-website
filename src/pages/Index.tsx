import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="p-6 mx-0 max-w-4xl">
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="mb-3 leading-tight">
            I'm a first-year maths student at Imperial College London, who loves problem solving and adventure.
          </p>

          <p className="mb-3 leading-tight">
            With over 150 hours taught, I am also highly experienced GCSE and A-Level maths tutor, and am taking new students for the 2025-2026 academic year. 
          </p>
          <p className="mb-3 leading-tight">
            Additionaly, I'm developing LuminaMaths — a comprehensive online tool for GCSE and A-Level maths, designed to be the resource I wish I'd had as both a student and a teacher.
          </p>
          <p className="mb-3 leading-tight">
            In the summer of 2024, I cycled 1200km across Europe to raise awareness for SaveSoil. 
          </p>
          <p className="mb-3 leading-tight">
            In the summer of 2025, I hiked the length of Britain, from John O'Groats to Land's End.
          </p>
          <p className="mb-3 leading-tight">
            Welcome!
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
