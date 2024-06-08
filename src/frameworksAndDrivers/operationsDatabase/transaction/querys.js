const insert_transaction = `CALL insert_user(?,?,?,?,?,?)`
const get_transaction =`CALL get_usuario(?)`;

module.exports = {
    insert_transaction,
    update_transaction,
    get_transaction
}