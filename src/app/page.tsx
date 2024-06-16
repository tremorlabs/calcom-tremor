"use client"

import React, { useEffect, useState } from "react";
import { BarChart } from "@/components/BarChart";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const result = await res.json();
      setData(result.data);
    }

    fetchData();
  }, []);

  if (!data) return <div className="p-4 sm:p-10 flex flex-col items-center h-[450px] justify-center text-sm text-gray-600">Loading...</div>;

  return (
    <main className="p-4 sm:p-10 space-y-6">
      <BarChart
        className="h-[450px]"
        data={data}
        index="month"
        categories={["Distinct values of userId"]}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
        xAxisLabel="Month"
        yAxisLabel="Active users"
      />
    </main>
  );
}
