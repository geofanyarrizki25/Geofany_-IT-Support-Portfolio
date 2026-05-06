import "./globals.css";

export const metadata = {
  title: "Geofany Arrizki Portfolio",
  description: "IT Support Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
