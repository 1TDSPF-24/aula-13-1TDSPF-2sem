import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {

    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf8');

        const data = JSON.parse(file);
        return NextResponse.json(data);
    }

    catch (error) {
        console.error("Erro ao ler o arquivo JSON", error);
        return NextResponse.json({ mesag: "Erro ao ler o arquivo produtos" }, { status: 500 });
    }

}

