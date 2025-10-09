import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/ui/logo";

export default function OpenStore() {
  return (
    <section className="bg-accent flex justify-center items-center p-5  ">
      <section className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 mb-6">
            <Logo />
            <h2 className="text-xl font-bold">Open Your Store Today</h2>
            <p className="text-gray-500 text-sm">
              Start selling in minutes and reach thousands of customers
              instantly
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-6">
            {/* Store Profile */}
            <div>
              <h3 className="text-sm font-bold mb-2">STORE PROFILE</h3>
              <Input
                className="h-14 mb-1.5"
                id="store-name"
                type="text"
                placeholder="Store Name"
                required
              />
              <Input
                className="h-14 mt-1.5"
                id="store-domain"
                type="text"
                placeholder="Store Domain"
                required
              />
            </div>

            <hr />

            {/* Store Address */}
            <div>
              <h3 className="text-sm font-bold mb-2">STORE ADDRESS</h3>
              <Input
                className="h-14 mb-1.5"
                id="city"
                type="text"
                placeholder="City"
                required
              />
              <Input
                className="h-14 my-1.5"
                id="postal-code"
                type="text"
                placeholder="Postal Code"
                required
              />
              <Textarea
                className="resize-none h-24 my-1.5 p-3"
                placeholder="Address"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Button className="w-full h-11.5" type="submit">
                Submit
              </Button>
              <Button variant="link" className="font-bold" type="button">
                Back
              </Button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}
