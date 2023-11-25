import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from '../../src/components/SessionProvider/SessionProvider'

export const metadata: Metadata = {
  title: "Parallels Wears",
  description: "Marketplace",
};

export default async function RootLayout({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: any
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
