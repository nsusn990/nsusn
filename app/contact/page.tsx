import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
  return (
    <section className="max-h-screen mx-8 flex items-center justify-center">
      <div className="w-full lg:w-[90%] max-h-screen">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[50%] py-4 lg:py-22 items-center p-1 lg:p-6">
            <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground text-sm py-2 lg:py-5">
              We&apos;re here to help! Whether you have a question, need
              assistance, or just want to share feedback, feel free to reach
              out. Fill out the form below or use the contact information
              provided, and we&apos;ll get back to you as soon as possible.
              <br />
              <br />
              <span className="italic">
                We look forward to hearing from you!
              </span>
            </p>
            <p className="text-gray-800"><span className="font-semibold pr-3">Email:</span> nsu.sn@northsouth.edu</p>              
            <p className="text-gray-800"><span className="font-semibold pr-3">Phone:</span> +8801790-176253</p>              
          </div>
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <h1 className="text-2xl text-center font-semibold">
              Fill out the form below
            </h1>
            <Separator className="mt-4 mb-7" />

            <form
              action="https://formsubmit.co/nsu.sn+webcontact@northsouth.edu"
              method="POST"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="01987654321"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    required
                  />
                </div>

                {/* Hidden input for subject and redirection */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Website Contact Form"
                />
                <input
                  type="hidden"
                  name="_next"
                  value={process.env.WEB_URL}
                />

                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;