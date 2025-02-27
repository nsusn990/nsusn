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
  const url = `https://api.airtable.com/v0/apprimUI1qE3a87ae/MatchMaking`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer patEe8jxR2Y1Qm2F8.a9c41563f008e74377af47beed3262df812ef8f747cdb9eaade3a01170c1314d`,
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
  const url = `https://api.airtable.com/v0/apprimUI1qE3a87ae/MatchMaking?maxRecords=3&view=Grid%20view`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer patEe8jxR2Y1Qm2F8.a9c41563f008e74377af47beed3262df812ef8f747cdb9eaade3a01170c1314d`,
    },
  });

  const data = (await response.json()) as Airtablerecord;

  return data.records;
}
