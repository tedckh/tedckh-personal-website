import ClientLayout from "@/components/ClientLayout";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <ClientLayout>{children}</ClientLayout>;
}
