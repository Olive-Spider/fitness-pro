import { About, Clients, Hero, NavBar } from '../components/home';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Clients />
      <About />
    </div>
  );
};

export default LandingPage;
