import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export function ProgramsSection() {
  const salaryData = [
    {
      amount: "24 Lakhs/p.a.",
      label: "Highest Package",
      showSeparator: true,
    },
    {
      amount: "10 Lakhs/p.a.",
      label: "Average Package",
      showSeparator: true,
    },
    {
      amount: "5 Lakhs/p.a.",
      label: "Lowest Package",
      showSeparator: false,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 lg:gap-14 relative">
      <header className="flex flex-col w-full max-w-[640px] items-center gap-5 relative text-center">
        <h2 className="relative self-stretch font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center tracking-[0] leading-normal">
          Our Students Achieve Global Salary Standards
        </h2>

        <p className="relative self-stretch font-['Helvetica-Regular',Helvetica] font-normal text-[#243646b3] text-sm lg:text-base text-center tracking-[0.16px] leading-relaxed lg:leading-[20.8px]">
          Real success, real numbers — from first job offers to thriving
          international careers.
        </p>
      </header>

      <Card className="w-full border-0 shadow-none bg-transparent">
        <CardContent className="flex flex-col lg:flex-row items-center justify-between relative w-full p-0 gap-8 lg:gap-0">
          {salaryData.map((item, index) => (
            <div key={index} className="flex items-center relative w-full lg:w-auto">
              <div className="flex w-full lg:w-[349px] items-center justify-center py-6 px-5 relative">
                <div className="flex flex-col w-full lg:w-[284px] items-center justify-between gap-4 lg:gap-0 lg:h-[95px] relative">
                  <div className="relative w-fit font-['Playfair_Display',Helvetica] font-medium text-[#243646] text-3xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[62.4px] whitespace-nowrap">
                    {item.amount}
                  </div>

                  <div className="flex flex-col w-full lg:w-[225px] items-center gap-3 relative">
                    <div className="relative self-stretch font-['Helvetica_Neue-Medium',Helvetica] font-medium text-[#243646] text-sm lg:text-base text-center tracking-[0] leading-normal whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>

              {item.showSeparator && (
                <Separator
                  orientation="vertical"
                  className="hidden lg:block h-[95px] w-[0.8px] bg-[#243646cc]"
                />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}