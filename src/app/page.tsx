"use server"
import Charts from "../components/charts";

type RawMonthlyActiveUser = {
    month: string
    "Distinct values of userId": string
}

export type MonthlyActiveUser = {
    month: string
    "Monthly active users": number
}

async function getData(): Promise<MonthlyActiveUser[]> {
    const res = await fetch('https://t.co/Uq262K4jai')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data: RawMonthlyActiveUser[] = await res.json()

    return data.map(item => ({ ...item, "Monthly active users": parseInt(item['Distinct values of userId'].replace(/,/g, ''), 10) }))
}

export default async function Home() {
    const data = await getData()

    return (
        <main className="p-4 sm:p-10 space-y-6">
            <Charts data={data} />
        </main>
    );
}
