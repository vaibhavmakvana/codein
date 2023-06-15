import * as fs from 'fs';
export default async function handler(req, res) {


    fs.readFile(`websitedata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "No such blog found" })

        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}



// For markdown file 


// import * as fs from 'fs';
// import MarkdownIt from 'markdown-it';

// export default async function handler(req, res) {
//   const md = new MarkdownIt();

//   fs.readFile(`websitedata/${req.query.slug}.md`, 'utf-8', (err, data) => {
//     if (err) {
//       res.status(500).json({ error: "No such blog found" });
//     } else {
//       const html = md.render(data);
//       res.status(200).send(html);
//     }
//   });
// }