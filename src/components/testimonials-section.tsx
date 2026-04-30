"use client";

import { CategoryList, type Category } from "@/components/ui/category-list";

const categories: Category[] = [
  {
    id: 1,
    title: "Custom AI Apps",
    subtitle: "Tailored AI tools built around your business workflows, users, and data.",
  },
  {
    id: 2,
    title: "Workflow Automations",
    subtitle:
      "Automate repetitive tasks across email, CRMs, documents, reporting, and internal operations.",
  },
  {
    id: 3,
    title: "AI Prototypes",
    subtitle: "Rapid MVPs and proof-of-concepts to validate AI product ideas before full buildout.",
  },
  {
    id: 4,
    title: "iOS/Android Apps",
    subtitle:
      "Mobile-first applications with clean UX, AI features, and scalable backend integrations.",
  },
  {
    id: 5,
    title: "HIPAA-Compliant AI Apps",
    subtitle:
      "Secure healthcare-focused AI systems designed around privacy, compliance, and controlled data flows.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-transparent">
      <CategoryList
        title="Enter Lyoko, Democratize Your Digital Space"
        subtitle="Rapid prototypes to enterprise deployments. Here's what we build."
        categories={categories}
      />
    </section>
  );
};

export default TestimonialsSection;
