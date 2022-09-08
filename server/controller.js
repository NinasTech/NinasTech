require('dotenv').config()
const Sequelize = require('sequelize');
const { CONNECTION_STRING } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    createNina: (req, res) => {
        const {name, story, email, profession, city, image_url} = req.body;
        sequelize.query(`
            insert into
                girls_info (name, story, email, profession, cit, image_url)
                VALUES ('${name}', '${email}', '${profession}', '${city}', '${story}', '${image_url}')
            `).then(dbRes => res.status(200).send(dbRes[0]))
    },
    getNinas:(req,res) => {
        sequelize.query(`
            select
                girl_id,
                name,
                image_url,
                profession,
                city
            from
                girls_info
        `).then(dbRes => res.status(200).send(dbRes[0]))
    },
    getNina: (req,res) => {
        const {id} = req.params;
        sequelize.query(`
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
    `).then(dbRes => res.status(200).send(dbRes[0][0]))
    },
    seed: (req, res) => {
        sequelize.query(`
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

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Matilda', 'London is layered with history, where medieval and Victorian complement a rich and vibrant modern world. The
            Tower of London and Westminster neighbor local pubs and markets, and time-worn rituals like the changing of the
            guards take place as commuters rush to catch the Tube. It''s a place where travelers can time-hop through the
            city, and when they''re weary, do as Londoners do and grab a “cuppa” tea.', 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2020-09/computer_programmer.jpg', 'matilda.volth@gmail.com', 'Software Engineer', 'New York');

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Bruna', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6w0VNxQmxwMwY8CWRxMcus/39e7900e5b419b46d54920b354158a19/GettyImages-930003086.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=', 'bruna.calvith@gmail.com', 'Designer', 'Miami');

            insert into girls_info (name, story, image_url, email, profession, city) VALUES ('Luana', 'A scelerisque purus semper eget duis. Erat imperdiet sed euismod nisi porta lorem. Risus feugiat in ante metus dictum. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Lectus vestibulum mattis ullamcorper velit sed. Etiam non quam lacus suspendisse faucibus interdum. Augue mauris augue neque gravida in fermentum et sollicitudin. Diam donec adipiscing tristique risus nec feugiat in. Porttitor massa id neque aliquam vestibulum morbi blandit. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Dictum non consectetur a erat nam at lectus urna duis. Interdum velit laoreet id donec ultrices tincidunt arcu non. Eu consequat ac felis donec et odio pellentesque diam volutpat. Amet consectetur adipiscing elit ut aliquam. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Aliquam ut porttitor leo a diam sollicitudin.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDb5TU7xFjQCPmu8fKPRE4liNNIzHC5JB8Q&usqp=CAU', 'luana.brazuca@gmail.com', 'QA Engineer', 'San Francisco');

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}