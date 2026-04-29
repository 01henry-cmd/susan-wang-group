import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  intent: z.enum(["buy", "sell", "invest", "other"]),
  message: z.string().min(10, "Please provide more details")
});

export default function ContactPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      intent: "buy",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t("contact_toast_title"),
      description: t("contact_toast_desc"),
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Editorial Narrow Banner */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80" 
              alt="Luxury Office" 
              className="w-full h-full object-cover object-center grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-[#ebe8e2]/80 mix-blend-overlay" />
            <div className="absolute inset-0 bg-white/60" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6 flex items-center justify-center">
                <span className="w-8 h-[1px] bg-primary mr-4"></span>
                {t("contact_eyebrow")}
                <span className="w-8 h-[1px] bg-primary ml-4"></span>
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight">{t("contact_h1")}</h1>
            </motion.div>
          </div>
        </section>

        <section className="py-24 -mt-20 relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white shadow-2xl shadow-black/5 p-8 md:p-16 border border-border">
              
              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h3 className="font-serif text-3xl mb-6 font-light tracking-tight leading-snug">{t("contact_intro")}</h3>
                  <p className="text-foreground/70 leading-relaxed font-light text-lg">
                    {t("contact_sub")}
                  </p>
                </div>

                <div className="space-y-8 pt-8 border-t border-border">
                  <div className="flex items-start group">
                    <Phone className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">{t("contact_direct")}</h4>
                      <a href="tel:+17148182511" className="text-xl font-light hover:text-primary transition-colors">(714) 818-2511</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Mail className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">{t("contact_email_label")}</h4>
                      <a href="mailto:Susan.wang@cbrealty.com" className="text-xl font-light hover:text-primary transition-colors border-b border-transparent group-hover:border-primary pb-1">Susan.wang@cbrealty.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">{t("contact_office")}</h4>
                      <p className="text-lg font-light leading-relaxed">840 Newport Center Dr, Ste 100<br/>Newport Beach, CA 92660</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Instagram className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">Instagram</h4>
                      <a href="#" className="text-lg font-light hover:text-primary transition-colors border-b border-transparent group-hover:border-primary pb-1">@susanwanggroup</a>
                    </div>
                  </div>

                  <div className="flex items-start pt-8 border-t border-border">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" fill="currentColor" aria-label="WeChat">
                      <path d="M8.7 11.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm4.6 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM9 5C4 5 0 8.4 0 12.6c0 2.3 1.2 4.4 3.1 5.8l-.7 2.2 2.5-1.4C6 19.7 7.5 20 9 20c.3 0 .6 0 .9-.1C9.6 19.4 9.5 19 9.5 18.5c0-3.6 3.4-6.5 7.5-6.5.3 0 .7 0 1 .1C17.4 8.4 13.6 5 9 5z"/>
                      <path d="M21.6 22l-1.9-1.1c-1 .4-2.1.6-3.2.6-3.5 0-6.3-2.3-6.3-5.2S13 11 16.5 11s6.3 2.3 6.3 5.2c0 1.5-.7 2.8-1.9 3.8L21.6 22zm-5.2-7.8c-.4 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8zm3.2 0c-.4 0-.8.3-.8.8s.4.8.8.8.8-.3.8-.8-.3-.8-.8-.8z"/>
                    </svg>
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-3">{t("contact_wechat")}</h4>
                      <div className="border border-border p-3 inline-block bg-white shadow-sm">
                        <img src="/wechat-qr.jpg" alt="WeChat QR Code" className="w-28 h-28 object-contain" />
                        <p className="text-[9px] tracking-[0.18em] uppercase text-foreground/40 text-center mt-2">{t("contact_wechat_scan")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 lg:pl-16 lg:border-l lg:border-border">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{t("contact_name")}</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 pb-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{t("contact_email")}</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@example.com" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 pb-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs font-light" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{t("contact_phone")}</FormLabel>
                            <FormControl>
                              <Input placeholder="(714) 818-2511" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 pb-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs font-light" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="intent"
                      render={({ field }) => (
                        <FormItem className="space-y-6 pt-4">
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{t("contact_intent")}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-4"
                            >
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="buy" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">{t("contact_buy")}</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="sell" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">{t("contact_sell")}</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="invest" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">{t("contact_invest")}</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="other" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">{t("contact_other")}</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="pt-4">
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{t("contact_message")}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t("contact_message_placeholder")}
                              className="resize-none rounded-none border-t-0 border-x-0 border-b border-border bg-transparent min-h-[120px] px-0 py-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full rounded-none py-8 uppercase tracking-[0.2em] text-sm mt-8 bg-foreground hover:bg-foreground/90 text-white font-medium transition-colors">
                      {t("contact_submit")}
                    </Button>
                  </form>
                </Form>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
