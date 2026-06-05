import { Button } from '../atoms/Button';
import { SocialIcon } from '../molecules/SocialIcon';
import { heroSocials } from '../../data';

export function Hero() {
  return (
    <section className="min-h-[calc(90vh-4rem)] flex items-center bg-white overflow-hidden">
      <div className="mx-auto px-6 md:px-12 py-16 w-full min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left – Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1 justify-center">
            <div className="flex flex-col gap-1 border-b-[2px] pb-3 border-primary">
              <p className="text-body text-xl font-medium tracking-[0.05em] uppercase font-heading">
                Hello, I Am Willy Lara
              </p>

              <h1 className="font-heading text-5xl xl:text-6xl leading-tight text-primary">
                Mid Full-Stack Developer
              </h1>

              <div className="inline-flex">
                <span className="text-primary text-3xl font-medium font-heading">
                  & UI/UX Designer
                </span>
              </div>
            </div>

            <p className="text-body leading-relaxed max-w-md">
              I am the expert you need to turn your ideas into real products
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/docs/LARA CAMPOS WILLY.pdf"
                download="Willy Lara - Resume.pdf"
              >
                <Button variant="primary" size="md">
                  <DownloadIcon />
                  Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="md"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Work
                <ArrowRightIcon />
              </Button>
            </div>

            {/* Social icons */}
            <div className="flex flex-col gap-3">
              <p className="text-body text-md font-medium font-heading">
                Let's connect
              </p>
              <div className="flex items-center gap-3">
                {heroSocials.map((s) => (
                  <SocialIcon key={s.platform} platform={s.platform} url={s.url} label={s.label} size="sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Right – Photo */}
          <div className="relative order-1 lg:order-2">
              <div className="absolute bottom-[-50vh] right-[-3em]">
                <img className='max-w-[fit-content] h-[50vh] md:h-[90vh] hidden lg:block' src="/images/Willy-Hero.png" alt="" />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
