import { Outlet } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "../_components/container";
import { Toaster } from "@/components/ui/sonner";
function DefaulfLayout() {
  return (
    <div>
      <Container className="py-2">
        <Header />
      </Container>
      <div className="bg-gradient-to-br from-emerald-50 bg-green-100">
        <Container className="mb-4">
          <Toaster />
          <div className="min-h-80">
            <Outlet />
          </div>
        </Container>
      </div>
      <Container className="py-2">
        <Footer />
      </Container>
    </div>
  );
}

export default DefaulfLayout;
