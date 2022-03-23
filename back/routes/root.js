'use strict'

import '../database.js'
import {Vinyl, Track} from "../database.js";

export default async function (fastify, opts) {
    fastify.get('/vinyls', async function (request, reply) {
        reply.send(await Vinyl.findAll())
    })
    fastify.get('/vinyl/:id', async function (request, reply) {
        reply.send(await Vinyl.findByPk(request.params.id));
    })
    fastify.post('/vinyl/add', async function (request, reply) {
        reply.send(request.body)
        if (!request.body?.name) {
            reply.status(400).send('Le nom est obligatoire')
        } else {
            reply.send(await Vinyl.create({
                name: request.body.name,
                state: false
            }))
        }
    })

    fastify.delete('/vinyl/:id', async function ({params, body}, res) {
        const id = params.id;
        await Vinyl.destroy({
            where: {
                id
            }
        })
    });

    fastify.get('/tracks', async function (request, reply) {
        reply.send(await Track.findAll())
    })
    fastify.get('/track/:id', async function (request, reply) {
        reply.send(await Track.findByPk(request.params.id));
    })
    fastify.delete('/track/:id', async function ({params, body}, res) {
        const id = params.id;
        await Track.destroy({
            where: {
                id
            }
        })
    });

}
