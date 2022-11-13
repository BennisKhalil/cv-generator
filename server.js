import fastify from "fastify";
import cors from '@fastify/cors'


const fastifyRunner = fastify({ logger: true })

const validateField = (field, value, label, messages) => {
    if(value === undefined || !(typeof value === "string") || value  === ""){
        messages[field] = `${label} is not valid`
    }
}

await fastifyRunner.register(cors, { 
    origin: (origin, cb) => {
        const hostname = new URL(origin).hostname
        if(hostname === "localhost"){
          //  Request from localhost will pass
          cb(null, true)
          return
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"), false)
      }
  })
  

fastifyRunner.post('/cv', async (request, reply) => {
    const messages = {}
    const body = request.body
    console.log(body)
    validateField('firstName', body.firstName, "first name", messages)
    validateField('lastName', body.lastName, "last name", messages)
    validateField('email', body.email, "email", messages)
    validateField('address', body.address, "address", messages)

    if(Object.keys(messages).length === 0) reply.send(body)
    reply.status(400)
    reply.send(messages)
  })

  const start = async () => {
    try {
      await fastifyRunner.listen({ port: 4000 })
    } catch (err) {
        fastifyRunner.log.error(err)
      process.exit(1)
    }
  }
  start()