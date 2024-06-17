"use server"
import Charts from "../components/charts";

// type RawMonthlyActiveUser = {
//   month: string
//   "Distinct values of userId": string
// }

// export type MonthlyActiveUser = {
//   month: string
//   "Monthly active users": number
// }

// async function getData(): Promise<MonthlyActiveUser[]> {
//   const res = await fetch('https://cal.metabaseapp.com/public/question/81ced336-2644-47f3-ae2f-6bda42f2399d.json')
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data: RawMonthlyActiveUser[] = await res.json()

//   return data.map(item => ({ ...item, "Monthly active users": parseInt(item['Distinct values of userId'].replace(/,/g, ''), 10) }))
// }

type RawData = Record<string, string>

export type Data = Record<string, string | number>

async function getData(): Promise<Data[]> {
    const res = await fetch('https://cal.metabaseapp.com/public/question/81ced336-2644-47f3-ae2f-6bda42f2399d.json')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data: RawData[] = await res.json()

    const keys = Object.keys(data[0])
    return data.map(item => {
        return({
            [keys[0]]: item[keys[0]],
            [keys[1]]: parseInt(item[keys[1]].replace(/,/g, ''), 10)
        })
    })
}

export default async function Home() {
    const data = await getData()

    return (
        <main className="p-4 sm:p-10">
            <Charts data={data} />
        </main>
    );
}
