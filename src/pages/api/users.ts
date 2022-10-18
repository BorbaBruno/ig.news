/* eslint-disable import/no-anonymous-default-export */

import { NextApiRequest, NextApiResponse } from "next"

// JWT (Storage)

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Bruno'},
        {id: 2, name: 'Rafael'},
        {id: 3, name: 'Borba'},
    ]

    return response.json(users);
}