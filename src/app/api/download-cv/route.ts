import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Arpit_Joshi-CV.pdf");

  try {
    if (!fs.existsSync(filePath)) {
      return new NextResponse(
        "Error: CV file not found. Please add 'Arpit_Joshi-CV.pdf' to the 'public' directory at the root of your project.", 
        { 
          status: 404,
          headers: { 'Content-Type': 'text/plain' }
        }
      );
    }

    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Arpit_Joshi-CV.pdf"',
        "Content-Length": file.length.toString(),
      },
    });
  } catch (error) {
    console.error("CV Download Error:", error);
    return new NextResponse(
      "An internal server error occurred while trying to download the CV.", 
      { status: 500 }
    );
  }
}
