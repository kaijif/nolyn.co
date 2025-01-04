import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Nolyn has revolutionized the way we handle school bus safety in our district. The AI-powered stop arm cameras are not only cutting-edge but also incredibly cost-effective. We've saved a significant amount of resources while enhancing our enforcement capabilities. The customer service from Nolyn is top-notch, always responsive and ready to assist. Truly the future of stop arm cameras!"
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "As a law enforcement officer, efficiency is key, and Nolyn has made our job much easier. The AI technology is a game-changer, making enforcement smoother and more accurate. What's even better is the cost – Nolyn is budget-friendly without compromising on quality. The customer service team has been exceptional, addressing our needs promptly and professionally. Nolyn is the future of stop arm cameras, no doubt."
    },
    {
        id: uuid(),
        title: "Miguel J.",
        icon: "carbon:user-avatar-filled-alt",
        content: "Being a parent, the safety of our children is paramount. Nolyn's stop arm cameras have given us peace of mind, knowing that the latest AI technology is actively working to keep our kids safe. What's impressive is not just the product but the affordability. Nolyn has made advanced safety measures accessible to all. Their customer service is fantastic – responsive and friendly. Highly recommend for any school district!"
    },
    {
        id: uuid(),
        title: "Kim L.",
        icon: "carbon:user-avatar-filled-alt",
        content: "Implementing Nolyn in our school district has been a game-changer for us. The AI capabilities have made enforcement more effective, and the cost savings compared to alternatives are significant. The transition was smooth, thanks to the excellent support from the Nolyn team. Nolyn is not just a product; it's a solution that's changing the landscape of stop arm cameras for the better."
    }
];

export const Columns = () => {
    return (
        // <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
        //     {ColumnData.map((item) => (
        //         <div
        //             id={item.id}
        //             key={item.id}
        //             className="benefits-list--item text-[#737373] text-left"
        //         >
        //             <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
        //             <h3 className="text-xl mb-2 font-medium text-black">
        //                 {item.title}
        //             </h3>
        //             <p>{item.content}</p>
        //             <o className="flex">
        //                 <Icon
        //                     icon="solar:star-bold"
        //                     className="h-10 mr-1 text-secondary-500"
        //                 />
        //                 <Icon
        //                     icon="solar:star-bold"
        //                     className="h-10 mr-1 text-secondary-500"
        //                 />
        //                 <Icon
        //                     icon="solar:star-bold"
        //                     className="h-10 mr-1 text-secondary-500"
        //                 />
        //                 <Icon
        //                     icon="solar:star-bold"
        //                     className="h-10 mr-1 text-secondary-500"
        //                 />
        //                 <Icon
        //                     icon="solar:star-bold"
        //                     className="h-10 mr-1 text-secondary-500"
        //                 />
        //             </o>
        //         </div>
        //     ))}
        // </SectionContainer>
        <div></div>
    );
};
