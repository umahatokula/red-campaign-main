export default function ShareLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="p-5">{children}</section>;
}
