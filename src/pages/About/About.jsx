import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Regor Fotso, a Site Reliability Engineer at Eesti
                Energia and a web engineering student with a passion for secure
                automation and modern infrastructure. I specialize in building
                resilient systems, automating workflows, and crafting reliable
                digital experiences that scale. When I’m not diving into code,
                I’m leveling up my skills through tech courses and working
                towards a future in IT law.{" "}
              </p>
              <p className="text-white">
                My focus is on building secure, automated infrastructure that
                supports scalable digital systems. Right now, I’m expanding into
                IT law and AI-driven automation to bridge the gap between
                technology and regulation — aiming to shape the future of
                ethical, intelligent systems.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I got into tech at 16 through vocational school, then kept
                    leveling up with hands-on projects and Udemy deep-dives.
                    Fast forward 6 years — I’m working as an SRE with 3.5 years
                    of real-world experience under my belt. I’m all about
                    building reliable systems, automating the boring stuff, and
                    making infrastructure actually make sense. Lately, I’ve been
                    getting into AI automation and IT law because the future
                    isn’t just about writing code — it’s about writing the rules
                    too. Lifelong learner, builder, breaker (of limits, not
                    prod).
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Regor Fotso
                    </cite>
                    <div className="flex items-center gap-2"></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
