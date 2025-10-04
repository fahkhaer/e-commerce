// components/layout/MainLayout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col pb-20 sm:px-4 md:px-30 md:py-10">
      {children}
    </div>
  );
}
