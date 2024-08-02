import ImageSlideshow from "@/components/images/images-slides";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="slideshow-container">
        <ImageSlideshow />
      </div>
    </main>
  );
}
