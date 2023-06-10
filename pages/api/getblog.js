import * as fs from 'fs';
// valid slug is http://localhost:3000/api/getblog?slug=website-demo-one
export default async function handler(req, res) {


    fs.readFile(`websitedata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "No such blog found" })

        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}