import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "PAIA Manual",
  description:
    "PAIA Manual for Crew Up Pty Ltd prepared in terms of section 51 of the Promotion of Access to Information Act, 2000.",
  path: "/paia",
});

export default function PaiaPage() {
  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(40px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="paia-heading"
      >
        <div className="container-site">
          <p className="label-tag mb-6">Legal</p>
          <h1
            id="paia-heading"
            className="font-serif font-light text-display-2xl text-stone-900"
          >
            PAIA Manual
          </h1>
          <p className="text-sm font-light text-stone-500 leading-relaxed mt-6 max-w-[760px]">
            Prepared in terms of section 51 of the Promotion of Access to Information Act, 2000.
            <br />
            Date of compilation / revision: 12 April 2026
          </p>
        </div>
      </section>

      <section className="section-sm" aria-label="PAIA manual content">
        <div className="container-site">
          <article className="legal-shell legal-prose">
            <p>
              <strong>Private Body:</strong> Crew Up Pty Ltd
              <br />
              <strong>Registration number:</strong> K2025281605
              <br />
              <strong>Trading names:</strong> Crew Up Travel and Mason &amp; Wild
            </p>

            <h2>1. Introduction</h2>
            <p>
              This manual is prepared in terms of section 51 of PAIA and is intended to assist any
              person who wishes to request access to records held by Crew Up Pty Ltd.
            </p>

            <h2>2. Contact details of the private body</h2>
            <p>
              <strong>Information Officer:</strong> Information Officer
              <br />
              <strong>Postal address:</strong> 46 Doordrift Road, Constantia, Cape Town, 7806,
              South Africa
              <br />
              <strong>Street address:</strong> 46 Doordrift Road, Constantia, Cape Town, 7806,
              South Africa
              <br />
              <strong>Telephone:</strong> +27 (0) 87 550 1882
              <br />
              <strong>Email:</strong> <a href="mailto:private@masonandwild.com">private@masonandwild.com</a>
            </p>

            <h2>3. Guide on PAIA</h2>
            <p>
              A guide has been compiled by the Information Regulator in terms of section 10 of
              PAIA. The guide contains information to assist persons who wish to exercise rights
              contemplated in PAIA and POPIA. Questions regarding the guide may be directed to the
              Information Regulator.
            </p>

            <h2>4. Records available in accordance with other legislation</h2>
            <p>Records may be available in terms of applicable legislation, including:</p>
            <ul>
              <li>Promotion of Access to Information Act 2 of 2000</li>
              <li>Protection of Personal Information Act 4 of 2013</li>
              <li>Companies Act 71 of 2008</li>
              <li>Income Tax Act 58 of 1962</li>
              <li>Value-Added Tax Act 89 of 1991</li>
              <li>Electronic Communications and Transactions Act 25 of 2002</li>
              <li>Labour Relations Act 66 of 1995</li>
              <li>Basic Conditions of Employment Act 75 of 1997</li>
              <li>Employment Equity Act 55 of 1998</li>
              <li>Unemployment Insurance Act 63 of 2001</li>
              <li>Compensation for Occupational Injuries and Diseases Act 130 of 1993</li>
            </ul>
            <p>This list is not exhaustive.</p>

            <h2>5. Schedule of records held by the private body</h2>
            <h3>5.1 Company records</h3>
            <ul>
              <li>Company registration documents</li>
              <li>Memorandum of incorporation</li>
              <li>Tax records and statutory records</li>
              <li>Internal policies, contracts, and agreements</li>
            </ul>

            <h3>5.2 Financial and accounting records</h3>
            <ul>
              <li>Accounting records and bank records</li>
              <li>Invoices, statements, and payment records</li>
              <li>Tax returns, budgets, and financial reports</li>
            </ul>

            <h3>5.3 Customer and client records</h3>
            <ul>
              <li>Enquiry records and correspondence</li>
              <li>Proposals, quotations, and booking records</li>
              <li>Itineraries, supplier confirmations, and support records</li>
              <li>Passport and travel administration documents where required</li>
            </ul>

            <h3>5.4 Supplier and service provider records</h3>
            <ul>
              <li>Supplier agreements and quotations</li>
              <li>Operational correspondence and service records</li>
              <li>Invoices and billing records</li>
            </ul>

            <h3>5.5 Personnel records</h3>
            <ul>
              <li>Employment contracts and remuneration records</li>
              <li>Leave, statutory, performance, and disciplinary records</li>
            </ul>

            <h3>5.6 Website and marketing records</h3>
            <ul>
              <li>Website enquiry submissions</li>
              <li>Newsletter signup records</li>
              <li>Cookie and consent records where maintained</li>
              <li>Website analytics reports and campaign records</li>
            </ul>

            <h2>6. Records automatically available without a formal request</h2>
            <ul>
              <li>Publicly available website content</li>
              <li>Published Privacy Policy</li>
              <li>Published Terms and Conditions</li>
              <li>Published contact details</li>
            </ul>

            <h2>7. Processing of personal information</h2>
            <h3>7.1 Purpose of processing</h3>
            <ul>
              <li>Responding to enquiries</li>
              <li>Preparing quotations and proposals</li>
              <li>Arranging and administering travel services</li>
              <li>Processing payments and communications</li>
              <li>Marketing where lawful</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>

            <h3>7.2 Categories of data subjects and personal information</h3>
            <p>
              Customers and prospective customers, suppliers and service providers, employees and
              contractors, and website users. Categories include identity details, contact details,
              booking data, preferences, technical data, and correspondence as applicable.
            </p>

            <h3>7.3 Categories of recipients</h3>
            <ul>
              <li>Travel suppliers and service providers</li>
              <li>Payment processors</li>
              <li>Technology and software providers</li>
              <li>Professional advisers</li>
              <li>Regulators and authorities where required by law</li>
            </ul>

            <h3>7.4 Planned transborder flows</h3>
            <p>
              Personal information may be transferred across borders where necessary for delivery
              of travel services, including to suppliers in client destinations.
            </p>

            <h3>7.5 General description of security measures</h3>
            <p>
              Crew Up Pty Ltd uses reasonable organisational and technical safeguards including
              access controls, password protection, restricted access, and confidentiality/data
              protection obligations with service providers where appropriate.
            </p>

            <h2>8. Request procedure</h2>
            <p>
              A requester must complete the prescribed PAIA request form and submit it to the
              Information Officer. The requester must provide sufficient detail to identify:
            </p>
            <ul>
              <li>The record or records requested</li>
              <li>The identity of the requester</li>
              <li>The form of access requested</li>
              <li>The right to be exercised or protected, where applicable</li>
              <li>The reason the record is required, where applicable</li>
            </ul>
            <p>Proof of identity may be required before any request is processed.</p>

            <h2>9. Fees</h2>
            <p>
              Request fees and access fees may be payable in accordance with PAIA and regulations.
              Requesters will be informed of applicable fees before processing proceeds.
            </p>

            <h2>10. Grounds for refusal of access</h2>
            <p>Access may be refused on grounds permitted by PAIA, including:</p>
            <ul>
              <li>Protection of personal information of a third party</li>
              <li>Protection of commercial or confidential information</li>
              <li>Protection of safety of individuals or property</li>
              <li>Privileged legal records</li>
              <li>Commercial information of the private body</li>
              <li>Frivolous, vexatious, or resource-intensive requests</li>
            </ul>

            <h2>11. Availability of this manual</h2>
            <p>
              This manual is available on the Mason &amp; Wild website and may also be requested
              from the Information Officer.
            </p>

            <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="text-2xs font-normal tracking-wide uppercase text-stone-500 border-b border-stone-300 hover:text-stone-900 hover:border-stone-900 pb-[2px] transition-colors duration"
              >
                View Privacy Policy
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

