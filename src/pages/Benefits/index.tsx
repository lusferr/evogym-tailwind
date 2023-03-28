import { BenefitType, SelectedPage } from "../../shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { HText } from "../../components/HText";
import { Benefit } from "./Benefit";
import { ActionButton } from "../../components/actionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png"

interface BenefitsProps {
    setSelectedPage: (value: SelectedPage) => void;
}

export function Benefits({ setSelectedPage }: BenefitsProps) {
    const benefits: Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "State of the art facilities",
            description: 'aliquam earum ad soluta cupiditate saepe! Consequatur facilis iusto nostrum cupiditate a, dicta unde et vero.'
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "State of the art training",
            description: 'aliquam earum ad soluta cupiditate saepe! Consequatur facilis iusto nostrum cupiditate a, dicta unde et vero.'
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert and Pro Trainers",
            description: 'aliquam earum ad soluta cupiditate saepe! Consequatur facilis iusto nostrum cupiditate a, dicta unde et vero.'
        },
    ]

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    }

    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        MORE THAN  JUST GYM.
                    </HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet velit accusamus modi numquam, aliquam earum ad soluta cupiditate saepe! Consequatur facilis iusto nostrum cupiditate a, dicta unde et vero.
                    </p>
                </motion.div>

                {/* benefits */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit, index) => {
                        return (
                            <Benefit
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        )
                    })}
                </motion.div>

                {/* graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* graphic */}
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphic}
                        alt="benefits-page-graphic" />

                    {/* descript */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* descript */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2 ,duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis error velit at. Maiores ad tempore porro possimus iusto commodi unde, veritatis vitae eum sit rerum praesentium vero facere quas qui!</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error aperiam debitis nam reprehenderit laudantium aliquam maxime illum. Mollitia velit dicta voluptates, aut enim doloribus est placeat unde odio officia!</p>
                        </motion.div>
                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}