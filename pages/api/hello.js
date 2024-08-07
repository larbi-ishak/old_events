// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function handler(req, res) {
    let data = (async function () {
        const { events_categories } = await import("/data/data.json");
        data = events_categories;

        return events_categories;
    })();

    console.log(req.url);

    res.status(200).json({ name: "John Doe" });
}
