const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export default async function connect(command) {
    const client = new MongoClient(process.env.MONGO_URI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      let output = null
      let response = null

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    output = await client.db("test").command(command);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  if (command.insert){
    response = output.ok
    console.log('CONNECT INSERT COMMAND')
  } else if (command.findAndModify) {
    response = output?.value
    console.log('CONNECT findAndModify COMMAND')
    console.log('MODIFIED: ', response)
  }
   else if (command.find || command.filter) {
    response = output?.cursor.firstBatch
  }

  return response
}