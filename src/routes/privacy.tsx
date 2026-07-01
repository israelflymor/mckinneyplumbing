import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/site/LegalLayout";
import { business } from "@/config/business";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${business.legalName}` },
      {
        name: "description",
        content: `Privacy policy for ${business.legalName}, explaining how we collect, use, and protect your information.`,
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 1, 2026">
      <LegalSection heading="1. Introduction & Scope">
        <p>
          {business.legalName} ("we," "us," "our," or "Company") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and otherwise process information about you in connection
          with our website ({business.siteUrl}), services, and customer
          interactions.
        </p>
        <p>
          This policy applies to all individuals who interact with us, including
          website visitors, quote requesters, service customers, and communication
          recipients. Please read this policy carefully. If you do not agree with
          our privacy practices, please do not use our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>
          We collect information in the following ways:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Information You Provide:</strong> When you request a quote,
            schedule service, contact us via phone or email, or submit forms, we
            collect information such as your name, phone number, email address,
            vehicle details (year, make, model), service requested, and any
            additional details you provide.
          </li>
          <li>
            <strong>Communication Data:</strong> We retain records of phone calls,
            emails, text messages (SMS/MMS), and correspondence to maintain service
            quality and resolve disputes.
          </li>
          <li>
            <strong>Transaction Data:</strong> If you request service, we collect
            information related to that transaction, including vehicle condition,
            parts used, labor performed, and payment information (processed securely
            via third-party processors — we do not store raw credit card data).
          </li>
          <li>
            <strong>Technical Data:</strong> When you visit our website, we
            automatically collect limited technical information including your IP
            address, browser type, pages visited, and referring URL through standard
            web analytics.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> We use cookies and similar
            technologies to understand user preferences and improve our website
            experience.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            To respond to and fulfill your service requests, quotes, and
            inquiries
          </li>
          <li>
            To schedule and perform automotive services and provide related
            updates
          </li>
          <li>
            To communicate with you about your service status, invoices,
            warranties, and follow-up maintenance
          </li>
          <li>
            To improve our website, services, and customer experience through
            analytics and feedback
          </li>
          <li>
            To comply with legal obligations, tax requirements, and industry
            regulations
          </li>
          <li>
            To prevent fraud, unauthorized use, and other illegal activities
          </li>
          <li>
            To send promotional materials and service updates (only with your
            prior consent or where legally permissible)
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Communications & Opt-Out">
        <p>
          If we communicate with you via phone, email, or SMS/text message
          regarding your service or request, you acknowledge that such
          communications are necessary for service delivery. You may opt out of
          non-essential communications by replying "STOP" to any text message or
          by contacting us directly at {business.email} or {business.phoneHref}.
        </p>
        <p>
          Standard message and data rates may apply for text messages. We will
          not send you unsolicited marketing messages without your express
          consent.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Sharing & Disclosure">
        <p>
          We do not sell, trade, or rent your personal information to third
          parties for marketing purposes. However, we may share information in
          the following limited circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> With trusted vendors who assist
            us in providing services (e.g., payment processors, scheduling
            software, communication platforms) under confidentiality agreements
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law, court
            order, or government request
          </li>
          <li>
            <strong>Business Transfers:</strong> If we merge, are acquired, or
            sell assets, your information may be transferred as part of that
            transaction
          </li>
          <li>
            <strong>Safety & Fraud Prevention:</strong> To protect the rights,
            property, and safety of {business.legalName}, our users, and the
            public
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Data Security & Retention">
        <p>
          We implement reasonable physical, technical, and administrative
          safeguards to protect your information from unauthorized access,
          alteration, and disclosure. However, no data transmission over the
          internet is 100% secure, and we cannot guarantee absolute security.
        </p>
        <p>
          We retain personal information for as long as necessary to provide
          services, comply with legal obligations, and resolve disputes. Service
          records and quotes are typically retained for 7 years in accordance
          with standard automotive industry practices and tax requirements.
        </p>
      </LegalSection>

      <LegalSection heading="7. Your Privacy Rights">
        <p>
          Depending on your location, you may have the following rights:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Right to Access:</strong> You may request a copy of the
            personal information we hold about you
          </li>
          <li>
            <strong>Right to Correct:</strong> You may request that we correct
            inaccurate or incomplete information
          </li>
          <li>
            <strong>Right to Delete:</strong> You may request deletion of your
            information (subject to legal retention obligations)
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> You may opt out of non-essential
            communications and data processing
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at {business.email} with
          "Privacy Request" in the subject line. We will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection heading="8. Cookies & Tracking Technologies">
        <p>
          Our website uses cookies and similar tracking technologies to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remember your preferences and login information</li>
          <li>Track website analytics and user behavior</li>
          <li>Provide personalized content and recommendations</li>
        </ul>
        <p>
          You may control cookies through your browser settings. Disabling cookies
          may affect the functionality of our website. We do not respond to
          "Do Not Track" signals at this time.
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-Party Links & Services">
        <p>
          Our website may contain links to third-party websites and services that
          are not operated by us. This Privacy Policy does not apply to those
          third-party sites, and we are not responsible for their privacy
          practices. We encourage you to review the privacy policies of any
          third-party services before providing personal information.
        </p>
      </LegalSection>

      <LegalSection heading="10. Children's Privacy">
        <p>
          Our services are not intended for individuals under 18 years of age.
          We do not knowingly collect personal information from minors. If we
          become aware that we have collected information from a minor, we will
          delete such information promptly.
        </p>
      </LegalSection>

      <LegalSection heading="11. California Privacy Rights (CCPA)">
        <p>
          If you are a California resident, you have additional rights under the
          California Consumer Privacy Act (CCPA), including the right to know what
          personal information is collected, the right to delete, and the right to
          opt-out of any "sale" or "sharing" of personal information (as defined
          by CCPA). We do not sell personal information to third parties.
        </p>
      </LegalSection>

      <LegalSection heading="12. Policy Updates">
        <p>
          We may update this Privacy Policy periodically to reflect changes in our
          practices, technology, legal requirements, or other factors. We will
          notify you of material changes by posting the updated policy on our
          website and updating the "Last Updated" date. Your continued use of our
          services after such notification constitutes your acceptance of the
          revised policy.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact Information">
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or our privacy practices, please contact us:
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
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
