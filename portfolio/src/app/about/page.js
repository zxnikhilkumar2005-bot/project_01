import TextReveal from "@/components/TextReveal";

export default function Page() {
    return (
        <div>
            <TextReveal
                splitBy="chars"
                trigger="scroll"
                scrollStart="top 80%"
                className=" text-[5rem] font-bold uppercase text-black"
            >
                About Page

            </TextReveal>
        </div>
    );
} 