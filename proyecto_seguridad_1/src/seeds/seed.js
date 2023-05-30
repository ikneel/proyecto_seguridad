const Note = require('../models/Note');
const Users = require('../models/Users');
const seedStatus = require('../seeds/seedstatus');

const notedata = [
    {
        titulo: "Flag",
        descripcion: "TGG9nQ1RGe0I0TkQzUjRfM05fTjBUNH0K",
        user: "espitia@gmail.com"
    },
    {
        titulo: "Tarea asignada",
        descripcion: "Desarrollar la aplicacion Web",
        user: "espitia@gmail.com"
    },
    {
        titulo: "Tecnologias usadas",
        descripcion: "Node.js (express, handlebars, passport y otras mas), MongoDB, MongoDB  Compass, Visual Studio Code",
        user: "espitia@gmail.com",
    },
    {
        titulo: "{user:\"$ne\": req.user.id}}",
        descripcion: "{user:\"$ne\": req.user.id}}",
        user: "alvaro@gmail.com"
    },
    {
        titulo: "asd",
        descripcion: "{user:{\"$ne\":req.user.id}}",
        user: "uribe@gmail.com"
    },
    {
        titulo: "findOne({user:{\"$ne\":req.user.id}})",
        descripcion: "req.user.id",
        user: "uribe@gmail.com"
    },
    {
        titulo: "bandera",
        descripcion: "15266",
        user: "enrique@gmail.com"
    }
];

const usersdata = [
    {
        name: "Ian Imanol Uribe Montoya",
        phone: "5615776256",
        email: "uribe@gmail.com",
        password: "$2a$10$4.aigMnvwI4vpU14gK1ur.e6uN4rfnniHw3cXKMeU.xyrkgYWEU02"
    },
    {
        name: "Melquicedec Aguilar Gonzalez",
        phone: "5615776245",
        email: "melquicedec@gmail.com",
        password: "$2a$10$cuKG7ScoEvBilDRFILm1lekII2ZYo7TD3rd7cyw/fiS4M4dG8MHiO"
    },
    {
        name: "Gema Guadalupe Pelaez Diaz",
        phone: "5615776265",
        email: "gema@gmail.com",
        password: "$2a$10$qrnWbJgnIAZXu9h9XihwBOOXTWigLpx4i2LCclFyW/DpNASuoFaYK"
    },
    {
        name: "Luis Enrique Espitia Naves",
        phone: "5615776255",
        email: "espitia@gmail.com",
        password: "$2a$10$8dpUFMh9dM0fOfowOQr8gencEP3w.K8GFp1X6RlDSe/VPvAu8YLpO"
    },
    {
        name: "gerardo ",
        phone: "5618962154",
        email: "gerarda@gmail.com",
        password: "$2a$10$ImC.IXPXpre0vhfZZ4kEPes7iQBc8CZxSsydw0xXvFknPQlRDEmi6"
    },
    {
        name: "j Luis Espitia Sanchez",
        phone: "5514805786",
        email: "jespitia@gmail.com",
        password: "$2a$10$BtZdyVvmgWdpxt5wE28wcO7FQ0d.xqWvKhg5EnEDqUpqNR34Up.Pu"
    },
    {
        name: "Luis Enrique Espitia Naves",
        phone: "5615776255",
        email: "naves@gmail.com",
        password: "$2a$10$b4gE.UqCmTLZd6KR9Ylb5uFCj6GcmMJEJFtrReLyhoSygUkprJXl."
    },
    {
        name: "Jose Juan Camacho Alvarez",
        phone: "56896515",
        email: "alvaro@gmail.com",
        password: "$2a$10$cQ1/V5DwfPl6E9mqXHUMTe6qiK3gQnv5L1jaR3MbWUyQz0W7.rDca"
    },
    {
        name: "luis",
        phone: "6598",
        email: "enrique@gmail.com",
        password: "123456",
      }
];

async function insertSeedData() {
    try {
        const dataInserted = await seedStatus.isDataInserted();
        if (!dataInserted) {
            await Note.insertMany(notedata);
            await Users.insertMany(usersdata);
            console.log('Datos agregados');
        } else {
            console.log('Los datos ya estaban almacenados')
        }

    } catch (error) {
        console.error('error al insertar datos', error);
    }
}

module.exports = insertSeedData;
