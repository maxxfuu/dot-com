import Image from "next/image";

// SVG Icon Components
const LinkedInIcon = () => (
  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.909L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
  </svg>
);

const socials = [
  {
    name: "Discord",
    url: "https://discord.com/users/maxxfuu",
    icon: <DiscordIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maxxfuu/",
    icon: <LinkedInIcon />,
  },
  {
    name: "X",
    url: "https://x.com/maxxfuu",
    icon: <XIcon />,
  },
  {
    name: "GitHub",
    url: "https://github.com/maxxfuu",
    icon: <GitHubIcon />,
  },
  {
    name: "Email",
    url: "mailto:maxfu826@gmail.com",
    icon: <EmailIcon />,
  },
]

export default function Hero() {
  return(
    <div className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 md:py-16 gap-6 sm:gap-8">
      {/* left side */}
      <div className="flex flex-col px-4 max-w-full sm:max-w-md">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">Max Fu</h1>
        <h2 className="text-sm sm:text-base md:text-lg flex flex-col sm:inline-flex sm:flex-row sm:items-center mb-3 sm:mb-4">
          <span>CSE Student @ UC Merced</span>
          <span className="bg-[#101827] text-white-500 mt-2 sm:mt-0 sm:ml-4 rounded-md px-2 py-0.5 text-xs sm:text-sm self-start sm:self-auto">Junior</span>
        </h2>
        <p className="text-[#9CA3AF] mb-3 text-sm sm:text-base leading-relaxed">I&apos;m a full time student and an aspiring software engineer. I enjoy building SaaS Projects that are innovative, unique, and scalable.</p>
        <p className="text-[#9CA3AF] mb-4 sm:mb-6 text-sm sm:text-base">If you&apos;d like to connect, feel free to reach out!</p>
        <div className="flex flex-row gap-4 sm:gap-6 justify-start">
          {socials.map((social) => (
             <a href={social.url} key={social.name} className="text-gray-400 hover:text-white transition-colors p-1" target="_blank">
               <div className="w-5 h-5 sm:w-6 sm:h-6">
                 {social.icon}
               </div>
             </a>
           ))}
        </div>
      </div>

      <div>
        <Image 
          src="/profile.webp" 
          alt="Max Fu" 
          width={400} 
          height={400}
          priority={true}
          draggable={false}
          className="w-[300px] h-[300px] object-cover rounded-md border-2 sm:border-4 border-[#151315] mt-4"/>
      </div>
    </div>
  );
}