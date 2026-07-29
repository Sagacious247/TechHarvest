import StatisticCard
from "../dashboard/StatisticCard";

import {
  FolderOpen,
  PlayCircle,
  CheckCircle,
  FileClock,
} from "lucide-react";

interface Props {

  statistics: {

    totalModules: number;

    totalLessons: number;

    publishedModules: number;

    draftModules: number;

  };

}

export default function
ModuleStatistics({

  statistics,

}: Props) {

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      <StatisticCard
        title="Modules"
        value={statistics.totalModules}
        icon={<FolderOpen size={28} />}
        color="bg-indigo-600"
      />

      <StatisticCard
        title="Lessons"
        value={statistics.totalLessons}
        icon={<PlayCircle size={28} />}
        color="bg-cyan-600"
      />

      <StatisticCard
        title="Published"
        value={statistics.publishedModules}
        icon={<CheckCircle size={28} />}
        color="bg-green-600"
      />

      <StatisticCard
        title="Draft"
        value={statistics.draftModules}
        icon={<FileClock size={28} />}
        color="bg-orange-500"
      />

    </div>

  );

}