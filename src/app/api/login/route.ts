import { NextResponse } from 'next/server';
import { db } from '@/db/connect';
import { hashFunction, compareFunction } from '@/src/utils/hashFunction';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName, password } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 400 }
      );
    }

    const hashedPassword = await hashFunction(password);

    const newUser = await db.user.create({
      data: {
        email,
        fullName,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: 'User Created Successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in POST /api/login:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
