import chalk from "chalk";
import fs from 'fs'
import pegaArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto(caminho) {
    const resultados = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'),resultados)
}

processaTexto(caminho);