import mongoose from 'mongoose'

class Database {
  private mongoConnection

  constructor() {
    this.mongo()
  }

  mongo() {
    if (process.env.NODE_ENV !== 'test') {
      mongoose.set('strictQuery', false)
      this.mongoConnection = mongoose.connect(process.env.MONGODB_URI)
    }
  }
}

export default new Database()