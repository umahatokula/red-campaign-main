import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";
import RedMessage from "@/components/RedMessage";
import RedShow from "@/components/RedShow";
import RedStory from "@/components/RedStory";
import RedTalk from "@/components/RedTalk";
import WhatIsRed from "@/components/WhatIsRed";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-tablet">
      <WhatIsRed />
      <RedStory />
      <RedMessage />
      <RedTalk />
      <RedShow />
      <div className="mb-24"></div>
      <FooterMenu />
      <Footer />
    </main>
  );
}
