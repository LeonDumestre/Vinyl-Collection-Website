'use strict'

import fp from "fastify-plugin";

import fastify_sensible from "fastify-sensible";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async function (fastify, opts) {
  fastify.register(fastify_sensible, {
    errorHandler: false
  })
});
