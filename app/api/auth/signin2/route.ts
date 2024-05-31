import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userName = searchParams.get('username');
  console.log('The entered Username is:', userName);
  return new Response('Hello, ' + userName);
}