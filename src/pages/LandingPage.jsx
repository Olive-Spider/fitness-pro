import { About, Clients, Hero } from '../components/home';

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
    </div>
  );
};

export default LandingPage;
