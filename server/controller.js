require("dotenv").config();
const Sequelize = require("sequelize");
const { DATABASE_URL } = process.env;
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  createNina: (req, res) => {
    const { name, story, email, profession, city, image_url } = req.body;
    sequelize
      .query(
        `
            insert into
                girls_info (name, story, email, profession, city, image_url)
                VALUES ('${name}','${story}', '${email}', '${profession}', '${city}', '${image_url}')
            RETURNING girl_id;
            `
      )
      .then((dbRes) => res.status(200).send(dbRes[0][0]));
  },
  getNinas: (req, res) => {
    sequelize
      .query(
        `
            select
                girl_id,
                name,
                image_url,
                profession,
                city
            from
                girls_info
        `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]));
  },
  getNina: (req, res) => {
    const { id } = req.params;
    sequelize
      .query(
        `
        select
            girl_id,
            name,
            image_url,
            story,
            profession,
            city
        from
            girls_info
        where
                girl_id = ${id}
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0][0]));
  },
  seed: (req, res) => {
    sequelize
      .query(
        `
            drop table if exists girls_info;
            

            create table girls_info (
                girl_id serial primary key, 
                name varchar(100),
                story text,
                image_url text,
                email varchar(100),
                profession text,
                city text
            );

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Matilda Sousa', 'Nascida no Acre, eu sempre fui uma menina muito curiosa, quando meus pais compram meu primeiro computador, sempre gostei de estudar e pesquisar nele. Um dia eu vi um video sobre uma brasileira que foi para os Estados Unidos e se tornou engenheira de software, isso me inspirou muito. Eu aconselho a ser uma pessoa muito persistente, não ter medo de cometer erros e apenas ter muita coragem para tentar. Hoje eu moro em Chicago, sou completamente independente, essa profissao mudou a minha vida.', 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/computer_programmer.jpg', 'matilda.volth@gmail.com', 'Software Engineer', 'San Francisco');

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Elisabeth Calvith Silva', 'Sou mãe de tres filhos, comecei a programar com 30 anos, fui influenciada por uma brasileira que postava videos na internet sobre as vantagens de trabalhar na area de tecnologia. Comecei a estudar programacao e depois me tornei Gerente de Projetos. Eu recomendo aprimorar suas capacidades de comunicacao e humildade para aprender sempre algo novo e inovador, a area de tech sempre esta mudando constantemente, voce deve estar aberto sempre a aprender algo novo. Eu amo meu trabalho e desejo muito que mais brasileiros consigam trabalhar nessa area. Boa sorte meninas!', 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6w0VNxQmxwMwY8CWRxMcus/39e7900e5b419b46d54920b354158a19/GettyImages-930003086.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=', 'elisa.calvith@gmail.com', 'Gerente de projetos', 'Rio de Janeiro');

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Lana Rocha Almeida', 'Eu sempre gostei de jogar games pelo computador, meu irmao decidiu escolher a area da programacao e isso me inspirou. Hoje eu sou Mobile Developer e amo meu trabalho. Gosto da criatividade e simplicidade de criar coisas. Eu recomendo conhecer um curso certo com especializacoes e contatos para ter sua primeira experiencia de trabalho. Eu tinha me formado em um curso de web, mas hoje trabalho com algo um pouco diferente, por isso recomendo ter uma mente aberta para novas oportunidades.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDb5TU7xFjQCPmu8fKPRE4liNNIzHC5JB8Q&usqp=CAU', 'lana.brazuca@gmail.com', 'Mobile Developer', 'Santa Catarina');

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Sarah Andrade ', 'Eu comecei a estudar programacao gracas a um amigo que veio na minha casa e falou que ia estudar isso. Eu pesquisei mais informacoes pela internet e realmente gostei. A minha dica e, tenha paciencia e seja persistente. Estude o maximo que puder e tenha coragem de tentar.', 'https://www.britishcouncil.in/sites/default/files/student_in_a_computer_lab.jpg', 'sarah@gmail.com', 'Web Developer front end', 'Espirito Santo');




        `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
