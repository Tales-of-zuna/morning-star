import Navbar from "@/components/layout/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="min-h-screen w-full">{children}</section>
      <footer className="absolute">{/* <Footer /> */}</footer>
    </main>
  );
};

export default MainLayout;
