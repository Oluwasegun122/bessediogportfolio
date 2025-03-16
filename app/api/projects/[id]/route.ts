import { NextRequest, NextResponse } from "next/server";

// Mock Data - List of projects
const projects: Record<
  string,
  { id: string; image: string; title: string; contents: string }
> = {
  "1": {
    id: "1",
    image: "/images/project.jpg",
    title: "Project One",
    contents: "This is the content for Project One.",
  },
  "2": {
    id: "2",
    image: "/public/images/project.jpg",
    title: "Project Two",
    contents: "This is the content for Project Two.",
  },
};

// **GET Request - Fetch project details by ID**
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const project = projects[id];

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
