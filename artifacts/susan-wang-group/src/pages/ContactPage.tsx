import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
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
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading 
            title="Book a Consultation" 
            subtitle="Connect" 
            align="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-3xl mb-6">Let's discuss your real estate goals.</h3>
                <p className="text-foreground/70 leading-relaxed font-light">
                  Whether you are seeking to acquire a new property, maximize the return on a sale, or expand your investment portfolio, I am here to provide strategic guidance and clarity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Direct</h4>
                    <a href="tel:+19495550182" className="text-lg hover:text-primary transition-colors">(949) 555-0182</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Email</h4>
                    <a href="mailto:susan@susanwanggroup.com" className="text-lg hover:text-primary transition-colors">susan@susanwanggroup.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Office</h4>
                    <p className="text-lg">Coldwell Banker Realty<br/>Newport Beach, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-sm tracking-wider uppercase mb-1">Social</h4>
                    <a href="#" className="text-lg hover:text-primary transition-colors">@susanwanggroup</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-wider">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@example.com" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="(949) 555-0000" className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="intent"
                    render={({ field }) => (
                      <FormItem className="space-y-3 pt-4">
                        <FormLabel className="text-xs uppercase tracking-wider">How can I help you?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="buy" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">I am looking to buy</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="sell" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">I am looking to sell</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="invest" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">I am looking to invest</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">Other inquiry</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="pt-4">
                        <FormLabel className="text-xs uppercase tracking-wider">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any relevant details about your timeline, locations of interest, or property specifications..." 
                            className="resize-none rounded-none border-border bg-transparent min-h-[120px] focus-visible:ring-0 focus-visible:border-primary p-3" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full rounded-none py-6 uppercase tracking-wider text-sm mt-4 bg-foreground hover:bg-foreground/90 text-white">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
