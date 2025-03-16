"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/component/Loading";

interface Project {
  id: string;
  image: string;
  title: string;
  contents: string;
}

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) {
          throw new Error("Project not found");
        }
        const data: Project = await res.json();
        setProject(data);
      } catch (error) {
        console.error(error);
        router.push("/404"); // Redirect to 404 if project not found
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  if (loading) return <Loading />;
  if (!project) return <p>Project not found</p>;

  return (
    <div className="pt-20 px-5">
      <h1 className=" text-4xl">Project</h1>
      <img src={project.image} alt={project.title} className="" />
      <h1 className="">{project.title}</h1>
      <p className="t">{project.contents}</p>
    </div>
  );
};

export default ProjectPage;
