import { NextRequest, NextResponse } from "next/server";

const targetBaseURL =
  process.env.BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "http://localhost:1337";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

async function proxyRequest(req: NextRequest, context: RouteContext) {
  const { path } = await context.params;
  const pathValue = path.join("/");
  const incomingUrl = new URL(req.url);
  const normalizedBase = targetBaseURL.replace(/\/+$/, "");
  const targetUrl = `${normalizedBase}/${pathValue}${incomingUrl.search}`;

  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("content-length");

  const apiKey = process.env.API_KEY || process.env.NEXT_PUBLIC_API_KEY || "";
  if (apiKey) {
    headers.set("X-API-KEY", apiKey);
  }

  const isBodyAllowed = req.method !== "GET" && req.method !== "HEAD";
  const body = isBodyAllowed ? await req.arrayBuffer() : undefined;

  const upstreamResponse = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
    redirect: "follow",
  });

  return new NextResponse(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: upstreamResponse.headers,
  });
}

export async function GET(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context);
}

export async function POST(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context);
}

export async function PUT(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context);
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context);
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  return proxyRequest(req, context);
}