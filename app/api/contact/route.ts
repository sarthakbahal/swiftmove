import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  service: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();

  if (!name || !phone || !service) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  console.log("New lead:", { name, phone, service });

  return NextResponse.json(
    { success: true, message: "Request received" },
    { status: 200 }
  );
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}

export function PUT() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}

export function DELETE() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  );
}
