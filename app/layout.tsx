import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-900 text-white lg:w-4/5 mx-auto">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
