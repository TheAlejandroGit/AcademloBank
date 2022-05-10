const { app } = require('./app');
const { db } = require('./utils/database');
const {Transfer} = require('./models/transfer.model')
const {User} = require('./models/user.model')
db.authenticate()
.then(() => console.log('Database authenticated'))
.catch(err => console.log(err));

User.hasMany(Transfer, {foreingKey : 'senderUserId'});
Transfer.belongsTo(User);

db.sync({})
.then(() => console.log('Database synced'))
.catch(err => console.log(err));

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Expres app runing on port: ${PORT}`);
})
