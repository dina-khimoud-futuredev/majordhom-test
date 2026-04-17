import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const data = await req.json();

    const contact = await prisma.contact.create({
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            message: data.message,
            availabilities: {
                create: data.dispos.map((d: any) => ({
                    day: d.day,
                    hour: d.hour,
                })),
            },
        },
    });

    return NextResponse.json(contact);
}




export async function GET() {
    const contacts = await prisma.contact.findMany({
        include: {
            availabilities: true,
        },
    });

    return NextResponse.json(contacts);
}


