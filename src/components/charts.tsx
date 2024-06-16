"use client"

import { BarChart } from "@/components/BarChart"
import { MonthlyActiveUser } from "../app/page";

type ChartsProps = {
  data: MonthlyActiveUser[]
}

export default function Charts({ data }: ChartsProps) {
  return (
    <>
      <BarChart
        className="h-[450px]"
        data={data}
        index="month"
        categories={["Monthly active users"]}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}`
        }
        // onValueChange={(v) => console.log(v)}
        xAxisLabel="Month"
        yAxisLabel="Active users"
      />
    </>
  );
}
