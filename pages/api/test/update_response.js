import connectMongo from '../../../utils/connectMongo';
import { ObjectId } from 'mongodb';


export default async function updateResponse(req, res) {

    let rcs = await JSON.parse(req.query.rcs)

    let updates =  [
        {
          q: {_id: new ObjectId(req.query._id)},
          u: {$set: {'rcs': rcs}}
        }
     ]

    await connectMongo({update: "responses", updates: updates});

    res.send("Done");
}