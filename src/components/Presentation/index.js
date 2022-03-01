import { Container } from './styles';

export default function Presentation() {
  return (
    <Container>
      <div className="presentationText">
        <p className="title">Heya! My name is</p>
        <h1 className="name">Enrico Palma</h1>
        <h2 className="occupation">Full-Stack Developer</h2>
        <p className="wiup">I am currently freelancing as a Full-Stack Developer in a Exchange Broker company called Frente Corretora de Câmbio</p>
        <div className="stacks">
          <img align="center" alt="JavaScript Icon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img align="center" alt="TypeScript Icon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
          <img align="center" alt="Node.js Icon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" />
          <img align="center" alt="Nest.js Icon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nestjs/nestjs-plain.svg" />
          <img align="center" alt="React Icon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
        </div>
      </div>

      <div className="presentationImg">
        <img src="https://via.placeholder.com/600" alt="Placeholder" />
      </div>
    </Container>
  );
}
