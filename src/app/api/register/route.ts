import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/connect";
import { hashFunction } from "@/src/utils/hashFunction";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await hashFunction(password);

    const user = await db.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        // role is optional, default is USER
      },
    });

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("Error in POST /api/register:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
