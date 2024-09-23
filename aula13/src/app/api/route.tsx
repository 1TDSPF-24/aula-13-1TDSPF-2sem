import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import { ITipoParametro } from '../produto/[id]/page'

export async function GET(request: Request, { params }:{ params: ITipoParametro }) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8')

        const data = JSON.parse(file)
        return NextResponse.json(data)
    } catch (error) {
        console.log("Erro ao ler o arquivo JSON: ", error)
        return NextResponse.json({ message: "Erro ao ler o arquivo produtos" }, { status: 500 })
    }
}