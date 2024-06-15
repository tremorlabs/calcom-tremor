"use client"

import { BarChart } from "@/components/BarChart"
import { AreaChart } from "@/components/AreaChart";


// based on cal.com's publicly available data

const data =
  [
    { month: "June, 2021", "Distinct values of userId": 7 },
    { month: "July, 2021", "Distinct values of userId": 29 },
    { month: "August, 2021", "Distinct values of userId": 33 },
    { month: "September, 2021", "Distinct values of userId": 322 },
    { month: "October, 2021", "Distinct values of userId": 489 },
    { month: "November, 2021", "Distinct values of userId": 496 },
    { month: "December, 2021", "Distinct values of userId": 733 },
    { month: "January, 2022", "Distinct values of userId": 1099 },
    { month: "February, 2022", "Distinct values of userId": 1241 },
    { month: "March, 2022", "Distinct values of userId": 1288 },
    { month: "April, 2022", "Distinct values of userId": 1427 },
    { month: "May, 2022", "Distinct values of userId": 1463 },
    { month: "June, 2022", "Distinct values of userId": 1304 },
    { month: "July, 2022", "Distinct values of userId": 1460 },
    { month: "August, 2022", "Distinct values of userId": 1531 },
    { month: "September, 2022", "Distinct values of userId": 2423 },
    { month: "October, 2022", "Distinct values of userId": 3065 },
    { month: "November, 2022", "Distinct values of userId": 3542 },
    { month: "December, 2022", "Distinct values of userId": 3481 },
    { month: "January, 2023", "Distinct values of userId": 5269 },
    { month: "February, 2023", "Distinct values of userId": 5734 },
    { month: "March, 2023", "Distinct values of userId": 6882 },
    { month: "April, 2023", "Distinct values of userId": 6877 },
    { month: "May, 2023", "Distinct values of userId": 8061 },
    { month: "June, 2023", "Distinct values of userId": 8241 },
    { month: "July, 2023", "Distinct values of userId": 8880 },
    { month: "August, 2023", "Distinct values of userId": 10062 },
    { month: "September, 2023", "Distinct values of userId": 11125 },
    { month: "October, 2023", "Distinct values of userId": 12761 },
    { month: "November, 2023", "Distinct values of userId": 13536 },
    { month: "December, 2023", "Distinct values of userId": 13039 },
    { month: "January, 2024", "Distinct values of userId": 17057 },
    { month: "February, 2024", "Distinct values of userId": 18773 },
    { month: "March, 2024", "Distinct values of userId": 20549 },
    { month: "April, 2024", "Distinct values of userId": 22767 },
    { month: "May, 2024", "Distinct values of userId": 24649 }
  ]


export default function Home() {
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
      <AreaChart
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
