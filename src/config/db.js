require('dotenv').config();

const {Prismapg} = require("@prisma/adapter-pg");
const {PrismaClient} = require("../generated/prisma/client");

const adaptador = new Prismapg({
    connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({adapter: adaptador})

module.exports = prisma;