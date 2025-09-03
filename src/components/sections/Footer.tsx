import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#" },
        // { icon: Instagram, href: "#" },
        // { icon: Linkedin, href: "#" }
    ]

    return (
        <footer className="py-8 bg-card border-t border-border">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <div className="text-2xl font-luxury font-bold text-primary mb-4">
                        Alex Tech
                    </div>
                    <p className="text-muted-foreground mb-4">
                        © {new Date().getFullYear()} Alex Tech. All Rights Reserved.
                    </p>
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-primary hover:text-primary/80 transition-colors"
                                >
                                    <IconComponent className="w-5 h-5" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
