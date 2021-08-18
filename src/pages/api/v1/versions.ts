import type { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ latest: "1.0.0", "1.0.0": { url: "download" } })
}
