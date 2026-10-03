import { ProjectDashboard } from "@/components/project-dashboard";
import data from "@/lib/hub-data.json";

export default function Home() {
  return <ProjectDashboard data={data} />;
}
