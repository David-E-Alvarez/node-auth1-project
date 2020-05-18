const db = require("../database/connection.js");

module.exports = {
    add,
    findById,
};

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
}

function findById(id){
    return db("users").where({ id }).first();
}



  