'use strict';

import LoginRequest from '/home/loadt/node/src/services/loginRequest.js';

export async function post(req, res) { 
    const { username, password } = req.body;
    try {
        const responseData = await LoginRequest(username, password);
        res.json({ data: responseData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

