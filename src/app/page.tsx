import Hero from "@/components/Hero";
import SignatureDishes from "@/components/SignatureDishes";
import AboutStrip from "@/components/AboutStrip";
import Testimonial from "@/components/Testimonial";
import CtaBand from "@/components/CtaBand";
import ImageSlideshow from "@/components/ImageSlideshow";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SignatureDishes />
      <AboutStrip />
      <Testimonial />
      <CtaBand />
      <ImageSlideshow />
    </main>
  );
}
