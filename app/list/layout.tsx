export default function ListLayout({
  children,
  detail,
}: //
{
  children: React.ReactNode;
  detail: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <div className="text-xl py-2">List</div>
      <div>{children}</div>
      <div>{detail}</div>
    </div>
  );
}
