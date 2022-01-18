import { Divider } from '../Divider';
import { EducatorCard } from '../EducatorCard';
import {
  Container,
  EducatorsList,
  Header,
  Paragraph,
  Section,
  Title,
} from './styles';

export function EducatorsSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Educadores experientes para te ajudar a evoluir</Title>

          <Paragraph>
            Um evento intenso, onde você será conduzido por um time de
            educadores altamente capacitado e preparado para te atender e tirar
            suas dúvidas. Contar com quem já conhece o caminho para te guiar é a
            melhor forma de ganhar tempo.
          </Paragraph>
        </Header>

        <EducatorsList>
          <EducatorCard
            name="Diego Fernandes"
            photo="diego-fernandes.png"
            technology="ReactJS"
            description={`Programador há 11 anos com foco nas melhores tecnologias de
            desenvolvimento web & mobile. Apaixonado por educação e por mudar
            a vida das pessoas através da programação. Mais de 500.000 pessoas
            já passaram por um dos seus treinamentos.`}
          />

          <EducatorCard
            name="Daniele Evangelista"
            photo="daniele-evangelista.png"
            technology="Node.js"
            description={`Programadora há 12 anos, com foco em Back-end e Front-end,
            apaixonada por conhecimento, tecnologia e por ajudar pessoas
            através da educação. Formada em Sistemas de Informação foi
            responsável pelo time de educação aqui na Rocketseat.`}
          />

          <EducatorCard
            name="Rafael Camarda"
            photo="rafael-camarda.png"
            technology="Elixir"
            description={`Desenvolvedor Backend com foco em Elixir. Concentra a maior parte
            da sua experiência em linguagens funcionais, sistemas operacionais
            e arquitetura de computadores. Ama compartilhar conhecimento e
            introduzir novos Devs ao mundo funcional e Elixir.`}
          />

          <EducatorCard
            name="Rodrigo Gonçalves"
            photo="rodrigo-goncalves.png"
            technology="React Native"
            description={`Graduado em Sistemas de Informação, Mestre em educação com ênfase
            em tecnologia, pós-graduado em Project Management PMI (Project
            Management Institute). Professor há mais de 6 anos na graduação em
            Sistemas de Informação e na pós-graduação em Engenharia de
            Software.`}
          />

          <EducatorCard
            name="Mayk Brito"
            photo="mayk-brito.png"
            description={`Programador há mais de 12 anos, é apaixonado por ajudar quem está
            dando os primeiros passos nesse universo. Vem transformando
            milhares de devs através dos seus conteúdos e cursos. Com uma
            didática fácil de assimilar, ele vai te guiar no início da
            jornada.`}
          />

          <EducatorCard
            name="Jake Gracielly"
            photo="jake-gracielly.png"
            description={`Programadora há mais de 7 anos Facilitadora de hackathons e
            palestrante. Microsoft MVP em desenvolvimento web com foco em
            NodeJS e tem como missão compartilhar conhecimento, orientar e
            inspirar mulheres a crescerem na área de tecnologia e
            desenvolvimento.`}
          />
        </EducatorsList>
      </Container>

      <Divider />
    </Section>
  );
}
