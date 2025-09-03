import { useState, useEffect } from "react"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Menu, X } from "lucide-react"
import logoImage from "@/assets/logo.png"

interface NavbarProps {
    onScrollToSection: (id: string) => void
}

export function Navbar({ onScrollToSection }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (id: string) => {
        onScrollToSection(id)
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={logoImage}
                            alt="Alex Tech Logo"
                            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => handleNavClick('home')} className="nav-link active">
                            Home
                        </button>
                        <button onClick={() => handleNavClick('projects')} className="nav-link">
                            Projects
                        </button>
                        <button onClick={() => handleNavClick('why-us')} className="nav-link">
                            Why Us
                        </button>
                        {/* <button onClick={() => handleNavClick('contact')} className="nav-link">
                            Contact
                        </button> */}

                        <ThemeToggle />

                        <LuxuryButton
                            onClick={() => handleNavClick('contact')}
                            className="ml-4"
                        >
                            Get in Touch
                        </LuxuryButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-foreground hover:text-primary transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-border">
                        <div className="flex flex-col space-y-4 pt-4">
                            <button onClick={() => handleNavClick('home')} className="nav-link text-left">
                                Home
                            </button>
                            <button onClick={() => handleNavClick('projects')} className="nav-link text-left">
                                Projects
                            </button>
                            <button onClick={() => handleNavClick('why-us')} className="nav-link text-left">
                                Why Us
                            </button>
                            {/* <button onClick={() => handleNavClick('contact')} className="nav-link text-left">
                                Contact
                            </button> */}

                            <div className="flex items-center space-x-4 pt-2">
                                <span className="text-sm text-muted-foreground">Theme:</span>
                                <ThemeToggle />
                            </div>

                            <LuxuryButton
                                onClick={() => handleNavClick('contact')}
                                className="self-start"
                            >
                                Get in Touch
                            </LuxuryButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
