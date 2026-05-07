import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" },
        { status: 401 }
      );
    }

    const body = await req.json();

    console.log("Webhook received:", body);

    /**
     * Revalidate specific paths
     */
    revalidatePath("/");
    revalidatePath("/services");
    revalidatePath("/projects");
    revalidatePath("/about");

    /**
     * Optional: tag-based revalidation
     */
    // Provide the corresponding path as the second argument to match the expected signature
    revalidateTag("services", "/services");
    revalidateTag("projects", "/projects");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}