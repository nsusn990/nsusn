// app/reports/[slug]/page.tsx
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent } from "@/components/ui/card";

export default async function ReportPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    return <div className="p-4">Report not found.</div>;
  }

  return (
    <div className="p-4">
      <Card className="prose max-w-none">
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: data.report }} />
          <p className="text-sm text-gray-600 mt-4">
            Created at: {new Date(data.created_at).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600">Live: {data.live ? "Yes" : "No"}</p>
        </CardContent>
      </Card>
    </div>
  );
}