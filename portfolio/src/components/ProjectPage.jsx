import TextReveal from "./TextReveal"

const ProjectPage = ({ project }) => {
    return (
        <>
            <main>
                <section className="flex h-screen w-full pt-[7rem] pb-[4rem] px-[3rem] pl-2 gap-6"  >
                    <div className="firstSegment h-full w-[15%] shrink-0" >
                        <TextReveal>
                            <h3 className="text-[2rem]" >{project.number}</h3>
                        </TextReveal>
                    </div>
                    <div className="secondSegment h-[90%] w-[30%]   ">
                        <div className="imgeDiv">
                            <img src={project.coverImage} alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <footer></footer>
            </main>
        </>
    )
}

export default ProjectPage
