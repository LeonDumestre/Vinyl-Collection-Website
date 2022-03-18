'use strict'

import '../database.js'
import {Vinyl, Track} from "../database.js";

export default async function (fastify, opts) {
    fastify.get('/vinyls', async function (request, reply) {
        Vinyl.sync();
        const users = await Vinyl.findAll();
        return {rout: users}
    })
    fastify.get('/tracks', async function (request, reply) {
        Track.sync();
        const tracks = await Track.findAll();
        return {rout: tracks}
    })
}
