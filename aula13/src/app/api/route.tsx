import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf8');
        return NextResponse.json(JSON.parse(file));
    }
    catch (error) {
        console.error("Erro ao ler o Arquivo Json", error)
        return NextResponse.json({ message: "Erro ao ler o arquivo produtos" })
    }
}