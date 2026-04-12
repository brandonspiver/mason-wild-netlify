import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Mason & Wild Privacy Policy describing how personal information is collected, processed, shared, retained, and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(40px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="privacy-heading"
      >
        <div className="container-site">
          <p className="label-tag mb-6">Legal</p>
          <h1
            id="privacy-heading"
            className="font-serif font-light text-display-2xl text-stone-900"
          >
            Privacy Policy
          </h1>
          <p className="text-sm font-light text-stone-500 leading-relaxed mt-6 max-w-[760px]">
            Effective date: 12 April 2026
            <br />
            Last updated: 12 April 2026
          </p>
        </div>
      </section>

      <section className="section-sm" aria-label="Privacy policy content">
        <div className="container-site">
          <article className="legal-shell">
            <div className="legal-prose">
              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-8">
                Crew Up Pty Ltd, registration number <strong>K2025281605</strong>,
                trading as <strong>Crew Up Travel</strong> and{" "}
                <strong>Mason &amp; Wild</strong> (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), respects your privacy and is committed to
                protecting your personal information in accordance with the
                Protection of Personal Information Act 4 of 2013 (&quot;POPIA&quot;)
                and other applicable South African laws.
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                This Privacy Policy explains how we collect, use, store, share,
                and protect your personal information when you visit the Mason
                &amp; Wild website, submit an enquiry, join our mailing list,
                communicate with us through the website, or otherwise engage
                with us through the website.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                2. Who we are
              </h2>
              <div className="text-base font-light text-stone-600 leading-relaxed mb-10">
                <p>
                  <strong>Responsible Party:</strong> Crew Up Pty Ltd
                  <br />
                  <strong>Registration number:</strong> K2025281605
                  <br />
                  <strong>Trading names:</strong> Crew Up Travel and Mason &amp;
                  Wild
                  <br />
                  <strong>Website covered by this policy:</strong> Mason &amp;
                  Wild website only
                  <br />
                  <strong>Physical address:</strong> 46 Doordrift Road,
                  Constantia, Cape Town, 7806, South Africa
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:private@masonandwild.com">
                    private@masonandwild.com
                  </a>
                  <br />
                  <strong>Telephone:</strong> +27 (0) 87 550 1882
                  <br />
                  <strong>Information Officer:</strong> Information Officer
                  <br />
                  <strong>Information Officer contact:</strong>{" "}
                  <a href="mailto:private@masonandwild.com">
                    private@masonandwild.com
                  </a>
                </p>
              </div>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                3. What personal information we collect
              </h2>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>
                  identity information, such as your name, surname, title,
                  nationality, and date of birth
                </li>
                <li>
                  contact information, such as your email address, telephone
                  number, country of residence, and physical address
                </li>
                <li>
                  enquiry and travel planning information, such as travel
                  preferences, destination interests, accommodation preferences,
                  budget preferences, and special occasion information
                </li>
                <li>
                  booking and trip administration information, such as passport
                  details, travel companion details, and emergency contact
                  details
                </li>
                <li>
                  service delivery information, such as dietary requirements,
                  accessibility or mobility requirements, and limited health or
                  medical information where necessary to plan or deliver travel
                  safely
                </li>
                <li>
                  communications, such as contact form submissions, enquiry
                  details, emails, and related notes
                </li>
                <li>
                  payment and billing information, such as billing information,
                  payment confirmations, and transaction records
                </li>
                <li>
                  technical information, such as IP address, browser type,
                  device information, website usage data, and cookie-related
                  information
                </li>
                <li>
                  marketing preferences, including whether you wish to receive
                  newsletters, updates, and promotional communications
                </li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                4. How we collect your personal information
              </h2>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>
                  directly from you when you complete an enquiry form, contact
                  form, or newsletter signup form on the website
                </li>
                <li>
                  when you communicate with us through the website or by email
                  following a website enquiry
                </li>
                <li>
                  from a person acting on your behalf, such as a travel
                  companion or authorised representative, where appropriate
                </li>
                <li>
                  automatically through cookies, analytics tools, and similar
                  technologies when you browse the website
                </li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                5. Why we process your personal information
              </h2>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>to respond to website enquiries and contact requests</li>
                <li>
                  to prepare proposals, quotations, or travel concepts
                  following a website enquiry
                </li>
                <li>to administer bookings initiated through the website</li>
                <li>
                  to coordinate travel services with relevant suppliers where
                  necessary
                </li>
                <li>to process or facilitate payments</li>
                <li>
                  to communicate with you before, during, and after your trip
                  where relevant to a website-originated enquiry or booking
                </li>
                <li>to maintain, secure, and improve the website</li>
                <li>
                  to understand website traffic and performance through
                  analytics
                </li>
                <li>
                  to send newsletters, updates, and marketing communications
                  where lawful
                </li>
                <li>
                  to comply with legal, regulatory, accounting, insurance, and
                  tax obligations
                </li>
                <li>to establish, exercise, or defend legal rights</li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                6. Lawful grounds for processing
              </h2>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>you have consented</li>
                <li>
                  processing is necessary to take steps at your request before
                  entering into a contract
                </li>
                <li>
                  processing is necessary to perform a contract with you
                </li>
                <li>
                  processing is required to comply with a legal obligation
                </li>
                <li>processing protects a legitimate interest of yours</li>
                <li>
                  processing is necessary for pursuing our legitimate interests
                  or those of a third party, provided your rights do not
                  override those interests
                </li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                7. Cookies and analytics
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                The Mason &amp; Wild website uses cookies and similar
                technologies, including <strong>Google Analytics where enabled</strong>, to:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-4 space-y-2">
                <li>remember user preferences</li>
                <li>understand website traffic and visitor behaviour</li>
                <li>improve website functionality and performance</li>
                <li>support website security</li>
                <li>
                  measure the effectiveness of communications and campaigns
                </li>
              </ul>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                The website also uses a cookie banner. You can manage cookies
                through your browser settings and, where applicable, through
                the cookie controls made available on the website.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                8. Website systems and service providers
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                We may use third-party systems and service providers to operate
                the website and support enquiries, administration, and customer
                management, including:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-4 space-y-2">
                <li>
                  <strong>Google Analytics</strong> for website analytics where
                  enabled
                </li>
                <li>
                  <strong>Odoo</strong> for operational, enquiry, customer, or
                  administrative workflows
                </li>
                <li>
                  <strong>Stripe</strong> for payment processing through
                  third-party payment links
                </li>
              </ul>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                We do <strong>not</strong> store your card details on our own
                website or systems. Card payment information is handled by the
                relevant third-party payment provider.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                9. When we share your personal information
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                We may share your personal information only where reasonably
                necessary and lawful, including with:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-4 space-y-2">
                <li>
                  accommodation providers, lodges, camps, hotels, guides,
                  transfer providers, activity providers, airlines, insurers,
                  or other travel suppliers relevant to your itinerary
                </li>
                <li>payment processors and financial service providers</li>
                <li>
                  IT, website hosting, analytics, and administrative service
                  providers acting on our instructions
                </li>
                <li>
                  accountants, auditors, legal advisers, and insurers where
                  necessary
                </li>
                <li>
                  regulators, courts, law enforcement, or other third parties
                  where required by law
                </li>
              </ul>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-3">
                We do not sell your personal information.
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                Where supplier sharing is required, we aim to disclose only the
                information relevant to the service being delivered. For
                example, if you are staying at a property in Botswana, we may
                share only the information necessary for that supplier to
                deliver the booked service.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                10. International transfers
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                Because Mason &amp; Wild arranges travel in destinations
                outside South Africa, your personal information may be
                transferred to suppliers in the country or countries to which
                you are travelling, where this is necessary to deliver your
                travel arrangements.
                <br />
                <br />
                Where we transfer personal information cross-border, we will
                take reasonable steps to ensure that the recipient is subject
                to laws, binding obligations, or contractual arrangements that
                provide an adequate level of protection, or that another lawful
                basis for transfer applies.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                11. Security safeguards
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                We take appropriate, reasonable technical and organisational
                measures to protect personal information against loss, misuse,
                unauthorised access, disclosure, alteration, and destruction.
                These measures may include:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>access controls</li>
                <li>password protection</li>
                <li>secure service providers</li>
                <li>restricted internal access on a need-to-know basis</li>
                <li>
                  contractual confidentiality obligations where appropriate
                </li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                12. Retention
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected, unless a
                longer retention period is required or permitted by law.
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                Our general retention approach is as follows:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-4 space-y-2">
                <li>
                  <strong>general enquiries that do not become bookings:</strong>{" "}
                  up to 24 months
                </li>
                <li>
                  <strong>
                    client booking records, invoices, and core transaction
                    records:
                  </strong>{" "}
                  up to 7 years
                </li>
                <li>
                  <strong>
                    passport details and sensitive trip-operation information:
                  </strong>{" "}
                  only for as long as reasonably necessary for travel
                  administration, operational follow-up, insurance, legal, or
                  compliance purposes
                </li>
                <li>
                  <strong>marketing records:</strong> until you opt out,
                  withdraw consent where applicable, or the data is no longer
                  reasonably needed
                </li>
                <li>
                  <strong>technical and cookie-related data:</strong> according
                  to the applicable system settings and provider retention
                  periods
                </li>
              </ul>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                When personal information is no longer required, we will
                securely delete, destroy, anonymise, or de-identify it where
                appropriate.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                13. Direct marketing
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                We may send marketing communications about Mason &amp; Wild
                offers, news, updates, and related travel services where
                lawful.
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                This may include:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-4 space-y-2">
                <li>
                  users who actively subscribe through the newsletter signup
                  process
                </li>
                <li>
                  users who consent to receive marketing through a website form
                </li>
                <li>
                  existing clients, where marketing similar services is lawful
                  and they have not opted out
                </li>
              </ul>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                You may opt out of marketing communications at any time by using
                the unsubscribe link in the communication or by contacting us
                at{" "}
                <a href="mailto:private@masonandwild.com">
                  private@masonandwild.com
                </a>
                .
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                14. Children
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                The Mason &amp; Wild website and services are not directed at
                children, and we do not knowingly market to or contract with
                children.
                <br />
                <br />
                If we ever need to process a child&apos;s personal information
                in exceptional circumstances permitted by law, we will do so
                only where lawful and strictly necessary.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                15. Your rights
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                Subject to applicable law, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-base font-light text-stone-600 leading-relaxed mb-10 space-y-2">
                <li>
                  request access to personal information we hold about you
                </li>
                <li>
                  request correction, updating, or deletion of inaccurate,
                  incomplete, misleading, excessive, or unlawfully obtained
                  information
                </li>
                <li>object to certain processing</li>
                <li>
                  withdraw consent where processing is based on consent
                </li>
                <li>
                  request that we stop sending direct marketing communications
                </li>
                <li>lodge a complaint with the Information Regulator</li>
                <li>
                  request access to certain records in terms of the Promotion
                  of Access to Information Act, 2000 (&quot;PAIA&quot;), where
                  applicable
                </li>
              </ul>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                16. PAIA
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-4">
                Crew Up Pty Ltd maintains a PAIA manual in accordance with
                applicable law. Requests relating to access to records may be
                directed to:
              </p>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                <strong>Information Officer</strong>
                <br />
                Crew Up Pty Ltd
                <br />
                46 Doordrift Road, Constantia, Cape Town, 7806, South Africa
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:private@masonandwild.com">
                  private@masonandwild.com
                </a>
                <br />
                <strong>Telephone:</strong> +27 (0) 87 550 1882
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                17. Third-party websites
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                The website may contain links to third-party websites, supplier
                websites, or third-party tools. We are not responsible for the
                privacy practices or content of those external sites. You should
                review their privacy notices before providing personal
                information to them.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                18. Complaints
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                If you believe that we have processed your personal information
                unlawfully or in a way that infringes your rights, please
                contact us first at{" "}
                <a href="mailto:private@masonandwild.com">
                  private@masonandwild.com
                </a>{" "}
                so that we can try to resolve the issue.
                <br />
                <br />
                You may also lodge a complaint with the Information Regulator
                of South Africa.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                19. Changes to this Privacy Policy
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed mb-10">
                We may update this Privacy Policy from time to time to reflect
                changes in law, our services, website functionality, or
                business operations. The updated version will be posted on this
                page with a revised &quot;Last updated&quot; date.
              </p>

              <h2 className="font-serif font-light text-display-sm text-stone-900 mb-4">
                20. Contact us
              </h2>
              <p className="text-base font-light text-stone-600 leading-relaxed">
                <strong>Crew Up Pty Ltd</strong>
                <br />
                Trading as <strong>Crew Up Travel</strong> and{" "}
                <strong>Mason &amp; Wild</strong>
                <br />
                <strong>Attention:</strong> Information Officer
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:private@masonandwild.com">
                  private@masonandwild.com
                </a>
                <br />
                <strong>Telephone:</strong> +27 (0) 87 550 1882
                <br />
                <strong>Address:</strong> 46 Doordrift Road, Constantia, Cape
                Town, 7806, South Africa
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap items-center gap-6">
              <Link
                href="/enquire"
                className="text-2xs font-normal tracking-wide uppercase text-stone-500 border-b border-stone-300 hover:text-stone-900 hover:border-stone-900 pb-[2px] transition-colors duration"
              >
                Enquire Privately
              </Link>
              <Link
                href="/"
                className="text-2xs font-normal tracking-wide uppercase text-stone-400 border-b border-transparent hover:text-stone-700 hover:border-stone-300 pb-[2px] transition-colors duration"
              >
                Back Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}


