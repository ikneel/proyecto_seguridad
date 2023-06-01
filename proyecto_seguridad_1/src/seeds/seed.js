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
        password: "654321"
    },
    {
        name: "Melquicedec Aguilar Gonzalez",
        phone: "5615776245",
        email: "melquicedec@gmail.com",
        password: "123456789"
    },
    {
        name: "Gema Guadalupe Pelaez Diaz",
        phone: "5615776265",
        email: "gema@gmail.com",
        password: "987654321"
    },
    {
        name: "Luis Enrique Espitia Naves",
        phone: "5615776255",
        email: "espitia@gmail.com",
        password: "123456"
    },
    {
        name: "gerardo ",
        phone: "5618962154",
        email: "gerarda@gmail.com",
        password: "1234567"
    },
    {
        name: "j Luis Espitia Sanchez",
        phone: "5514805786",
        email: "jespitia@gmail.com",
        password: "7654321"
    },
    {
        name: "Luis Enrique Espitia Naves",
        phone: "5615776255",
        email: "naves@gmail.com",
        password: "12345678"
    },
    {
        name: "Jose Juan Camacho Alvarez",
        phone: "56896515",
        email: "alvaro@gmail.com",
        password: "$87654321"
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
