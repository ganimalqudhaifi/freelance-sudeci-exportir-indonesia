import Link from "next/link";
import contact from "@/data/contact.json";

interface EmailCTAButtonProps {
  email: string;
  subject?: string;
  body?: string;
  label?: string;
}

export default function EmailCTA({
  email,
  subject = contact.predefinedMessages.email.subject,
  body = contact.predefinedMessages.email.body,
  label,
}: EmailCTAButtonProps) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Link href={mailtoLink} className="hover:underline">
      {label}
    </Link>
  );
}
