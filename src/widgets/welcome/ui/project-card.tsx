import type { Project } from "@/shared/lib/data";
import { ExternalLink, Github, Smartphone } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels: Record<string, { label: string; color: string }> = {
  web: {
    label: "Web",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  mobile: {
    label: "Mobile",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  bot: {
    label: "Bot",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cat = categoryLabels[project.category];
  const repoLink = project.gitlab || project.github;
  const isGitHub = !!project.github;

  return (
    <div className="group rounded-xl border border-text-1/20 bg-background-1/50 overflow-hidden hover:border-text-1/40 transition-all duration-300 hover:shadow-lg hover:shadow-text-1/5">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-background-2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${cat.color}`}
          >
            {cat.label}
          </span>
          {project.featured && (
            <span className="rounded-full bg-text-1 px-2.5 py-1 text-xs font-semibold text-background-2">
              Featured
            </span>
          )}
        </div>
        {project.category === "mobile" && (
          <div className="absolute bottom-3 right-3 rounded-full bg-green-500/20 p-2">
            <Smartphone size={16} className="text-green-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full bg-background-2 text-text-1 border border-text-1/20 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-background-2 text-gray-300 hover:text-text-1 hover:bg-text-1/10 transition-colors"
            >
              <Github size={16} />
              <span>{isGitHub ? "GitHub" : "GitLab"}</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-text-1 text-background-2 hover:opacity-90 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
