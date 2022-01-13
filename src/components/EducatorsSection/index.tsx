import {
  Container,
  EducatorCard,
  EducatorCardHeader,
  EducatorDescription,
  EducatorName,
  EducatorPhoto,
  EducatorPhotoWrapper,
  EducatorsList,
  EducatorTechnology,
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
          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/diego-fernandes.png"
                alt="Diego Fernandes"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Diego Fernandes</EducatorName>

              <EducatorTechnology>Educador ReactJS</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Programador há 11 anos com foco nas melhores tecnologias de
              desenvolvimento web & mobile. Apaixonado por educação e por mudar
              a vida das pessoas através da programação. Mais de 500.000 pessoas
              já passaram por um dos seus treinamentos.
            </EducatorDescription>
          </EducatorCard>

          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/daniele-evangelista.png"
                alt="Daniele Evangelista"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Daniele Evangelista</EducatorName>

              <EducatorTechnology>Educadora Node.js</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Programadora há 12 anos, com foco em Back-end e Front-end,
              apaixonada por conhecimento, tecnologia e por ajudar pessoas
              através da educação. Formada em Sistemas de Informação foi
              responsável pelo time de educação aqui na Rocketseat.
            </EducatorDescription>
          </EducatorCard>

          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/rafael-camarda.png"
                alt="Rafael Camarda"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Rafael Camarda</EducatorName>

              <EducatorTechnology>Educador Elixir</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Desenvolvedor Backend com foco em Elixir. Concentra a maior parte
              da sua experiência em linguagens funcionais, sistemas operacionais
              e arquitetura de computadores. Ama compartilhar conhecimento e
              introduzir novos Devs ao mundo funcional e Elixir.
            </EducatorDescription>
          </EducatorCard>

          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/rodrigo-goncalves.png"
                alt="Rodrigo Gonçalves"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Rodrigo Gonçalves</EducatorName>

              <EducatorTechnology>Educador React Native</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Graduado em Sistemas de Informação, Mestre em educação com ênfase
              em tecnologia, pós-graduado em Project Management PMI (Project
              Management Institute). Professor há mais de 6 anos na graduação em
              Sistemas de Informação e na pós-graduação em Engenharia de
              Software.
            </EducatorDescription>
          </EducatorCard>

          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/mayk-brito.png"
                alt="Mayk Brito"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Mayk Brito</EducatorName>

              <EducatorTechnology>Educador</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Programador há mais de 12 anos, é apaixonado por ajudar quem está
              dando os primeiros passos nesse universo. Vem transformando
              milhares de devs através dos seus conteúdos e cursos. Com uma
              didática fácil de assimilar, ele vai te guiar no início da
              jornada.
            </EducatorDescription>
          </EducatorCard>

          <EducatorCard>
            <EducatorPhotoWrapper>
              <EducatorPhoto
                src="/images/educators/jake-gracielly.png"
                alt="Jake Gracielly"
              />
            </EducatorPhotoWrapper>

            <EducatorCardHeader>
              <EducatorName>Jake Gracielly</EducatorName>

              <EducatorTechnology>Educador</EducatorTechnology>
            </EducatorCardHeader>

            <EducatorDescription>
              Programadora há mais de 7 anos Facilitadora de hackathons e
              palestrante. Microsoft MVP em desenvolvimento web com foco em
              NodeJS e tem como missão compartilhar conhecimento, orientar e
              inspirar mulheres a crescerem na área de tecnologia e
              desenvolvimento.
            </EducatorDescription>
          </EducatorCard>
        </EducatorsList>
      </Container>
    </Section>
  );
}
