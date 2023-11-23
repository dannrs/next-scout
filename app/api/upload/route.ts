import calculateRoleScore from "@/lib/calculateScore";
import { parseHTML } from "@/lib/parseHTML";
import { TableData } from "@/lib/types";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file: File = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const root = process.cwd();
  const path = join(root, "data", file.name);
  await writeFile(path, buffer);

  return NextResponse.json({ success: true });
}
