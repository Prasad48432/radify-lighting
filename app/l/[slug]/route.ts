import { NextResponse } from "next/server";

const links: Record<string, string> = {
  neptune_fancy:
    "https://drive.google.com/drive/folders/1de8lBVOE-KuDL3Hq7qIsYA1tHZgJDlGs",
  neptune_fancy_2:
    "https://drive.google.com/drive/folders/15zvi8rZdFbW6wlIZY6ZJzFWd_WjlxcHf",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const url = links[slug];

  if (!url) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.redirect(url);
}
