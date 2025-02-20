/**
 * @copyright 2025 Lemark Sumalpong
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./components/Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
      
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Project',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/LemarkSumalpong'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lemark-sumalpong-4847b3305/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/LemarkSumalpong'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/pacifist.lem/'
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/pacifist.lem'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                         Let&apos;s work together today!
                    </h2>
                    <ButtonPrimary
                      href="mailto:sumalponglemark2@gmail.com"
                      label="Connect with me"
                      icon="chevron_right"
                      classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({label, href}, key) =>(
                                <li key={key}>
                                    <a 
                                     href=""
                                     className="block text-sm text-zinc-400 py-1
                                     transition-colors hover:text-zinc-200 reveal-up"
                                     >
                                        {label}
                                    </a>                                   
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({label, href}, key) =>(
                                <li key={key}>
                                    <a 
                                     href={href}
                                     target="_blank"
                                     className="ock text-sm text-zinc-400 py-1
                                     transition-colors hover:text-zinc-200 reveal-up"
                                     >
                                        {label}
                                    </a>                                   
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>                
            </div>

            <div className="flex items-center justify-between pt-10 mb-8 ">
                <a 
                 href="/"
                 className="logo reveal-up"
                 >
                    <img 
                     src="images/logo.svg" 
                     width={40}
                     height={40}
                     alt="Logo"
                    />
                 </a>

                 <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span 
                    className="text-zinc-200 reveal-up">
                        Lemark Sumalpong
                    </span>
                 </p>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
