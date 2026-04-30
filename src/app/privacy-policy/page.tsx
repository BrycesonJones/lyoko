import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Privacy Policy — Lyoko",
  description: "Privacy Policy for Lyoko.",
};

const sections = [
  { id: "introduction", title: "Introduction and scope" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "how-we-share", title: "How we share your information" },
  { id: "on-chain-data", title: "On-chain data and public information" },
  { id: "cookies", title: "Cookies and similar technologies" },
  { id: "retention", title: "Data retention" },
  { id: "security", title: "Data security" },
  { id: "international-transfers", title: "International data transfers" },
  { id: "your-rights", title: "Your privacy rights" },
  { id: "childrens-privacy", title: "Children’s privacy" },
  { id: "third-party", title: "Third-party services and links" },
  { id: "changes", title: "Changes to this Policy" },
  { id: "contact", title: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header isLoggedIn={false} />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-400 mb-2">Legal</p>
            <h1 className="text-3xl md:text-4xl font-normal tracking-wide mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-400 mb-10">Last updated: April 22, 2026</p>

            <div className="border border-gray-800 bg-black/50 rounded-2xl p-6 mb-12">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">A note on blockchain data.</strong> Public blockchains are public. Any wallet address, deposit, withdrawal, or pool deployment associated with you is recorded on chain and is visible to anyone with a block explorer. We cannot erase, alter, or anonymize on-chain data — including data voluntarily linked to your account through your use of the Service.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4">Contents</h2>
              <ol className="space-y-1 text-gray-300 list-decimal list-inside">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-[#00FF00] transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section id="introduction">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction and scope</h2>
                <p className="mb-4">
                  This Privacy Policy describes how Lyoko (&ldquo;Lyoko,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, shares, retains, and protects personal information when you access or use the Lyoko website, dashboard, smart-contract interface, APIs, and related services (collectively, the &ldquo;Service&rdquo;).
                </p>
                <p className="mb-4">
                  This Policy is incorporated into and forms part of our Terms of Service. Capitalized terms not defined here have the meanings given in the Terms.
                </p>
                <p>
                  The Service is non-custodial: we do not hold your private keys or your funds. We do, however, collect personal information required to provide the Service, verify your identity, comply with law, and protect against fraud and abuse.
                </p>
              </section>

              <section id="information-we-collect">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information we collect</h2>
                <p className="mb-4">We collect the following categories of information.</p>

                <h3 className="text-lg font-semibold text-white mb-3">(a) Information you provide directly</h3>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-6">
                  <li><strong className="text-white">Account information</strong> — email address, username, and any profile fields you choose to add (display name, address, phone number). The Service is passwordless: we authenticate you with email one-time codes or Google sign-in. We do not collect or store passwords.</li>
                  <li><strong className="text-white">Identity-verification (KYC) information</strong> — full legal name, date of birth, residential address, phone number, and images of a government-issued identification document. KYC information may include sensitive personal information as defined under applicable privacy law.</li>
                  <li><strong className="text-white">Wallet information</strong> — public wallet addresses you connect to or designate within the Service. We do not collect or store private keys or seed phrases.</li>
                  <li><strong className="text-white">Pool-related information</strong> — pool addresses, pool configuration parameters, co-Owner addresses, and metadata you attach to a Pool.</li>
                  <li><strong className="text-white">Communications</strong> — messages, support requests, feedback, and any other content you submit to us.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-3">(b) Information collected automatically</h3>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-6">
                  <li><strong className="text-white">Device and connection information</strong> — IP address, browser type and version, operating system, device identifiers, referring URL, language preference, and approximate location derived from IP.</li>
                  <li><strong className="text-white">Usage information</strong> — pages and features accessed, time stamps, session duration, error logs, and interaction events.</li>
                  <li><strong className="text-white">Cookies and similar technologies</strong> — see Section 6.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-3">(c) Information from third parties</h3>
                <ul className="space-y-2 list-disc list-outside pl-6">
                  <li><strong className="text-white">Identity-verification providers</strong> — verification results, risk scores, and metadata returned by our identity-verification provider when you complete KYC.</li>
                  <li><strong className="text-white">Payment processor</strong> — for paid subscriptions, we receive billing status, last four digits of card, expiration date, and similar information from our payment processor. We do not receive or store full payment-card numbers.</li>
                  <li><strong className="text-white">Public blockchain data</strong> — balances, transactions, and contract interactions associated with addresses you connect to or that we display in your portfolio.</li>
                  <li><strong className="text-white">Fraud and compliance providers</strong> — sanctions screening, wallet-risk scoring, and similar signals from third-party providers.</li>
                </ul>
              </section>

              <section id="how-we-use">
                <h2 className="text-2xl font-bold text-white mb-4">3. How we use your information</h2>
                <p className="mb-4">We use the information described above to:</p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li>Provide, maintain, and improve the Service, including authenticating sessions, presenting your portfolio, and recording your Pool activity;</li>
                  <li>Verify your identity and meet our regulatory and contractual obligations, including KYC, sanctions screening, and recordkeeping;</li>
                  <li>Process subscription payments and manage your account on the applicable tier;</li>
                  <li>Detect, investigate, and prevent fraud, security incidents, prohibited activity, and violations of our Terms;</li>
                  <li>Communicate with you about the Service, including service announcements, security notices, support responses, and — where you have consented or where permitted — marketing messages;</li>
                  <li>Generate aggregated or de-identified analytics that do not identify you;</li>
                  <li>Comply with applicable law, lawful requests from regulators or law-enforcement agencies, court orders, and our legal rights and obligations.</li>
                </ul>
                <p>
                  For users in the European Economic Area, the United Kingdom, or other jurisdictions with similar law, the legal bases on which we rely include performance of a contract (providing the Service), compliance with a legal obligation (KYC, sanctions, tax), legitimate interests (security, fraud prevention, product improvement), and consent (marketing, certain cookies). You may withdraw consent at any time without affecting the lawfulness of prior processing.
                </p>
              </section>

              <section id="how-we-share">
                <h2 className="text-2xl font-bold text-white mb-4">4. How we share your information</h2>
                <p className="mb-4">We do not sell your personal information. We share personal information only as described below.</p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li><strong className="text-white">Service providers and processors.</strong> Hosting, database, authentication, identity verification, payments, customer support, email delivery, analytics, and security vendors that process personal information on our behalf under contract, including but not limited to our identity-verification provider, our payment processor, Supabase (authentication and database), our hosting provider, and our product-analytics provider.</li>
                  <li><strong className="text-white">Legal and compliance.</strong> Regulators, courts, law-enforcement agencies, and other governmental authorities when required by law, in response to a lawful request, or to protect our or others&rsquo; rights, property, or safety.</li>
                  <li><strong className="text-white">Corporate transactions.</strong> A successor entity in the event of a merger, acquisition, financing, reorganization, sale of assets, or insolvency. We will require any such successor to honor the commitments in this Policy.</li>
                  <li><strong className="text-white">With your direction.</strong> When you direct us to share information — for example, by inviting a co-Owner to a Pool or publishing a portfolio link.</li>
                  <li><strong className="text-white">Aggregated or de-identified information.</strong> Information that does not reasonably identify you, used for research, analytics, marketing, or product development.</li>
                </ul>
                <p>We do not share personal information with third parties for their own marketing purposes without your consent.</p>
              </section>

              <section id="on-chain-data">
                <h2 className="text-2xl font-bold text-white mb-4">5. On-chain data and public information</h2>
                <p className="mb-4">
                  When you deploy a Pool, fund a Pool, or sign any other transaction through the Service, the resulting transaction is broadcast to a public blockchain. The wallet address you used, the contract address, the asset and amount, the time of the transaction, and the link between funder and recipient are recorded permanently and publicly. Anyone with internet access and a block explorer can view this information.
                </p>
                <p>
                  Linking a wallet address to your account, your name, or other identifying information you provide to us increases the likelihood that on-chain activity associated with that address can be attributed to you by third parties — including chain analytics firms, regulators, and the public. You should consider this before connecting an address that you wish to keep private.
                </p>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and similar technologies</h2>
                <p className="mb-4">
                  We and our service providers use cookies, local storage, and similar technologies to operate the Service, remember your preferences, maintain your session, prevent fraud, and measure performance. Some of these technologies are strictly necessary and cannot be disabled without breaking the Service. Others are optional and you may control them through your browser settings or any cookie-preferences interface we provide.
                </p>
                <p>
                  We do not currently respond to browser &ldquo;Do Not Track&rdquo; signals because there is no industry consensus on how to interpret them. Where required by law, we will honor recognized opt-out preference signals such as Global Privacy Control.
                </p>
              </section>

              <section id="retention">
                <h2 className="text-2xl font-bold text-white mb-4">7. Data retention</h2>
                <p className="mb-4">
                  We retain personal information for as long as we need it to provide the Service, comply with our legal and regulatory obligations, resolve disputes, and enforce our agreements. Specifically:
                </p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li>Account information is retained while your account is active and for a reasonable period after closure to allow for reactivation, dispute resolution, and audit;</li>
                  <li>KYC information is retained for the period required by applicable anti-money-laundering and recordkeeping laws, typically at least five (5) years from the closure of your account or the date of the relevant transaction;</li>
                  <li>Transaction and activity records are retained for accounting, tax, and audit purposes for the period required by law;</li>
                  <li>Logs and security data are retained for the period necessary to investigate and respond to incidents.</li>
                </ul>
                <p>On-chain data is permanent and outside our control; closing your account does not erase any data already recorded on a public blockchain.</p>
              </section>

              <section id="security">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data security</h2>
                <p className="mb-4">
                  We implement administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, and destruction. These include encryption in transit, access controls, authentication requirements, hardware-backed credential storage where available, monitoring, and vendor diligence.
                </p>
                <p>
                  No system is perfectly secure. You are responsible for keeping your account credentials, recovery factors, Wallet seed phrases, and devices secure, and for notifying us promptly at <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">support@alyoko.io</a> of any suspected unauthorized access.
                </p>
              </section>

              <section id="international-transfers">
                <h2 className="text-2xl font-bold text-white mb-4">9. International data transfers</h2>
                <p className="mb-4">
                  We are based in the United States and may process personal information in the United States and in any country where our service providers operate. If you access the Service from outside the United States, your information may be transferred to, stored, and processed in jurisdictions whose data-protection laws may differ from those of your country.
                </p>
                <p>
                  Where required by law, we use appropriate safeguards for international transfers, such as the European Commission&rsquo;s Standard Contractual Clauses or equivalent mechanisms.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold text-white mb-4">10. Your privacy rights</h2>
                <p className="mb-4">
                  Depending on where you live, you may have rights with respect to your personal information. Subject to verification of your identity and to limits set by law, these may include the right to:
                </p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li>Access the personal information we hold about you and obtain a copy in a portable format;</li>
                  <li>Correct inaccurate or incomplete information;</li>
                  <li>Delete personal information, subject to our retention obligations and other legal exceptions;</li>
                  <li>Restrict or object to certain processing, including processing based on legitimate interests;</li>
                  <li>Withdraw consent where processing is based on consent;</li>
                  <li>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information, and limit the use of sensitive personal information, where those concepts apply;</li>
                  <li>Lodge a complaint with a supervisory authority in your jurisdiction;</li>
                  <li>Be free from discrimination for exercising these rights.</li>
                </ul>
                <p className="mb-4">
                  To exercise any of these rights, contact us at <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">support@alyoko.io</a>. We may need to verify your identity before responding. You may also use an authorized agent to submit a request on your behalf, subject to applicable law. We will respond within the time required by law.
                </p>
                <p>
                  <strong className="text-white">California residents:</strong> the categories of personal information described in Section 2 correspond to the CCPA categories of identifiers, customer records, characteristics of protected classifications, commercial information, internet or network activity, geolocation data, professional information (in limited cases), and inferences. We disclose personal information for the business purposes described in Sections 3 and 4. We do not sell personal information and do not knowingly share personal information for cross-context behavioral advertising.
                </p>
              </section>

              <section id="childrens-privacy">
                <h2 className="text-2xl font-bold text-white mb-4">11. Children&rsquo;s privacy</h2>
                <p>
                  The Service is not directed to, and we do not knowingly collect personal information from, individuals under the age of 18. If you believe a minor has provided us with personal information, contact us at <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">support@alyoko.io</a> and we will take appropriate steps to delete it.
                </p>
              </section>

              <section id="third-party">
                <h2 className="text-2xl font-bold text-white mb-4">12. Third-party services and links</h2>
                <p>
                  The Service integrates with and links to third-party services, including self-custodied wallets (such as MetaMask, Coinbase Wallet, and Binance Wallet), public blockchains, price oracles (including Chainlink), block explorers, KYC providers, and payment processors. We are not responsible for the privacy practices of those services. Their handling of your information is governed by their own privacy policies, and you should review them.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-white mb-4">13. Changes to this Policy</h2>
                <p>
                  We may update this Policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. For material changes, we will provide reasonable advance notice (for example, by email or through an in-app notice). Your continued use of the Service after the changes take effect constitutes acceptance of the revised Policy.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-white mb-4">14. Contact us</h2>
                <p className="mb-4">For privacy questions, requests, or complaints, contact us at:</p>
                <p className="mb-4">
                  Email:{" "}
                  <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">
                    support@alyoko.io
                  </a>
                </p>
                <p>
                  If you are located in the European Economic Area or the United Kingdom and we are unable to resolve your concern, you may lodge a complaint with your local supervisory authority.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
