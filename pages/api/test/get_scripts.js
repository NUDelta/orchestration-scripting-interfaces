import connectMongo from "../../../utils/connectMongo"

export default async function GetResponse(req, res) {
    let script_id = parseInt(req.query.script)

    let data = await connectMongo({find: "scripts", filter: {_id: script_id}})

    res.json(data)
}