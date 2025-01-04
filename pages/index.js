import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { Icon } from "@iconify/react";


export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Nolyn - Stop arm cameras. Modernized."
                description="Discover Nolyn, the next generation of stop arm cameras."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Simple. Easy. Affordable.
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Don't like paying exorbitant prices for stop-arm cameras? We didn't either. That's why we created Nolyn, the next generation of stop-arm cameras, built by bus riders, for bus riders. 
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {/* <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Don't take our word for it.
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Hear what our customers have to say about Nolyn.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customizable Layouts
                                        </CardHeader>
                                        <p>
                                            Personalize your meal planning
                                            experience with our flexible
                                            layouts. Tailor your sections,
                                            categories, and tabs to suit your
                                            unique style and organization
                                            preferences. Our template adapts to
                                            your needs, providing a seamless and
                                            personalized planning experience.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Progress Tracking
                                        </CardHeader>
                                        <p>
                                            Celebrate your wins and stay
                                            motivated on your nutrition journey.
                                            Nolyn allows you to monitor
                                            your progress with weight,
                                            measurements, and other key metrics.
                                            Track your improvements over time
                                            and see the positive impact of your
                                            healthy choices.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer> */}
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            {/* <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle> */}
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Get Nolyn today.{" "}
                                <br></br>
                                <br></br>
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                And join hundreds of other school districts who have made the switch to the future of stop arm cameras
                                </p>
                                <a
                                role="button"
                                href="mailto:thefuka2@gmail.com"
                                className="btn btn--secondary padding-x-8 padding-y-4 mt-8"
                            >
                                Get a quote today
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                            </Content>

                            {/* <Accordion /> */}
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
