import { Card, CardContent } from "../../../components/ui/card";

export function HighlightsSection() {
  const programs = [
    {
      title: "Bachelor in Hotel Management",
      description:
        "In-depth academic and practical training for leadership roles in global hospitality.",
      backgroundImage: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
    },
    {
      title: "Diploma in Hotel Management",
      description:
        "Fast-track skill development for entry into the hospitality industry.",
      backgroundImage: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg",
    },
    {
      title: "Crash Course for Cruise Lines",
      description: "Specialized training for cruise ship careers with global opportunities.",
      backgroundImage: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
    },
    {
      title: "Crash Course for Culinary Arts",
      description: "Professional culinary training for world-class kitchen careers.",
      backgroundImage: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    },
  ];

  const statistics = [
    {
      number: "100%",
      title: "Placement Guarantee",
      description: "Career success through strong industry links.",
    },
    {
      number: "785+",
      title: "Students Placed Annually",
      description: "Join a growing global alumni network",
    },
    {
      number: "10+",
      title: "Global Industry Partners",
      description: "Opportunities with top global employers.",
    },
    {
      number: "5+",
      title: "International Study Tours",
      description: "Hands-on learning in global hubs.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-16 lg:gap-[100px] relative">
      <div className="flex flex-col items-center gap-8 lg:gap-14 relative self-stretch w-full">
        <div className="flex flex-col max-w-[640px] items-center gap-5 relative text-center">
          <h2 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl tracking-[0] leading-normal">
            Explore Our Programs
          </h2>

          <p className="relative self-stretch font-['Helvetica-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base text-center tracking-[0.16px] leading-relaxed lg:leading-[20.8px]">
            Career-Focused Training & Global Opportunities — Tailored
            Programs to Launch You into Hospitality, Oil & Gas, and
            International Education.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4 lg:gap-[21px] relative self-stretch w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[21px] relative self-stretch w-full">
            {programs.slice(0, 2).map((program, index) => (
              <Card
                key={index}
                className="relative h-[300px] lg:h-[415px] border-0 overflow-hidden"
              >
                <CardContent
                  className="relative w-full h-full p-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${program.backgroundImage})`,
                  }}
                >
                  <div className="flex flex-col max-w-[440px] items-center gap-3 lg:gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
                    <h3 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-white text-xl lg:text-[28px] text-center tracking-[0] leading-tight lg:leading-[25.5px]">
                      {program.title}
                    </h3>
                    {program.description && (
                      <p className="relative max-w-[414px] font-['Helvetica-Regular',Helvetica] font-normal text-white text-sm lg:text-base text-center tracking-[0] leading-relaxed lg:leading-[19.2px]">
                        {program.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 relative self-stretch w-full">
            {programs.slice(2, 4).map((program, index) => (
              <Card
                key={index + 2}
                className="relative h-[300px] lg:h-[415px] border-0 overflow-hidden"
              >
                <CardContent
                  className="relative w-full h-full p-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${program.backgroundImage})`,
                  }}
                >
                  <div className="flex flex-col max-w-[440px] items-center gap-3 lg:gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
                    <h3 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-white text-xl lg:text-[28px] text-center tracking-[0] leading-tight lg:leading-[25.5px]">
                      {program.title}
                    </h3>
                    {program.description && (
                      <p className="relative max-w-[414px] font-['Helvetica-Regular',Helvetica] font-normal text-white text-sm lg:text-base text-center tracking-[0] leading-relaxed lg:leading-[19.2px]">
                        {program.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[87px] relative self-stretch w-full">
        <div className="flex flex-col flex-1 items-start gap-6 lg:gap-10 relative">
          <div className="flex flex-col items-start gap-6 lg:gap-[30px] relative self-stretch w-full">
            <h2 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl tracking-[0] leading-tight lg:leading-[62.4px]">
              Empowering Students for Global Careers in Hospitality & Energy
            </h2>

            <div className="self-stretch font-['Helvetica-Regular',Helvetica] font-normal tracking-[0] leading-[19.2px] relative text-[#243646] text-sm lg:text-base">
              OUR STATISTICS
            </div>
          </div>

          <p className="relative self-stretch font-['Helvetica-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base tracking-[0.16px] leading-relaxed lg:leading-[22px]">
            At Good Will Institute, our unwavering commitment to excellence,
            world-class training, and global exposure—combined with guaranteed
            career placements—has made us a trusted leader in hospitality and
            oil & gas education across India. We prepare every student not
            just for a job, but for a successful, long-term global career.
          </p>
        </div>

        <div className="flex flex-col w-full lg:max-w-[543px] items-start gap-2 relative">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pl-0 pr-2 lg:pr-5 py-4 lg:py-6 relative self-stretch w-full border-t-[0.8px] border-solid border-[#243646cc]"
            >
              <div className="relative font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl tracking-[0] leading-tight lg:leading-[62.4px] whitespace-nowrap">
                {stat.number}
              </div>

              <div className="flex flex-col w-full sm:max-w-[225px] items-start gap-2 lg:gap-3 relative">
                <h3 className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base tracking-[0] leading-normal">
                  {stat.title}
                </h3>

                <p className="relative self-stretch font-['Helvetica_Neue-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base tracking-[0] leading-relaxed lg:leading-[20.8px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}