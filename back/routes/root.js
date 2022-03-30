'use strict'

import '../database.js'
import {Vinyl, Track} from "../database.js";

export default async function (fastify, opts) {
    fastify.get('/vinyls/estimate', async function (request, reply) {
        let array = await Vinyl.findAll()
        let price = 0
        for (let i = 0; i < array.length; i++) {
            price += array[i].current_price * array[i].quantity
        }
        reply.send(price)
    });
    fastify.get('/vinyls', async function (request, reply) {
        reply.send(await Vinyl.findAll())
    });
    fastify.get('/vinyl/:id', async function (request, reply) {
        reply.send(await Vinyl.findByPk(request.params.id));
    });
    fastify.post('/vinyl/add', async function (request, reply) {
        reply.send(request.body.year_purchase_date)
        if (!request.body?.name && !request.body?.artist && !request.body?.label && !request.body?.quantity && !request.body?.image) {
            reply.status(400).send('Le nom est obligatoire')
        } else {
            reply.send(await Vinyl.create({
                name: request.body.name,
                release_date: request.body.year_release_date,
                purchase_date: request.body.year_purchase_date,
                release_price: request.body.release_price === 0 ? null : request.body.release_price,
                current_price: request.body.current_price === 0 ? null : request.body.current_price,
                purchase_price: request.body.purchase_price === 0 ? null : request.body.purchase_price,
                quantity: request.body.quantity,
                artist: request.body.artist,
                image: request.body.image,
                label: request.body.label
            }))
        }
    });
    fastify.put('/vinyl/edit/:id', async function (params, res) {
        const id = params.body.id;
        if (params.body) {
            await Vinyl.update(params.body, {
                where: {
                    id
                }
            })
            res.send("Mis à jour")
        }
    });
    fastify.delete('/vinyl/:id', async function ({params, body}, res) {
        const id = params.id;
        await Vinyl.destroy({
            where: {
                id
            }
        })
        await Track.destroy({
            where: {
                vinyl_id: id
            }
        })
    });

    fastify.get('/tracks', async function (request, reply) {
        reply.send(await Track.findAll())
    });
    fastify.get('/track/:id', async function (request, reply) {
        reply.send(await Track.findByPk(request.params.id));
    });
    fastify.put('/track/:id', async function (params, res) {
        const id = params.body.id;
        if (params.body) {
            await Track.update(params.body, {
                where: {
                    id
                }
            })
            res.send("Mis à jour")
        }
    });
    fastify.delete('/track/:id', async function ({params, body}, res) {
        const id = params.id;
        await Track.destroy({
            where: {
                id
            }
        })
    });
}