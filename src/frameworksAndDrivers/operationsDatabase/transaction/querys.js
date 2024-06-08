const insert_transaction = `CALL insert_transaction(?,?,?,?)`
const get_transaction =`CALL get_transaction(?)`;

module.exports = {
    insert_transaction,
    get_transaction
}