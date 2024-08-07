import path from "path";
import fs from "fs";

function buildPath() {
    return path.join(process.cwd(), "data", "data.json");
}
function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export default function handler(req, res) {
    const { method } = req;

    const filePath = buildPath();
    const { events_categories, all_events } = extractData(filePath);
    if (!all_events) return res.status(400).json({ msg: "couldn't found" });

    if (method === "POST") {
        const { email, eventId } = req.body;
        const new_all_events = all_events.map((ev) => {
            if (eventId === ev.id) {
                if (ev.emails_registered.includes(email)) {
                    res.status(201).json({
                        msg: "This email already exists. Please, insert a new one",
                    });
                    return ev;
                }
                // additional check if the browser auto check doesn't run, you can add regex here
                if (!email.includes("@")) {
                    res.status(201).json({
                        msg: "Please , insert a valid email",
                    });
                    return ev;
                }
                return {
                    ...ev,
                    emails_registered: [...ev.emails_registered, email],
                };
            }
            return ev;
        });
        fs.writeFileSync(
            filePath,
            JSON.stringify({ events_categories, all_events: new_all_events })
        );

        res.status(200).json({ msg: "successful registration" });
    }
}
