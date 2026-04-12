import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Website terms and conditions for Mason & Wild, including use of content, liability, and governing law.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(40px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="terms-heading"
      >
        <div className="container-site">
          <p className="label-tag mb-6">Legal</p>
          <h1
            id="terms-heading"
            className="font-serif font-light text-display-2xl text-stone-900"
          >
            Terms and Conditions
          </h1>
          <p className="text-sm font-light text-stone-500 leading-relaxed mt-6 max-w-[760px]">
            Effective date: 12 April 2026
            <br />
            Last updated: 12 April 2026
          </p>
        </div>
      </section>

      <section className="section-sm" aria-label="Terms and conditions content">
        <div className="container-site">
          <article className="legal-shell legal-prose">
            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions govern your access to and use of the Mason &amp; Wild
              website. This website is owned and operated by <strong>Crew Up Pty Ltd</strong>,
              registration number <strong>K2025281605</strong>, trading as <strong>Crew Up Travel</strong>
              and <strong>Mason &amp; Wild</strong>.
            </p>
            <p>
              By accessing or using this website, you agree to be bound by these Terms and
              Conditions. If you do not agree, you should not use the website.
            </p>

            <h2>2. Website purpose</h2>
            <p>
              The website is provided for general informational, marketing, and enquiry purposes
              relating to luxury travel services and related offerings.
            </p>
            <p>
              Content on the website does not constitute a binding offer capable of acceptance
              unless expressly stated otherwise in writing.
            </p>

            <h2>3. No travel booking formed on the website</h2>
            <p>
              Submitting an enquiry, contact form, or newsletter signup through the website does
              not create a binding booking, supplier contract, or travel agreement.
            </p>
            <p>
              Any booking, travel arrangement, or paid service will be subject to separate
              proposal, confirmation, invoice, supplier terms, and booking conditions where
              applicable.
            </p>

            <h2>4. Accuracy of website content</h2>
            <p>
              We aim to keep the website content accurate and up to date, but we do not warrant
              that all content is complete, current, error-free, or suitable for every user or
              purpose.
            </p>
            <p>
              Destination information, property details, inclusions, availability, pricing
              indications, and travel experiences may change without notice.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              Unless otherwise stated, all content on this website, including text, design
              elements, branding, logos, graphics, layout, and original written content, is owned
              by or licensed to Crew Up Pty Ltd.
            </p>
            <p>
              You may not reproduce, republish, distribute, modify, exploit, or use website
              content for commercial purposes without prior written permission.
            </p>

            <h2>6. Permitted use</h2>
            <p>You agree to use the website only for lawful purposes.</p>
            <ul>
              <li>Do not attempt unauthorised access to website systems.</li>
              <li>Do not introduce malicious code, viruses, or harmful material.</li>
              <li>Do not scrape or extract data from the website without permission.</li>
              <li>Do not use the website in a fraudulent, unlawful, or abusive manner.</li>
            </ul>

            <h2>7. Third-party links and suppliers</h2>
            <p>
              The website may contain links to third-party websites, suppliers, service providers,
              or external tools. We are not responsible for the content, security, availability,
              or practices of those third-party services.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Crew Up Pty Ltd will not be liable for
              direct, indirect, incidental, consequential, or special loss or damage arising out
              of or in connection with website use, downtime, technical interruption, cyber
              incidents, or reliance on website content prior to formal booking confirmation.
            </p>
            <p>
              Nothing in these Terms excludes liability where such exclusion is unlawful.
            </p>

            <h2>9. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless Crew Up Pty Ltd, its directors, officers,
              employees, and service providers from claims, losses, damages, liabilities, and
              expenses arising from misuse of the website or breach of these Terms.
            </p>

            <h2>10. Privacy and cookies</h2>
            <p>
              Your use of the website is also subject to our <Link href="/privacy">Privacy Policy</Link>
              and cookie practices as made available on the website.
            </p>

            <h2>11. Website availability and changes</h2>
            <p>
              We may suspend, withdraw, restrict, update, or change any part of the website at any
              time without notice. We do not guarantee uninterrupted or error-free access.
            </p>

            <h2>12. Electronic communications</h2>
            <p>
              By contacting us through the website or by email, you consent to receiving
              communications from us electronically for purposes related to your enquiry, service
              request, or booking administration.
            </p>

            <h2>13. Consumer protection and travel contracting</h2>
            <p>
              Where applicable, separate booking terms, supplier terms, and consumer-facing
              contractual terms govern the purchase of travel services.
            </p>
            <p>
              Nothing on this website is intended to limit rights you may have under applicable
              consumer protection law where those rights cannot lawfully be excluded.
            </p>

            <h2>14. Governing law</h2>
            <p>These Terms and Conditions are governed by the laws of the Republic of South Africa.</p>

            <h2>15. Dispute resolution</h2>
            <p>
              If a dispute arises relating to the website, the parties will first attempt to
              resolve it in good faith through direct engagement.
            </p>
            <p>
              If unresolved, either party may pursue remedies available under applicable South
              African law.
            </p>

            <h2>16. Contact details</h2>
            <p>
              <strong>Crew Up Pty Ltd</strong>
              <br />
              Trading as <strong>Crew Up Travel</strong> and <strong>Mason &amp; Wild</strong>
              <br />
              46 Doordrift Road, Constantia, Cape Town, 7806, South Africa
              <br />
              <strong>Email:</strong> <a href="mailto:private@masonandwild.com">private@masonandwild.com</a>
              <br />
              <strong>Telephone:</strong> +27 (0) 87 550 1882
            </p>

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


