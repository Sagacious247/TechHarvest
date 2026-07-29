import ModuleCard from "./ModuleCard";
import { Module } from "@/types/module";

interface Props {
    modules: Module[];

    onEdit: (module: Module) => void;

    onDelete: (module: Module) => void;
}

export default function ModulesGrid({
    modules,
    onEdit,
    onDelete,
}: Props) {

    return (

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {modules.map((module) => (

                <ModuleCard
                    key={module._id}
                    module={module}
                    lessonCount={0}
                    onEdit={() => onEdit(module)}
                    onDelete={() => onDelete(module)}
                />

            ))}

        </div>

    );

}