import { LuxuryButton } from "@/components/ui/luxury-button"
import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            // Create mailto URL
            const subject = encodeURIComponent(`Contact Form Submission from ${formData.firstName} ${formData.lastName}`)
            const body = encodeURIComponent(
                `Name: ${formData.firstName} ${formData.lastName}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone}\n\n` +
                `Message:\n${formData.message}`
            )
            const mailtoUrl = `mailto:info@alex-tec.com?subject=${subject}&body=${body}`

            // Open email client
            window.location.href = mailtoUrl

            setSubmitMessage('Email client opened successfully!')

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            })
        } catch (error) {
            setSubmitMessage('Error opening email client. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }
    const contactInfo = [
        {
            icon: Phone,
            label: "Phone",
            value: "01001218760"
        },
        {
            icon: Mail,
            label: "Email",
            value: "info@alex-tec.com"
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "01001218760"
        }
    ]

    const socialLinks = [
        { icon: Facebook, href: "#" },
        // { icon: Instagram, href: "#" },
        // { icon: Linkedin, href: "#" }
    ]

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-4 fade-in-up">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-muted-foreground fade-in-up">
                        Ready to find your dream property? Let's talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="fade-in-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-input border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                    placeholder="Tell us about your dream property..."
                                />
                            </div>

                            {submitMessage && (
                                <div className={`p-3 rounded-lg ${submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {submitMessage}
                                </div>
                            )}

                            <LuxuryButton
                                type="submit"
                                variant="hero"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </LuxuryButton>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="fade-in-up space-y-8">
                        <div>
                            <h3 className="text-2xl font-luxury font-bold text-primary mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {contactInfo.map((contact, index) => {
                                    const IconComponent = contact.icon
                                    return (
                                        <div key={index} className="flex items-center">
                                            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                                                <IconComponent className="w-6 h-6 text-primary-foreground" />
                                            </div>
                                            <div>
                                                <p className="text-foreground font-medium">{contact.label}</p>
                                                <p className="text-muted-foreground">{contact.value}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="border-t border-border pt-8">
                            <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground hover:shadow-gold-glow transition-all duration-300"
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
