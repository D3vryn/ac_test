export const metadata = {
  title: "Cardano Grants Hub",
  description: "Grants, Projects, and Impact for the Cardano ecosystem"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
