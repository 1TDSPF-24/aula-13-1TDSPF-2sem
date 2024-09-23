import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');

        const data = JSON.parse(file);
        return NextResponse.json(data);

    } catch (error) {

        console.error("Error ao ler o arquivo Json:", error);
        return NextResponse.json({ message: "Erro ao ler o arquivo produtos" }, { status: 500 });

    }

}