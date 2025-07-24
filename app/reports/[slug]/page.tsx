"use client";

import { useEffect, useState } from "react";
import { Report } from "@/types/report";

export default function Reports({ params }: { params: { slug: string } }) {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch(`/api/reports`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug: params.slug }),
        });

        const result = await res.json();

        if (!res.ok) {
          console.error(result.error);
        } else {
          setReport(result.report);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    fetchReports();
  }, [params.slug]);

  return (
    <div className="p-4">
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: report?.report || "" }}
      />

      <p className="text-sm text-gray-600">
        Created at: {new Date(report?.created_at || "").toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-600">
        Live: {report?.live ? "Yes" : "No"}
      </p>
    </div>
  );
}