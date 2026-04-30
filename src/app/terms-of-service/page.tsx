import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Terms of Service — Lyoko",
  description: "Terms of Service for Lyoko.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of these Terms" },
  { id: "definitions", title: "Definitions" },
  { id: "eligibility", title: "Eligibility" },
  { id: "account-registration", title: "Account registration and security" },
  { id: "kyc", title: "Identity verification (KYC)" },
  { id: "non-custodial", title: "Non-custodial nature of the Service" },
  { id: "the-service", title: "The Service" },
  { id: "pool-mechanics", title: "Pool mechanics and finality" },
  { id: "blockchain-risks", title: "Blockchain and protocol risks" },
  { id: "fees", title: "Fees and payment" },
  { id: "api-access", title: "API access and acceptable use" },
  { id: "ip", title: "Intellectual property" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "liability", title: "Limitation of liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "dispute-resolution", title: "Dispute resolution; arbitration; class-action waiver" },
  { id: "governing-law", title: "Governing law" },
  { id: "termination", title: "Suspension and termination" },
  { id: "changes", title: "Changes to these Terms" },
  { id: "general", title: "General" },
  { id: "contact", title: "Contact us" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header isLoggedIn={false} />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-normal tracking-wide mb-2">Terms of Service</h1>
            <p className="text-sm text-gray-400 mb-10">Last updated: April 22, 2026</p>

            <div className="border border-gray-800 bg-black/50 rounded-2xl p-6 mb-12">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Important — please read carefully.</strong> Lyoko is a non-custodial smart-contract interface. We never hold your private keys or your funds. Transactions on public blockchains are final and irreversible. Section 13 contains a binding arbitration agreement and a class-action waiver.
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
              <section id="acceptance">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of these Terms</h2>
                <p className="mb-4">
                  These Terms of Service (the &ldquo;Terms&rdquo;) form a legally binding agreement between you (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Lyoko (&ldquo;Lyoko,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of the Lyoko website, smart contracts, dashboard, APIs, and related services (collectively, the &ldquo;Service&rdquo;).
                </p>
                <p>
                  By creating an account, connecting a wallet, deploying a pool, or otherwise using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Service.
                </p>
              </section>

              <section id="definitions">
                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <ul className="space-y-3 list-disc list-outside pl-6">
                  <li><strong className="text-white">Pool</strong> means a smart-contract escrow deployed through the Service that accepts deposits in supported assets, supports multi-owner administration, and enforces an on-chain expiration.</li>
                  <li><strong className="text-white">Deployer</strong> means the User who initiates the deployment of a Pool and whose address is recorded as the deployer on chain.</li>
                  <li><strong className="text-white">Owner</strong> means an address granted co-management rights to a Pool by the Deployer.</li>
                  <li><strong className="text-white">Wallet</strong> means any self-custodied browser or mobile wallet you use to interact with the Service, including but not limited to MetaMask, Coinbase Wallet, and Binance Wallet.</li>
                  <li><strong className="text-white">Supported Asset</strong> means an asset the Service is configured to accept at the time of your transaction, currently ETH, PAXG, and XAU₮ on Ethereum mainnet and Sepolia testnet. The list of Supported Assets and networks may change without notice.</li>
                  <li><strong className="text-white">KYC</strong> means the identity-verification process described in Section 5.</li>
                </ul>
              </section>

              <section id="eligibility">
                <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
                <p className="mb-4">To use the Service, you represent and warrant that:</p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li>You are at least 18 years old and have full legal capacity to enter into these Terms;</li>
                  <li>You are not located in, organized under the laws of, or ordinarily resident in any country or territory subject to comprehensive U.S., U.N., U.K., or E.U. sanctions, and you are not a person identified on any government-maintained sanctions or denied-persons list;</li>
                  <li>Your use of the Service is not prohibited by, and complies with, all laws and regulations applicable to you, including tax, securities, anti-money-laundering, and consumer-protection laws of your jurisdiction;</li>
                  <li>You will not use the Service on behalf of any third party unless you have obtained the authorizations and disclosures required by applicable law.</li>
                </ul>
                <p>We may refuse, suspend, or terminate access to the Service from any jurisdiction or individual at our sole discretion.</p>
              </section>

              <section id="account-registration">
                <h2 className="text-2xl font-bold text-white mb-4">4. Account registration and security</h2>
                <p className="mb-4">
                  To access certain features you must register an account using a valid email address. The Service is passwordless: we authenticate you with one-time codes sent to your email, or with Google sign-in. You are responsible for maintaining the security of the email account and any third-party identity provider used to sign in, and for all activity under your account. Notify us promptly at <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">support@alyoko.io</a> of any unauthorized access.
                </p>
                <p>
                  You are solely responsible for the security of any Wallet you connect to the Service, including the safekeeping of seed phrases, private keys, and any device on which they are stored. We cannot recover lost keys, reverse signed transactions, or restore access to a Wallet you no longer control.
                </p>
              </section>

              <section id="kyc">
                <h2 className="text-2xl font-bold text-white mb-4">5. Identity verification (KYC)</h2>
                <p className="mb-4">
                  Before deploying a Pool — and in any event no later than two (2) hours after creating an account — you must complete identity verification. KYC requires you to provide accurate information including your full legal name, date of birth, residential address, phone number, and a valid government-issued identification document.
                </p>
                <p>
                  You authorize us and our verification providers to collect, use, store, and verify the information you submit, and to share it with regulators, payment partners, or law-enforcement agencies as required by law. We may refuse to onboard you, or suspend or terminate your account, if we cannot verify your identity or if we reasonably believe the information you provided is inaccurate or incomplete.
                </p>
              </section>

              <section id="non-custodial">
                <h2 className="text-2xl font-bold text-white mb-4">6. Non-custodial nature of the Service</h2>
                <p className="mb-4">
                  The Service is non-custodial. Lyoko does not at any time take possession, control, or custody of your private keys or the assets in your Wallet or in any Pool. All deployments, deposits, withdrawals, and administrative actions are executed by smart contracts on a public blockchain pursuant to transactions you sign with your own Wallet.
                </p>
                <p>
                  We do not act as a broker, dealer, exchange, money transmitter, money-services business, custodian, fiduciary, or financial institution with respect to your assets. We do not provide investment, tax, legal, or accounting advice. You are solely responsible for evaluating the risks of any transaction.
                </p>
              </section>

              <section id="the-service">
                <h2 className="text-2xl font-bold text-white mb-4">7. The Service</h2>
                <p className="mb-4">The Service currently includes:</p>
                <ul className="space-y-2 list-disc list-outside pl-6 mb-4">
                  <li><strong className="text-white">Pool deployment.</strong> Deploying multi-owner escrow contracts with configurable expiration dates and minimum-contribution thresholds enforced via on-chain price oracles.</li>
                  <li><strong className="text-white">Pool administration.</strong> Inviting co-Owners, funding deployed Pools with Supported Assets, and withdrawing funds in accordance with the rules encoded in the underlying smart contract.</li>
                  <li><strong className="text-white">Portfolio tracking.</strong> Read-only monitoring of balances across Bitcoin, Ethereum, and supported ERC-20 tokens for addresses you specify.</li>
                  <li><strong className="text-white">Activity dashboard.</strong> A historical view of your Pool activity reconstructed from public on-chain data and Service-side records.</li>
                  <li><strong className="text-white">API access.</strong> Programmatic access to certain features for Users on the applicable paid tier.</li>
                </ul>
                <p>
                  We may add, modify, suspend, or discontinue any feature, network, or Supported Asset at any time, with or without notice. We do not guarantee that the Service will be uninterrupted, error-free, or available in any particular jurisdiction.
                </p>
              </section>

              <section id="pool-mechanics">
                <h2 className="text-2xl font-bold text-white mb-4">8. Pool mechanics and finality</h2>
                <p className="mb-4">
                  Each Pool is governed by the smart-contract code at the address recorded on chain at the time of deployment. The behavior of a Pool — including who can withdraw, when withdrawals are permitted, how the expiration date is enforced, and how funds are released after expiration — is determined by that code, not by any representation made on the Service&rsquo;s interface.
                </p>
                <p className="mb-4">
                  Once a Pool expires, withdrawal authority is restricted as defined by the smart contract; in the standard configuration, only the Deployer may release expired funds back to the Deployer&rsquo;s address. Co-Owners do not retain a unilateral right to withdraw their contributions before or after expiration except as expressly provided by the contract.
                </p>
                <p>
                  Transactions are final. Once a transaction is broadcast and confirmed on chain, it cannot be reversed, cancelled, or refunded by us. You bear the risk of incorrect addresses, incorrect amounts, mistakenly invited Owners, premature pool expiration, and any other input you provide.
                </p>
              </section>

              <section id="blockchain-risks">
                <h2 className="text-2xl font-bold text-white mb-4">9. Blockchain and protocol risks</h2>
                <p className="mb-4">You acknowledge and accept the following risks, among others:</p>
                <ul className="space-y-2 list-disc list-outside pl-6">
                  <li><strong className="text-white">Smart-contract risk.</strong> Smart contracts can contain bugs, vulnerabilities, or economic exploits. Audits, if performed, reduce but do not eliminate this risk.</li>
                  <li><strong className="text-white">Network risk.</strong> Public blockchains may experience congestion, forks, reorganizations, MEV-related ordering, or outright outages. Gas fees fluctuate and are paid by you to network validators, not to us.</li>
                  <li><strong className="text-white">Oracle risk.</strong> Pool minimums and certain price-dependent features rely on third-party price oracles, including Chainlink. We make no warranty as to the accuracy, timeliness, or availability of any oracle.</li>
                  <li><strong className="text-white">Asset risk.</strong> Supported Assets, including PAXG and XAU₮, depend on the solvency, custody practices, and continued operation of their respective issuers. The redemption and backing of tokenized assets is governed by their issuers, not by us.</li>
                  <li><strong className="text-white">Regulatory risk.</strong> The regulatory treatment of cryptocurrencies and tokenized assets is uncertain and evolving. New laws or interpretations may affect your ability to use the Service or hold the assets you deposit.</li>
                  <li><strong className="text-white">Testnet risk.</strong> Sepolia and other testnet assets have no monetary value. We make no representation that testnet deployments behave identically to mainnet deployments.</li>
                </ul>
              </section>

              <section id="fees">
                <h2 className="text-2xl font-bold text-white mb-4">10. Fees and payment</h2>
                <p className="mb-4">
                  The Service offers a Free tier and a Pro tier currently priced at $20 per month, billed in advance. Tier features and pricing are described on our pricing page and may change with notice. Subscription fees are non-refundable except where required by applicable law.
                </p>
                <p>
                  On-chain transactions require gas, which is paid by you in the network&rsquo;s native asset and is not collected by, retained by, or refundable from us. We may, at our discretion, charge additional protocol fees that are disclosed in the interface before you sign the relevant transaction.
                </p>
              </section>

              <section id="api-access">
                <h2 className="text-2xl font-bold text-white mb-4">11. API access and acceptable use</h2>
                <p className="mb-4">
                  If you are issued API keys, you must keep them confidential, use them only for your own account, and revoke them promptly upon suspected compromise. We may rate-limit, throttle, or revoke API access at any time.
                </p>
                <p className="mb-4">You agree not to:</p>
                <ul className="space-y-2 list-disc list-outside pl-6">
                  <li>Use the Service to violate any law or regulation, or to facilitate any unlawful activity, including money laundering, terrorist financing, fraud, market manipulation, or sanctions evasion;</li>
                  <li>Access or use the Service through automated means in a manner that imposes an unreasonable load on our infrastructure;</li>
                  <li>Reverse engineer, decompile, scrape at scale, or otherwise attempt to extract source code or non-public data from the Service, except to the extent expressly permitted by law;</li>
                  <li>Interfere with, disrupt, or attempt to gain unauthorized access to the Service, any User account, or any Wallet that is not yours;</li>
                  <li>Misrepresent your identity, impersonate another person, or use the Service to harass, threaten, or defraud any person;</li>
                  <li>Deploy, fund, or administer a Pool on behalf of any sanctioned person or sanctioned jurisdiction.</li>
                </ul>
              </section>

              <section id="ip">
                <h2 className="text-2xl font-bold text-white mb-4">12. Intellectual property</h2>
                <p>
                  The Service, including its source code, smart contracts (except where released under an open-source license), interface designs, trademarks, logos, and content, is owned by us or our licensors and is protected by intellectual-property laws. Subject to your compliance with these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Service for its intended purpose. No other rights are granted by implication, estoppel, or otherwise.
                </p>
              </section>

              <section id="disclaimers">
                <h2 className="text-2xl font-bold text-white mb-4">13. Disclaimers</h2>
                <p className="mb-4">
                  The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the maximum extent permitted by applicable law, Lyoko disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranty arising out of course of dealing or usage of trade.
                </p>
                <p className="mb-4">
                  We make no warranty that (a) the Service will meet your requirements; (b) the Service will be uninterrupted, secure, or error-free; (c) any smart contract is free of bugs or economic exploits; (d) any third-party oracle, wallet, network, or infrastructure provider will function as expected; or (e) any information presented in the interface — including balances, prices, or activity history — is accurate, complete, or current.
                </p>
                <p>
                  Nothing in the Service constitutes investment, tax, legal, accounting, or financial advice. You are solely responsible for evaluating whether any transaction is suitable for you in light of your circumstances and applicable law.
                </p>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold text-white mb-4">14. Limitation of liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by applicable law, in no event will Lyoko, its affiliates, or its or their officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, use, goodwill, or other intangible losses, arising out of or relating to these Terms or the Service.
                </p>
                <p className="mb-4">
                  Without limiting the foregoing, we will not be liable for losses arising from: (a) your use of, or inability to use, the Service; (b) any transaction signed by you or on your behalf; (c) any bug or vulnerability in any smart contract, oracle, wallet, or underlying blockchain; (d) any unauthorized access to your account or Wallet; (e) any conduct or content of any third party; or (f) any change, suspension, or discontinuation of the Service or any feature.
                </p>
                <p>
                  Our aggregate liability for any claim arising out of or relating to these Terms or the Service will not exceed the greater of (i) the amount you paid us in subscription fees during the twelve (12) months immediately preceding the event giving rise to the claim and (ii) U.S. $100.
                </p>
              </section>

              <section id="indemnification">
                <h2 className="text-2xl font-bold text-white mb-4">15. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Lyoko and our affiliates and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys&rsquo; fees) arising out of or in any way connected with (a) your access to or use of the Service; (b) your violation of these Terms; (c) your violation of any third-party right, including any intellectual-property or privacy right; or (d) any transaction you initiate, sign, or authorize through the Service.
                </p>
              </section>

              <section id="dispute-resolution">
                <h2 className="text-2xl font-bold text-white mb-4">16. Dispute resolution; arbitration; class-action waiver</h2>
                <p className="mb-4"><em>Please read this section carefully — it affects your legal rights.</em></p>
                <p className="mb-4">
                  Any dispute, claim, or controversy arising out of or relating to these Terms or the Service (a &ldquo;Dispute&rdquo;) will be resolved by binding individual arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules. The arbitration will be conducted in Wilmington, Delaware, in the English language, before a single arbitrator. Judgment on the award may be entered in any court of competent jurisdiction.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Class-action waiver.</strong> You and we each waive any right to bring or participate in any class, collective, consolidated, or representative action. The arbitrator may not consolidate claims, and may not preside over any form of representative proceeding.
                </p>
                <p className="mb-4">
                  You may opt out of this arbitration agreement by sending written notice to <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">support@alyoko.io</a> within thirty (30) days of first accepting these Terms. Notice must include your name, account email, and a clear statement that you are opting out.
                </p>
                <p>
                  Notwithstanding the foregoing, either party may bring an individual action in small-claims court for any dispute within its jurisdiction, and either party may seek injunctive or equitable relief in a court of competent jurisdiction to protect its intellectual property or confidential information.
                </p>
              </section>

              <section id="governing-law">
                <h2 className="text-2xl font-bold text-white mb-4">17. Governing law</h2>
                <p>
                  These Terms and any Dispute will be governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. Subject to Section 16, the state and federal courts located in Wilmington, Delaware will have exclusive jurisdiction over any matter not subject to arbitration.
                </p>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold text-white mb-4">18. Suspension and termination</h2>
                <p className="mb-4">
                  We may suspend or terminate your access to the Service at any time, with or without notice, including if we believe you have violated these Terms, if required by law, or if we discontinue the Service. You may stop using the Service at any time. Upon termination, the provisions of these Terms that by their nature should survive — including Sections 6 (Non-custodial), 12 (Intellectual property) through 17 (Governing law), and this Section 18 — will survive.
                </p>
                <p>
                  Termination of your account does not affect any Pool already deployed on chain. Smart contracts continue to operate independently of your account status.
                </p>
              </section>

              <section id="changes">
                <h2 className="text-2xl font-bold text-white mb-4">19. Changes to these Terms</h2>
                <p>
                  We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision. For material changes, we will provide reasonable advance notice (for example, by email or through an in-app notice). Your continued use of the Service after the changes take effect constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section id="general">
                <h2 className="text-2xl font-bold text-white mb-4">20. General</h2>
                <p className="mb-4">
                  <strong className="text-white">Entire agreement.</strong> These Terms, together with the Privacy Policy and any policies or notices we publish on the Service, constitute the entire agreement between you and us regarding the Service and supersede any prior agreements.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Severability.</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be reformed to the minimum extent necessary to make it enforceable.
                </p>
                <p className="mb-4">
                  <strong className="text-white">No waiver.</strong> Our failure to enforce any provision is not a waiver of our right to do so later.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Assignment.</strong> You may not assign these Terms without our prior written consent. We may assign these Terms at any time.
                </p>
                <p>
                  <strong className="text-white">Force majeure.</strong> We are not liable for any failure or delay caused by events beyond our reasonable control, including network failures, blockchain outages, regulatory action, acts of God, war, civil unrest, or labor disputes.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-white mb-4">21. Contact us</h2>
                <p>
                  Questions about these Terms can be sent to{" "}
                  <a href="mailto:support@alyoko.io" className="text-[#00FF00] hover:underline">
                    support@alyoko.io
                  </a>
                  .
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
