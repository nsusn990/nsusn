import { AIRTABLE_API_KEY, AIRTABLE_APP_ID } from "@/config";
import { Airtablerecord } from "@/types";

export async function insertData({
  name,
  email,
  companyName,
  linkedin,
  description,
}: {
  name: string;
  email: string;
  companyName: string;
  linkedin: string;
  description: string;
}) {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_APP_ID}/MatchMaking`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            name,
            email,
            companyName,
            linkedin,
            description,
          },
        },
      ],
    }),
  });

  return response.json();
}

export async function getData() {
  const url = `https://api.airtable.com/v0/${AIRTABLE_APP_ID}/MatchMaking?maxRecords=3&view=Grid%20view`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
  });

  const data = (await response.json()) as Airtablerecord;

  return data.records;
}
