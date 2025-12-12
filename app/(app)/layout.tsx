import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/app/Header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <Header />
        <main>{children}</main>
        <Toaster position="top-right" richColors />
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default AppLayout;
