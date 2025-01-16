"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const cart = useAppSelector((state) => state.counter.count);
  return (
    <div>
      <div className="flex flex-wrap p-2">
        <SimpleWidget
          title={`${cart}`}
          subtitle="Productos agregados"
          label="Contador"
          icon={<IoCartOutline size={70} className="text-blue-600" />}
          href="/dashboard/counter"
        />
        <SimpleWidget
          title={`${cart}`}
          subtitle="Productos agregados"
          label="Contador"
          icon={<IoCartOutline size={70} className="text-blue-600" />}
          href="/dashboard/counter"
        />
        <SimpleWidget
          title={`${cart}`}
          subtitle="Productos agregados"
          label="Contador"
          icon={<IoCartOutline size={70} className="text-blue-600" />}
          href="/dashboard/counter"
        />
      </div>
    </div>
  );
};
