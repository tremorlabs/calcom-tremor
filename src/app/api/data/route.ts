import { NextResponse } from "next/server";

interface MonthlyData {
  month: string;
  "Distinct values of userId": string;
}

export async function GET() {
  const response = await fetch(
    "https://cal.metabaseapp.com/public/question/81ced336-2644-47f3-ae2f-6bda42f2399d.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  const formattedData = data.map((item: MonthlyData) => ({
    month: item.month,
    "Distinct values of userId": parseInt(
      item["Distinct values of userId"].replace(",", ""),
      10
    ),
  }));

  return NextResponse.json({ data: formattedData });
}
