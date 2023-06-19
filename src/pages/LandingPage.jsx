import { About, Clients, Hero, Intro } from '../components/home';

const LandingPage = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Intro />
      </section>
    </div>
  );
};

export default LandingPage;
