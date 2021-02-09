import mongoose from 'mongoose'
import { Database } from './../utils/types'

const connectionConfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}

export const connectDatabase = async (): Promise<Database> => {
  const conn = await mongoose.connect(
    `${process.env.MONGO_URI}`,
    connectionConfig
  )

  console.log(`MongoDB Connected: ${conn.connection.host}`)

  return {}
}
