import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/testModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    const test = await connectMongo({insert: "scripts", documents: [req.body] });
    console.log('CONNECTED TO MONGO');
    console.log('ADDING ', test)

    console.log('CREATING DOCUMENT');
    // const test = await Test.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}