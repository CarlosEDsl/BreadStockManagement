import express from "express";
import routes from "./routes/index";


const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo(){
    console.log(`API EM EXECUÇÃO NO: http:localhost:${PORT}`)
}

app.use("/api", routes)
logInfo();

app.get('/', (req, res) => {
    res.send('Servidor Node.js funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});

export default app;