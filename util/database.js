
const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
let _db;

const mongoConnect=callback=>{
  mongoClient.connect('mongodb+srv://ramyakrishnasunarkani:g2US2y94sWK6QeYV@cluster0.em87lcr.mongodb.net')
.then(client=>{
  console.log("Connected to MongoDB");
  _db=client.db('test');
  callback();
}).catch(err=>{
  console.log(err);
  throw err;
})
}

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'no database found';
  
}

module.exports={mongoConnect,getDb};
