"use client"

import { BarChart } from "@/components/BarChart"
import {
    Data,
    // MonthlyActiveUser 
} from "../app/page";
import { capitalize } from "@/lib/utils";

type ChartsProps = {
    data: Data[]
}

export default function Charts({ data }: ChartsProps) {
    const index = Object.keys(data[0])[0]
    const category = Object.keys(data[0])[1]
    return (
        <>
            <BarChart
                className="h-[450px]"
                data={data}
                index={index}
                categories={[category]}
                valueFormatter={(number: number) =>
                    `${Intl.NumberFormat("us").format(number).toString()}`
                }
                // onValueChange={(v) => console.log(v)}
                xAxisLabel={capitalize(index)}
                yAxisLabel={capitalize(category)}
            />
        </>
    );
}
