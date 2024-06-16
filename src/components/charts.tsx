"use client"

import { BarChart } from "@/components/BarChart"
import { AreaChart } from "@/components/AreaChart";
import { MonthlyActiveUser } from "../app/page";

type ChartsProps = {
    data: MonthlyActiveUser[]
}

export default async function Charts({data}: ChartsProps){

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
        onValueChange={(v) => console.log(v)}
        xAxisLabel="Month"
        yAxisLabel="Active users"
      />
      <AreaChart
        className="h-[450px]"
        data={data}
        index="month"
        categories={["Monthly active users"]}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat("us").format(number).toString()}`
        }
        onValueChange={(v) => console.log(v)}
        xAxisLabel="Month"
        yAxisLabel="Active users"
      />
    </>
  );
}
