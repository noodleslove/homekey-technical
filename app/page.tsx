import HeroSub from "@/components/HeroSub";
import PropertiesListing from "@/components/PropertiesList";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Homekey",
};

const page = () => {
    return (
        <main>
            <HeroSub
                title="Discover inspiring designed homes."
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                badge="Properties"
            />
            <PropertiesListing />
        </main>
    );
};

export default page;
