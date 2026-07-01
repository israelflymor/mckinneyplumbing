import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${business.legalName}` },
      {
        name: "description",
        content: `Terms and conditions governing use of the ${business.legalName} website, services, and automotive repair work.`,
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="July 1, 2026"
    >
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          By accessing or using the website, services, or engaging with{" "}
          {business.legalName} ("Company," "we," "us," or "our"), you agree to be
          bound by these Terms & Conditions ("Terms"). If you do not agree to all
          terms and conditions outlined herein, you must discontinue use of our
          website and services immediately.
        </p>
        <p>
          These Terms apply to all website visitors, service customers, quote
          requesters, and individuals communicating with us via phone, email, SMS,
          or other channels.
        </p>
      </LegalSection>

      <LegalSection heading="2. Website Use & Intellectual Property">
        <p>
          Our website and all content thereon—including text, images, videos,
          logos, graphics, code, and design—are the exclusive property of{" "}
          {business.legalName} or its licensors and are protected by copyright,
          trademark, and other intellectual property laws.
        </p>
        <p>
          You may view and download content for personal, non-commercial use only.
          You may not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Reproduce, distribute, or transmit any content without written
            permission
          </li>
          <li>Modify or create derivative works from our content</li>
          <li>
            Use our content for commercial purposes or in competition with our
            business
          </li>
          <li>Remove or alter copyright, trademark, or other proprietary notices</li>
          <li>Sell, license, or exploit our intellectual property</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Service Description & Limitations">
        <p>
          {business.legalName} provides automotive repair, maintenance, and
          diagnostic services in the {business.serviceArea.primary} area and
          surrounding regions. Service areas, availability, and capabilities may
          vary.
        </p>
        <p>
          All information presented on our website is for general informational
          purposes and does not constitute professional mechanical advice. Every
          vehicle, repair, and situation is unique. We recommend consulting with
          our experienced technicians for personalized guidance.
        </p>
      </LegalSection>

      <LegalSection heading="4. Quotes, Estimates & Pricing">
        <p>
          <strong>Online Quote Requests:</strong> Quotes provided through our
          website or initial phone estimates are preliminary estimates only and do
          not constitute binding contracts or final pricing. Estimates are based on
          general information you provide and may change based on:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Physical inspection of your vehicle</li>
          <li>Discovery of additional damage or worn components</li>
          <li>Current parts availability and pricing</li>
          <li>Changes in labor scope or vehicle condition</li>
        </ul>
        <p>
          <strong>Final Pricing:</strong> Final pricing will be provided after a
          complete diagnostic inspection and before any work begins. You will
          receive a detailed written estimate that includes parts, labor,
          diagnostic fees, and any applicable taxes or surcharges. We will not
          proceed with work without your written or verbal authorization.
        </p>
        <p>
          <strong>Additional Charges:</strong> If unforeseen repairs are
          discovered during service, we will contact you with an updated estimate
          and request approval before proceeding. No additional work will be
          performed without your consent.
        </p>
      </LegalSection>

      <LegalSection heading="5. Service Conditions & Vehicle Acceptance">
        <p>
          By bringing your vehicle to {business.legalName}, you authorize us to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Inspect the vehicle thoroughly</li>
          <li>Perform diagnostic testing</li>
          <li>Take photographs or videos for documentation</li>
          <li>Test-drive the vehicle as necessary for diagnosis and verification</li>
          <li>Perform agreed-upon repairs per written estimates</li>
        </ul>
        <p>
          You acknowledge that you are the owner or authorized representative with
          full authority to authorize service work. Vehicles left without
          authorization or payment may be stored at the owner's expense ($25/day
          or as posted).
        </p>
      </LegalSection>

      <LegalSection heading="6. Parts, Labor & Warranty">
        <p>
          <strong>Parts Sourcing:</strong> We use OEM (Original Equipment
          Manufacturer), OEM-equivalent, aftermarket, and remanufactured parts
          depending on availability, your budget, and recommendations. We will
          inform you of the part type and source as part of your estimate.
        </p>
        <p>
          <strong>Labor Warranty:</strong> Labor on most services is warranted for
          30 days or 1,000 miles from the date of service, whichever comes first,
          provided the issue is directly related to our workmanship. Warranties do
          not cover normal wear, damage from misuse, or issues outside the scope
          of the original repair.
        </p>
        <p>
          <strong>Parts Warranty:</strong> Parts are warranted according to
          manufacturer specifications and part type:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>OEM Parts:</strong> Manufacturer's warranty (typically 12
            months or 12,000 miles)
          </li>
          <li>
            <strong>Aftermarket Parts:</strong> Supplier warranty (typically 12
            months or unlimited miles)
          </li>
          <li>
            <strong>Remanufactured Parts:</strong> Supplier warranty (typically 12
            months or unlimited miles)
          </li>
        </ul>
        <p>
          Warranty details will be clearly documented on your service invoice.
          Warranty claims must be reported within 30 days of discovery of the
          defect.
        </p>
      </LegalSection>

      <LegalSection heading="7. Payment Terms">
        <p>
          Payment is due upon service completion unless other arrangements are
          made in writing. We accept cash, credit cards, debit cards, and checks
          (with valid ID).
        </p>
        <p>
          Failed or disputed payments may result in:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Withholding of the vehicle</li>
          <li>
            Storage fees at $25/day or as posted for vehicles not picked up
            within 10 days
          </li>
          <li>Collection action and attorney fees</li>
          <li>Referral to a collection agency</li>
        </ul>
        <p>
          All prices are subject to applicable sales tax and any surcharges
          related to your vehicle's condition or complexity.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {business.legalName} shall not
          be liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Indirect, incidental, consequential, or punitive damages (including
            loss of business, income, or profits)
          </li>
          <li>
            Damage, loss, or injury to your vehicle or property (except where
            directly caused by our gross negligence)
          </li>
          <li>
            Delays in service completion or vehicle return (we will make
            reasonable efforts to meet estimated timelines)
          </li>
          <li>Issues discovered after vehicle delivery or return</li>
        </ul>
        <p>
          Our total liability for any claim shall not exceed the amount paid for
          the specific service that gave rise to the claim.
        </p>
      </LegalSection>

      <LegalSection heading="9. Vehicle Pickup & Storage">
        <p>
          <strong>Pickup Timeline:</strong> Unless otherwise agreed, vehicles must
          be picked up within 5 business days of service completion. We will
          provide notice when your vehicle is ready.
        </p>
        <p>
          <strong>Storage Fees:</strong> Vehicles remaining on our property beyond
          5 business days will incur a storage charge of $25/day or as posted.
          After 30 days of unclaimed storage, we may pursue sale, donation, or
          other disposition in accordance with state law.
        </p>
        <p>
          <strong>Vehicle Condition:</strong> We make reasonable efforts to
          protect your vehicle while in our care. However, parking lot damage,
          theft, or natural disaster may occur beyond our control. We recommend
          carrying comprehensive insurance.
        </p>
      </LegalSection>

      <LegalSection heading="10. Diagnostic Fees & Inspection Charges">
        <p>
          Diagnostic services, inspections, and computer scanning may incur fees
          payable at the time of service, even if you elect not to proceed with
          repairs. Diagnostic fees may be credited toward repair costs if you
          authorize work with us.
        </p>
      </LegalSection>

      <LegalSection heading="11. Service-Related Communications">
        <p>
          We may contact you via phone, email, or text message (SMS/MMS) regarding
          your service request, quote status, repairs in progress, invoice
          reminders, or warranty follow-up. By providing contact information, you
          consent to receive such communications.
        </p>
        <p>
          Standard message and data rates may apply for SMS communications. You
          may opt out of non-essential communications by replying "STOP" or
          contacting us at {business.email}.
        </p>
      </LegalSection>

      <LegalSection heading="12. Disclaimer of Warranties">
        <p>
          EXCEPT AS EXPRESSLY PROVIDED HEREIN, {business.legalName.toUpperCase()}{" "}
          MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING NO WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT.
        </p>
        <p>
          WE DO NOT WARRANT THAT OUR WEBSITE OR SERVICES WILL BE UNINTERRUPTED,
          ERROR-FREE, OR SECURE. USE OF OUR WEBSITE AND SERVICES IS AT YOUR SOLE
          RISK.
        </p>
      </LegalSection>

      <LegalSection heading="13. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless {business.legalName},
          its owners, employees, and agents from any claims, damages, losses,
          liabilities, and expenses (including attorney fees) arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your use of our website or services</li>
          <li>Your violation of these Terms</li>
          <li>Your vehicle's condition or history</li>
          <li>Your breach of any law or third-party rights</li>
        </ul>
      </LegalSection>

      <LegalSection heading="14. Prohibited Conduct">
        <p>
          You agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Harass, threaten, or abuse our staff or other customers</li>
          <li>Attempt to gain unauthorized access to our systems or data</li>
          <li>Transmit viruses, malware, or harmful code</li>
          <li>Interfere with or disrupt our website or services</li>
          <li>
            Use automated tools, bots, or scripts to scrape or harvest our
            website
          </li>
          <li>Impersonate others or misrepresent your authority</li>
        </ul>
        <p>
          Violation may result in termination of service, legal action, and
          referral to law enforcement.
        </p>
      </LegalSection>

      <LegalSection heading="15. Dispute Resolution & Governing Law">
        <p>
          These Terms shall be governed by the laws of the State of{" "}
          {business.address.region === "GA" ? "Georgia" : business.address.region}
          , United States, without regard to conflict of law principles.
        </p>
        <p>
          Any disputes arising from these Terms or your use of our services shall
          be resolved through:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Good Faith Negotiation:</strong> We will attempt to resolve
            disputes informally within 30 days of written notice.
          </li>
          <li>
            <strong>Mediation:</strong> If negotiation fails, disputes may be
            submitted to mediation before pursuing litigation.
          </li>
          <li>
            <strong>Litigation:</strong> Any lawsuit shall be filed exclusively in
            the state or federal courts located in {business.address.city},{" "}
            {business.address.region}, and you waive any objection to venue or
            jurisdiction.
          </li>
        </ol>
      </LegalSection>

      <LegalSection heading="16. Modification & Severability">
        <p>
          We reserve the right to modify these Terms at any time. Material changes
          will be posted on our website with an updated date. Your continued use
          of our services constitutes acceptance of the revised Terms.
        </p>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable,
          the remaining provisions shall remain in full force and effect.
        </p>
      </LegalSection>

      <LegalSection heading="17. Entire Agreement">
        <p>
          These Terms, together with our Privacy Policy and any written service
          agreements, constitute the entire agreement between you and{" "}
          {business.legalName} and supersede all prior and contemporaneous
          agreements, negotiations, and understandings, whether written or oral.
        </p>
      </LegalSection>

      <LegalSection heading="18. Contact Information">
        <p>
          For questions about these Terms & Conditions, or to report violations,
          please contact us:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <strong>Email:</strong> {business.email}
          </li>
          <li>
            <strong>Phone:</strong> {business.phoneDisplay}
          </li>
          <li>
            <strong>Mail:</strong>
            <br />
            {business.legalName}
            <br />
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region}{" "}
            {business.address.postalCode}
            <br />
            {business.address.country}
          </li>
          <li>
            <strong>Hours:</strong>
            <br />
            {business.hours.map((h) => (
              <div key={h.day}>
                {h.day}: {h.time}
              </div>
            ))}
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
