import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({ logger: true });

const port = process.env.API_PORT || 5050;

const start = async () => {
  try {
    await fastify.listen({ port: Number(port), host: "0.0.0.0" });
    fastify.log.info(`Servidor rodando na porta ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
