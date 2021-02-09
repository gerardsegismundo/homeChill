import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'

import { connectDatabase } from './config/database'
import { resolvers, typeDefs } from './graphql'

require('dotenv').config()

const mount = async (app: Application) => {
  const db = await connectDatabase()

  app.use(cookieParser(process.env.COOKIE_PARSER_SECRET))

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context: ({ req, res }) => ({ db, req, res })
  // })

  // server.applyMiddleware({ app, path: '/api' })
  app.listen(process.env.PORT)

  console.log(`Listening to port ${process.env.PORT}`)
}

mount(express())
