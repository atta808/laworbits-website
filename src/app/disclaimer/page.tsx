import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | LawOrbits",
  description: "Terms of use and legal disclaimer for LawOrbits.com.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-richBlack mb-2">
          Legal Disclaimer
        </h1>
        <p className="text-gray-500 mb-10 text-sm uppercase tracking-widest">
          Last Updated: October 2025
        </p>

        <div className="prose prose-lg text-gray-700 max-w-none">
          <h3 className="text-richBlack font-serif font-bold">
            1. No Attorney-Client Relationship
          </h3>
          <p>
            The information contained on <strong>LawOrbits.com</strong> is for
            general informational purposes only. Accessing this website, reading
            our insights, or sending an email/WhatsApp message to Advocate Atta
            Ur Rehman Dhothar
            <strong> does not create an attorney-client relationship</strong>. A
            formal relationship is only established after a consultation is held
            and an engagement agreement is confirmed.
          </p>

          <h3 className="text-richBlack font-serif font-bold mt-8">
            2. Not Legal Advice
          </h3>
          <p>
            The content on this website constitutes general legal information
            based on Pakistani Law (Civil, Criminal, Corporate). It is not
            intended to be a substitute for specific professional legal advice.
            Laws in Pakistan are subject to amendment and interpretation; you
            should not act upon this information without seeking professional
            counsel regarding your specific facts and circumstances.
          </p>

          <h3 className="text-richBlack font-serif font-bold mt-8">
            3. Results & Outcomes
          </h3>
          <p>
            Past results described on this site (e.g., successful bail grants,
            property recoveries) do not guarantee a similar outcome in future
            cases. Every legal matter is unique and depends on its own merits
            and evidence.
          </p>

          <h3 className="text-richBlack font-serif font-bold mt-8">
            4. External Links
          </h3>
          <p>
            This website may contain links to third-party websites (e.g.,
            DraftDeskHub, TechNaam). LawOrbits.com is not responsible for the
            content or privacy practices of these external sites.
          </p>
        </div>
      </div>
    </div>
  );
}
