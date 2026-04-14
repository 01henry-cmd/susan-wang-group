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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  intent: z.enum(["buy", "sell", "invest", "other"]),
  message: z.string().min(10, "Please provide more details")
});

export default function ContactPage() {
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
      title: "Inquiry Received",
      description: "Thank you. Susan will be in touch shortly.",
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
                Connect
                <span className="w-8 h-[1px] bg-primary ml-4"></span>
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight">Book a Consultation</h1>
            </motion.div>
          </div>
        </section>

        <section className="py-24 -mt-20 relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white shadow-2xl shadow-black/5 p-8 md:p-16 border border-border">
              
              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h3 className="font-serif text-3xl mb-6 font-light tracking-tight leading-snug">Let's discuss your real estate goals.</h3>
                  <p className="text-foreground/70 leading-relaxed font-light text-lg">
                    Whether you are seeking to acquire a new property, maximize the return on a sale, or expand your investment portfolio, I am here to provide strategic guidance and clarity.
                  </p>
                </div>

                <div className="space-y-8 pt-8 border-t border-border">
                  <div className="flex items-start group">
                    <Phone className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">Direct</h4>
                      <a href="tel:+19495550182" className="text-xl font-light hover:text-primary transition-colors">(949) 555-0182</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Mail className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">Email</h4>
                      <a href="mailto:susan@susanwanggroup.com" className="text-xl font-light hover:text-primary transition-colors border-b border-transparent group-hover:border-primary pb-1">susan@susanwanggroup.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">Office</h4>
                      <p className="text-lg font-light leading-relaxed">Coldwell Banker Realty<br/>Newport Beach, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <Instagram className="w-5 h-5 text-primary shrink-0 mr-6 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-[10px] tracking-[0.2em] uppercase text-foreground/50 mb-2">Social</h4>
                      <a href="#" className="text-lg font-light hover:text-primary transition-colors border-b border-transparent group-hover:border-primary pb-1">@susanwanggroup</a>
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
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Full Name</FormLabel>
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
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Email</FormLabel>
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
                            <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="(949) 555-0000" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 pb-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
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
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">How can I help you?</FormLabel>
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
                                <FormLabel className="font-light text-lg cursor-pointer">I am looking to buy</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="sell" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">I am looking to sell</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="invest" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">I am looking to invest</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-4 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="other" className="w-5 h-5 rounded-none border-foreground/30 text-foreground" />
                                </FormControl>
                                <FormLabel className="font-light text-lg cursor-pointer">Other inquiry</FormLabel>
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
                          <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide any relevant details about your timeline, locations of interest, or property specifications..." 
                              className="resize-none rounded-none border-t-0 border-x-0 border-b border-border bg-transparent min-h-[120px] px-0 py-4 text-lg font-light focus-visible:ring-0 focus-visible:border-foreground transition-colors" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs font-light" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full rounded-none py-8 uppercase tracking-[0.2em] text-sm mt-8 bg-foreground hover:bg-foreground/90 text-white font-medium transition-colors">
                      Submit Inquiry
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
