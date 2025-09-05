import { Button } from "../../../components/ui/button";

export function EmpowermentSection() {
  const imageCards = [
    {
      backgroundImage: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
    },
    {
      backgroundImage: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg",
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?auto=format&fit=crop&w=1200",
    },
    {
      backgroundImage: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    },
  ];

  return (
    <section className="relative self-stretch w-full bg-[#153856] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full">
          {/* Main content */}
          <div className="flex flex-col items-center gap-6 lg:gap-8 relative z-10">
            <header className="flex flex-col items-center gap-3 relative w-full text-center">
              <p className="relative font-['Helvetica_Neue-Medium',Helvetica] font-medium text-white text-sm lg:text-base text-center tracking-[0] leading-relaxed whitespace-nowrap">
                STUDENT'S LIFE
              </p>

              <h2 className="relative max-w-4xl font-['Playfair_Display',Helvetica] font-medium text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[72px]">
                <span className="text-white">
                  From day one, you'll gain real-world skills, industry
                  exposure, and{" "}
                </span>
                <span className="text-[#d9d9dd3b]">
                  valuable connections that shape your career for life.
                </span>
              </h2>
            </header>

            <Button className="flex w-auto h-[45px] items-center justify-center gap-2.5 px-6 py-2.5 relative bg-white hover:bg-gray-100 text-[#153856] font-['Helvetica_Neue-Regular',Helvetica] font-normal text-lg tracking-[0.18px] leading-[23.4px]">
              Download Brochure
            </Button>
          </div>

          {/* Background images - hidden on mobile for better performance */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4 absolute inset-0 opacity-20 pointer-events-none">
            {imageCards.map((card, index) => (
              <div
                key={index}
                className="rounded-md bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}