// export default async function GetScript(req, res) {
//     let script_id = parseInt(req.query.script)

//     let data = await connectMongo({find: "scripts", filter: {script: script_id}})

//     res.json(data)
// }